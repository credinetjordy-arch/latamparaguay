import citiesJson from './cities.json';

export const siteConfig = {
  name: 'LATAM Airlines',
  country: 'Paraguay',
  locale: 'es-PY',
  currency: 'USD',
  currencySymbol: '$',
  title: 'Cotiza Vuelos, Hoteles y Autos | LATAM en Paraguay',
  description:
    'Cotiza y compra vuelos, hoteles y autos con LATAM Airlines Paraguay. Acumula Millas LATAM Pass.',
};

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  icon?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  items?: NavLink[];
};

export const discoverMenu: NavLink[] = [
  { label: 'Ofertas', href: '/ofertas' },
  { label: 'Destinos', href: '/destinos' },
  { label: 'Paquetes turísticos', href: '/paquetes' },
  { label: 'Alojamientos', href: '/alojamientos' },
  { label: 'Alquiler de autos', href: '/autos' },
  { label: 'Universal', href: '/universal' },
  { label: 'Actividades', href: '/actividades' },
  { label: 'eSIM', href: '/esim' },
  { label: 'Traslados', href: '/traslados' },
  { label: 'Asistencia en viaje', href: '/asistencia' },
  { label: 'Más servicios', href: '/servicios' },
];

export const tripsMenu: NavLink[] = [
  { label: 'Administrar tus viajes', href: '/mis-viajes' },
  { label: 'Check-in', href: '/check-in' },
];

export const headerLinks = {
  help: { label: 'Centro de ayuda', href: '/ayuda' },
  flightStatus: { label: 'Estado de vuelo', href: '/estado-de-vuelo' },
  pass: { label: 'LATAM Pass', href: 'https://www.latamairlines.com/py/es/latam-pass', external: true },
  login: { label: 'Iniciar sesión', href: '/login' },
};

export const currencies = [
  { code: 'USD', symbol: '$', name: 'Dólares americanos', country: 'PY' },
  { code: 'COP', symbol: '$', name: 'Pesos colombianos', country: 'CO' },
  { code: 'EUR', symbol: '€', name: 'Euros', country: 'ES' },
  { code: 'BRL', symbol: 'R$', name: 'Reales brasileños', country: 'BR' },
];

export type City = {
  code: string;
  city: string;
  country: string;
  airport: string;
  type?: 'AIRPORT' | 'CITY' | 'RAILWAY_STATION';
};

export const cities: City[] = citiesJson as City[];

export const bookingTabs = [
  { id: 'vuelos', label: 'Vuelos' },
  { id: 'alojamientos', label: 'Alojamientos' },
  { id: 'carros', label: 'Autos' },
  { id: 'asistencia', label: 'Asistencia en viaje' },
  { id: 'upgrade', label: 'Upgrade' },
  { id: 'esim', label: 'eSIM' },
];

export const cabins = ['Economy', 'Premium Economy', 'Premium Business'];

export const loginInvite = {
  title: 'Inicia sesión en LATAM y podrás:',
  items: [
    'Acumular y canjear Millas LATAM Pass por pasajes y más.',
    'Administrar tus viajes.',
    'Pagar con tu LATAM Wallet.',
  ],
};

export const promoBanner = {
  badge: '¡CYBER LATAM!',
  title: 'Hasta 42% dcto. 🚨 ¡Ofertas Cyber activas!',
  text: 'Paraguay y el mundo se recorren mejor en avión. ✈️ Compra pasajes hoy y vuela con el servicio que mereces.',
  cta: 'Comprar pasajes',
  href: '/ofertas',
  image: '/images/promo-cyber.png',
};

export const serviceLinks = [
  { id: 'esim', label: 'eSIM', href: '/esim', icon: 'esim' },
  { id: 'traslados', label: 'Traslados', href: '/traslados', icon: 'transfer' },
  { id: 'actividades', label: 'Actividades', href: '/actividades', icon: 'activity' },
];

export type Offer = {
  id: string;
  city: string;
  image: string;
  badge: string;
  trip: string;
  date: string;
  cabin: string;
  price: number;
  miles: number;
  discount: number;
  direct: boolean;
  category: string;
  from: string;
};

export const offers: Offer[] = [
  {
    id: 'lim',
    city: 'Lima',
    image: '/images/landing/cuenca.png',
    badge: 'Destinos imperdibles',
    trip: 'Solo ida',
    date: '24/09/26',
    cabin: 'Economy',
    price: 235.8,
    miles: 47160,
    discount: 0,
    direct: true,
    category: 'en-oferta',
    from: 'ASU',
  },
  {
    id: 'gru',
    city: 'São Paulo',
    image: '/images/landing/guayaquil.png',
    badge: 'Destinos imperdibles',
    trip: 'Solo ida',
    date: '10/09/26',
    cabin: 'Economy',
    price: 198.4,
    miles: 39680,
    discount: 0,
    direct: true,
    category: 'aventuras-urbanas',
    from: 'ASU',
  },
  {
    id: 'scl',
    city: 'Santiago de Chile',
    image: '/images/landing/bogota.png',
    badge: 'Destinos imperdibles',
    trip: 'Solo ida',
    date: '25/09/26',
    cabin: 'Economy',
    price: 214.9,
    miles: 42980,
    discount: 0,
    direct: true,
    category: 'joyas-sudamericanas',
    from: 'ASU',
  },
  {
    id: 'puj',
    city: 'Punta Cana',
    image: '/images/landing/manta.png',
    badge: 'Destinos imperdibles',
    trip: 'Ida 09/09/26 · Vuelta 16/09/26',
    date: '09/09/26',
    cabin: 'Economy',
    price: 537.64,
    miles: 107528,
    discount: 0,
    direct: false,
    category: 'destinos-playeros',
    from: 'ASU',
  },
  {
    id: 'cun',
    city: 'Cancún',
    image: '/images/landing/miami.png',
    badge: 'Destinos imperdibles',
    trip: 'Ida 18/09/26 · Vuelta 25/09/26',
    date: '18/09/26',
    cabin: 'Economy',
    price: 489.2,
    miles: 97840,
    discount: 0,
    direct: false,
    category: 'destinos-playeros',
    from: 'ASU',
  },
];

export const offerCategories = [
  { id: 'en-oferta', label: 'En oferta', icon: 'tag' },
  { id: 'destinos-playeros', label: 'Destinos playeros', icon: 'palm' },
  { id: 'aventuras-urbanas', label: 'Aventuras urbanas', icon: 'city' },
  { id: 'vida-nocturna', label: 'Vida nocturna', icon: 'night' },
  { id: 'retiros-naturales', label: 'Retiros naturales', icon: 'nature' },
  { id: 'joyas-sudamericanas', label: 'Joyas Sudamericanas', icon: 'gem' },
];

export const hotels = [
  {
    city: 'Río de Janeiro, Brasil',
    image: '/images/hotels/rio.jpg',
    price: 110.76,
    unit: 'Por noche',
    people: '2 adultos',
    href: '/alojamientos?destino=GIG',
  },
  {
    city: 'Cancún, México',
    image: '/images/offers/miami.jpg',
    price: 111.28,
    unit: 'Por noche',
    people: '2 adultos',
    href: '/alojamientos?destino=CUN',
  },
];

export const campaigns = [
  {
    kicker: '¿Viajás por negocios o de vacaciones? Elegí viajar premium.',
    title: 'Disfrutá la experiencia de las Cabinas Premium Economy o Premium Business.',
    cta: 'Comprá acá',
    image: '/images/campaigns/paquete.jpg',
    href: '/upgrade',
  },
  {
    kicker: '¡Canjeá tus Millas LATAM Pass y elegí tu próximo destino!',
    title: 'Completá con dinero y transformá tus millas en más viajes inolvidables.',
    cta: 'Canjeá ahora',
    image: '/images/campaigns/assist.jpg',
    href: '/canje-millas',
  },
  {
    kicker: 'Tu hotel ideal para las próximas vacaciones lo encontrás en LATAM.com.',
    title: 'Acumulá 3 Millas LATAM Pass y 6 Puntos Calificables por dólar gastado',
    cta: 'Reservá acá',
    image: '/images/campaigns/hotel.jpg',
    href: '/alojamientos',
  },
];

export const moreOptions = [
  {
    title: 'Encuentra tu descanso en cualquier lugar',
    badge: 'Acumula millas',
    cta: 'Reservar alojamiento',
    href: '/alojamientos',
    image: '/images/more/hotels.svg',
  },
  {
    title: 'Ten un auto esperando en tu próximo destino',
    badge: 'Acumula millas',
    cta: 'Arrendar un auto',
    href: '/autos',
    image: '/images/more/cars.svg',
  },
  {
    title: 'Viaja con tranquilidad y obtén cobertura donde estés + acumula 3 Millas LATAM Pass por dólar gastado',
    badge: 'Acumula millas',
    cta: 'Cotizar asistencia',
    href: '/asistencia',
    image: '/images/more/insurance.svg',
  },
];

export const popularDestinations = [
  { rank: 1, city: 'Río de Janeiro', image: '/images/hotels/rio.jpg', href: '/destinos/rio-de-janeiro' },
  { rank: 2, city: 'Santiago de Chile', image: '/images/landing/bogota.png', href: '/destinos/santiago' },
  { rank: 3, city: 'São Paulo', image: '/images/landing/guayaquil.png', href: '/destinos/sao-paulo' },
  { rank: 4, city: 'Buenos Aires', image: '/images/landing/buenos-aires.png', href: '/destinos/buenos-aires' },
];

export const passCta = {
  title: 'Crea tu cuenta y obtén beneficios LATAM Pass',
  items: [
    'Acumula Millas LATAM Pass en todas tus compras.',
    'Obtén beneficios exclusivos en equipaje, Upgrade de cabina y más.',
    'Canjea pasajes y productos con tus Millas LATAM Pass.',
  ],
  login: 'Iniciar sesión',
  signup: 'Crear cuenta',
};

export const experienceSlides = [
  {
    title: 'Prepara tu viaje',
    text: 'Conoce más sobre lo que necesitas saber con anticipación al preparar tu viaje.',
    image: '/images/experience/prepare.jpg',
    href: '/experiencia/prepara-tu-viaje',
  },
  {
    title: 'Embarque',
    text: 'Conoce más sobre el embarque, información relevante si tienes que hacer una conexión, y más.',
    image: '/images/experience/board.jpg',
    href: '/experiencia/embarque',
  },
  {
    title: 'A bordo',
    text: 'Conoce más sobre nuestros servicios a bordo durante el vuelo.',
    image: '/images/experience/inflight.jpg',
    href: '/experiencia/a-bordo',
  },
  {
    title: 'Experiencia LATAM',
    text: 'Conoce toda la experiencia LATAM',
    image: '/images/experience/prepare.jpg',
    href: '/experiencia',
  },
];

export const creditCard = {
  title: 'Pide tu Tarjeta LATAM Pass Banco de Crédito y obtén hasta 6.000 millas.',
  cta: 'Solicitar tarjeta',
  image: '/images/latam-pass-card.svg',
  href: '/tarjeta-latam-pass',
};

export const footerColumns = [
  {
    title: 'LATAM Airlines',
    links: [
      { label: 'Acerca de LATAM', href: '/acerca-de' },
      { label: 'Experiencia LATAM', href: '/experiencia' },
      { label: 'Prepara tu viaje', href: '/prepara-tu-viaje' },
      { label: 'Mis viajes', href: '/mis-viajes' },
      { label: 'Estado de vuelo', href: '/estado-de-vuelo' },
      { label: 'Check-in', href: '/check-in' },
      { label: 'Destinos', href: '/destinos' },
      { label: 'LATAM Wallet', href: '/wallet' },
      { label: 'Crea tu cuenta', href: '/login' },
      { label: 'Centro de ayuda', href: '/ayuda' },
      { label: 'Sala de prensa', href: '/prensa' },
      { label: 'Sostenibilidad', href: '/sostenibilidad' },
    ],
  },
  {
    title: 'Información legal',
    links: [
      { label: 'Condiciones de contrato de transporte', href: '/legal/contrato' },
      { label: 'Cargos por servicio', href: '/legal/cargos' },
      { label: 'Privacidad, seguridad y recomendaciones', href: '/legal/privacidad' },
      { label: 'Términos y condiciones generales', href: '/legal/terminos' },
      { label: 'Política sobre cookies', href: '/legal/cookies' },
      { label: 'Términos de uso', href: '/legal/uso' },
      { label: 'Intercambio de slots Sao Paulo (GRU)', href: '/legal/slots-gru' },
    ],
  },
  {
    title: 'Portales asociados',
    links: [
      { label: 'LATAM Pass', href: 'https://www.latamairlines.com/py/es/latam-pass', external: true },
      { label: 'LATAM Cargo', href: 'https://www.latamcargo.com', external: true },
      { label: 'Staff Travel', href: '/staff-travel' },
      { label: 'Relación con inversionistas', href: '/inversionistas' },
      { label: 'LATAM Trade (Portal Agencias de Viajes)', href: '/trade' },
    ],
  },
];

export const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/LATAMParaguay', color: '#3A5795' },
  { label: 'Twitter', href: 'https://twitter.com/LATAMAirlines', color: '#5EA9DD' },
  { label: 'Youtube', href: 'https://www.youtube.com/user/lanairlines', color: '#CC181E' },
  { label: 'Instagram', href: 'https://www.instagram.com/latamairlines/', color: '#DC3175' },
];

export const cookieBanner = {
  text: 'Usamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar contenido. Al continuar, aceptas nuestra política de cookies.',
  accept: 'Aceptar',
  more: 'Política sobre cookies',
};
