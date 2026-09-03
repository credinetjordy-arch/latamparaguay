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
  'Compra exitosa',
] as const;

type PageDebugEvent = (typeof PAGE_EVENTS)[number];

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

  console.info('[debug-page-api:body]', body);
  const telegram = await sendPageEvent(event);
  return json({ event, telegram });
};
