export interface Article {
  slug: string;
  title: string;
  description: string;
  type: 'guide' | 'faq' | 'intro' | 'tips' | 'troubleshooting';
}

export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  role: 'customer' | 'provider' | 'all';
  color: string;
  articles: Article[];
}

export const categories: Category[] = [
  {
    id: 'primeros-pasos',
    slug: 'primeros-pasos',
    title: 'Primeros pasos',
    description: 'Crea tu cuenta, verifica tu correo y configura tu perfil.',
    icon: '🚀',
    role: 'all',
    color: '#235F73',
    articles: [
      { slug: 'bienvenido-a-manito', title: 'Bienvenido a Manito', description: 'Qué es Manito y cómo conecta clientes con maestros.', type: 'intro' },
      { slug: 'como-crear-tu-cuenta', title: 'Cómo crear tu cuenta', description: 'Paso a paso para registrarte en Manito como cliente o maestro.', type: 'guide' },
      { slug: 'recuperar-acceso-a-tu-cuenta', title: 'Recuperar acceso a tu cuenta', description: 'Qué hacer si olvidaste tu contraseña o no puedes entrar.', type: 'guide' },
      { slug: 'preguntas-frecuentes-registro', title: 'Preguntas frecuentes sobre el registro', description: 'Respuestas a las dudas más comunes al crear una cuenta.', type: 'faq' },
    ],
  },
  {
    id: 'solicitar-servicio',
    slug: 'solicitar-servicio',
    title: 'Solicitar un servicio',
    description: 'Crea tu proyecto, recibe cotizaciones y agenda tu maestro.',
    icon: '🔍',
    role: 'customer',
    color: '#F29A72',
    articles: [
      { slug: 'como-crear-un-proyecto', title: 'Cómo crear y enviar un proyecto', description: 'Guía completa: elige el servicio, sube fotos y envía tu solicitud.', type: 'guide' },
      { slug: 'como-gestionar-tus-propiedades', title: 'Cómo agregar y editar tus propiedades', description: 'Registra las propiedades donde necesitas los servicios.', type: 'guide' },
      { slug: 'como-revisar-cotizacion-y-agendar', title: 'Cómo revisar una cotización y agendar tu maestro', description: 'Entiende la cotización, acepta y confirma la fecha del trabajo.', type: 'guide' },
      { slug: 'como-cancelar-un-proyecto', title: 'Cómo cancelar un proyecto', description: 'Cuándo y cómo cancelar, y qué pasa con el pago.', type: 'guide' },
      { slug: 'preguntas-frecuentes-solicitar-servicio', title: 'Preguntas frecuentes sobre solicitar un servicio', description: 'Respuestas a las dudas más comunes al crear una solicitud.', type: 'faq' },
    ],
  },
  {
    id: 'seguimiento-proyectos',
    slug: 'seguimiento-proyectos',
    title: 'Seguimiento de proyectos',
    description: 'Monitorea el estado de tus trabajos, chatea con tu maestro y aprueba el trabajo.',
    icon: '📋',
    role: 'customer',
    color: '#F29A72',
    articles: [
      { slug: 'introduccion-pantalla-trabajos', title: 'Introducción a la pantalla "Trabajos"', description: 'Cómo está organizada la vista de tus proyectos activos.', type: 'intro' },
      { slug: 'leer-estado-proyecto', title: 'Cómo leer el estado de tu proyecto', description: 'Qué significa cada estado: Enviado, Cotizado, En progreso, etc.', type: 'guide' },
      { slug: 'chatear-con-maestro', title: 'Cómo chatear con tu maestro', description: 'Comunícate directamente desde la app.', type: 'guide' },
      { slug: 'ver-informe-visita', title: 'Cómo ver el informe de visita de tu maestro', description: 'Revisa el reporte detallado del trabajo realizado.', type: 'guide' },
      { slug: 'revisar-ordenes-cambio', title: 'Cómo revisar y aprobar órdenes de cambio', description: 'Qué hacer cuando el maestro solicita un ajuste al trabajo.', type: 'guide' },
      { slug: 'confirmar-trabajo-completado', title: 'Cómo confirmar que el trabajo fue completado', description: 'El paso final para cerrar tu proyecto.', type: 'guide' },
      { slug: 'dejar-resena', title: 'Cómo dejar una reseña a tu maestro', description: 'Califica el trabajo y ayuda a otros clientes.', type: 'guide' },
      { slug: 'disputar-cargo', title: 'Cómo disputar un cargo', description: 'Qué hacer si hay un problema con el cobro o el trabajo.', type: 'guide' },
      { slug: 'seguimiento-faq', title: 'Estados del proyecto — Preguntas frecuentes', description: 'Las dudas más comunes sobre el seguimiento de proyectos.', type: 'faq' },
    ],
  },
  {
    id: 'maestros-empezar',
    slug: 'maestros-empezar',
    title: 'Maestros: empezar',
    description: 'Regístrate, verifica tu identidad y configura tu perfil profesional.',
    icon: '🔧',
    role: 'provider',
    color: '#235F73',
    articles: [
      { slug: 'bienvenido-maestros', title: 'Bienvenido a Manito (maestros)', description: 'Qué es Manito para maestros y cómo sacarle el máximo provecho.', type: 'intro' },
      { slug: 'como-configurar-tu-perfil', title: 'Cómo configurar tu perfil profesional', description: 'Setup completo: foto, bio, especialidades, zona y portafolio.', type: 'guide' },
      { slug: 'preguntas-frecuentes-maestros-nuevos', title: 'Preguntas frecuentes para maestros nuevos', description: 'Las dudas más comunes al empezar en Manito como maestro.', type: 'faq' },
    ],
  },
  {
    id: 'trabajos-disponibles',
    slug: 'trabajos-disponibles',
    title: 'Trabajos disponibles',
    description: 'Encuentra y acepta solicitudes de trabajo en tu área.',
    icon: '📥',
    role: 'provider',
    color: '#235F73',
    articles: [
      { slug: 'como-encontrar-y-aceptar-trabajos', title: 'Cómo encontrar y aceptar trabajos', description: 'El feed de solicitudes: cómo leerlo, cotizar y declinar trabajos.', type: 'guide' },
      { slug: 'consejos-para-conseguir-mas-trabajos', title: 'Consejos para conseguir más trabajos', description: 'Las acciones concretas que aumentan tus posibilidades en la plataforma.', type: 'tips' },
    ],
  },
  {
    id: 'cotizaciones',
    slug: 'cotizaciones',
    title: 'Cotizaciones',
    description: 'Crea, envía y gestiona tus cotizaciones.',
    icon: '💰',
    role: 'provider',
    color: '#235F73',
    articles: [
      { slug: 'como-crear-una-cotizacion', title: 'Cómo crear una cotización', description: 'Agrega mano de obra, materiales, tramos de pago y envía.', type: 'guide' },
      { slug: 'mis-tarifas-pricebook', title: 'Cómo usar Mis Tarifas', description: 'Guarda tus precios más usados para cotizar más rápido.', type: 'guide' },
      { slug: 'tramos-de-pago', title: 'Cómo agregar tramos de pago a una cotización', description: 'Divide el pago en etapas según el avance del trabajo.', type: 'guide' },
      { slug: 'guardar-borrador-cotizacion', title: 'Cómo guardar una cotización como borrador', description: 'Guarda y retoma tu cotización antes de enviarla.', type: 'guide' },
      { slug: 'como-usar-asistente-ia', title: 'Cómo usar el asistente de IA para cotizar', description: 'Deja que la IA te ayude a armar tu cotización.', type: 'guide' },
      { slug: 'cotizacion-post-visita', title: 'Cómo cotizar después de una visita de inspección', description: 'El flujo especial para proyectos que requieren inspección previa.', type: 'guide' },
      { slug: 'cotizaciones-faq', title: 'Preguntas frecuentes sobre cotizaciones', description: 'Las dudas más comunes al crear una cotización.', type: 'faq' },
      { slug: 'consejos-cotizaciones', title: 'Consejos para ganar más trabajos con tus cotizaciones', description: 'Cómo presentar una cotización que convenza al cliente.', type: 'tips' },
    ],
  },
  {
    id: 'pagos-seguridad',
    slug: 'pagos-seguridad',
    title: 'Pagos y seguridad',
    description: 'Entiende cómo funcionan los pagos protegidos y la política de cancelación.',
    icon: '🔒',
    role: 'customer',
    color: '#F29A72',
    articles: [
      { slug: 'como-funcionan-pagos', title: 'Cómo funciona el sistema de pagos en Manito', description: 'Pagos protegidos, cuándo se cobra y cómo se libera el dinero.', type: 'intro' },
      { slug: 'que-son-tramos-de-pago', title: '¿Qué son los tramos de pago?', description: 'Cómo se divide el pago en etapas según el avance del trabajo.', type: 'guide' },
      { slug: 'agregar-metodo-pago', title: 'Cómo agregar un método de pago', description: 'Registra tu tarjeta o cuenta bancaria.', type: 'guide' },
      { slug: 'politica-cancelacion', title: 'Política de cancelación y reembolsos', description: 'Cuándo aplica reembolso y qué períodos de gracia existen.', type: 'guide' },
      { slug: 'pagos-faq', title: 'Pagos — Preguntas frecuentes', description: 'Las dudas más comunes sobre cobros y reembolsos.', type: 'faq' },
    ],
  },
  {
    id: 'mi-negocio',
    slug: 'mi-negocio',
    title: 'Mi Negocio e ingresos',
    description: 'Revisa tus ganancias, analíticas y gestiona tu información fiscal.',
    icon: '📊',
    role: 'provider',
    color: '#235F73',
    articles: [
      { slug: 'introduccion-mi-negocio', title: 'Introducción a "Mi Negocio"', description: 'Qué puedes ver y hacer en tu dashboard de negocio.', type: 'intro' },
      { slug: 'dashboard-ingresos', title: 'Cómo leer tu dashboard de ingresos', description: 'Entiende el resumen mensual, el gráfico y los estados del dinero.', type: 'guide' },
      { slug: 'historial-pagos-boletas', title: 'Cómo ver el historial de pagos y boletas', description: 'Accede a tus transacciones y documentos tributarios.', type: 'guide' },
      { slug: 'analiticas-negocio', title: 'Cómo interpretar tus analíticas', description: 'Ingresos, alcance, clientes y cotizaciones en detalle.', type: 'guide' },
      { slug: 'registrar-empresa', title: 'Cómo registrar tu empresa o negocio', description: 'Configura tu información como empresa o persona natural.', type: 'guide' },
      { slug: 'informacion-impuestos', title: 'Información sobre impuestos en Manito', description: 'Retención, giro comercial y documentación requerida.', type: 'guide' },
      { slug: 'cuenta-bancaria', title: 'Cómo agregar tu cuenta bancaria', description: 'Configura tu cuenta para recibir pagos.', type: 'guide' },
      { slug: 'ingresos-faq', title: 'Ingresos y pagos — Preguntas frecuentes', description: 'Las dudas más comunes sobre ganancias y transferencias.', type: 'faq' },
    ],
  },
  {
    id: 'cuenta-configuracion',
    slug: 'cuenta-configuracion',
    title: 'Cuenta y configuración',
    description: 'Edita tu perfil, cambia tu contraseña y gestiona notificaciones.',
    icon: '⚙️',
    role: 'all',
    color: '#3D4746',
    articles: [
      { slug: 'editar-informacion-personal', title: 'Cómo editar tu información personal', description: 'Actualiza tu nombre, teléfono, email y RUT.', type: 'guide' },
      { slug: 'cambiar-contrasena', title: 'Cómo cambiar tu contraseña', description: 'Actualiza tu contraseña desde la configuración de seguridad.', type: 'guide' },
      { slug: 'configurar-2fa', title: 'Cómo configurar la verificación en dos pasos', description: 'Agrega una capa extra de seguridad a tu cuenta.', type: 'guide' },
      { slug: 'gestionar-notificaciones', title: 'Cómo gestionar las notificaciones', description: 'Configura qué alertas quieres recibir y cuándo.', type: 'guide' },
      { slug: 'eliminar-cuenta', title: 'Cómo eliminar tu cuenta', description: 'Qué implica eliminar tu cuenta y cómo hacerlo.', type: 'guide' },
      { slug: 'seguridad-faq', title: 'Seguridad y privacidad — Preguntas frecuentes', description: 'Las dudas más comunes sobre tu cuenta y datos.', type: 'faq' },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getArticleBySlug(categorySlug: string, articleSlug: string) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const article = category.articles.find((a) => a.slug === articleSlug);
  return article ? { article, category } : undefined;
}
