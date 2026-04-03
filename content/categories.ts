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
      { slug: 'bienvenido-a-manito', title: 'Bienvenido a Manito — ¿Qué es y cómo funciona?', description: 'Una introducción a Manito y cómo conecta clientes con maestros.', type: 'intro' },
      { slug: 'como-crear-tu-cuenta', title: 'Cómo crear tu cuenta', description: 'Paso a paso para registrarte en Manito como cliente o maestro.', type: 'guide' },
      { slug: 'verificacion-correo', title: 'Verificación de correo electrónico', description: 'Cómo confirmar tu email para activar tu cuenta.', type: 'guide' },
      { slug: 'como-elegir-tu-rol', title: 'Cómo elegir tu rol: Cliente o Maestro', description: 'Diferencias entre ser cliente o maestro en Manito.', type: 'guide' },
      { slug: 'recuperar-contrasena', title: 'Cómo recuperar tu contraseña', description: 'Restablece tu contraseña si la olvidaste.', type: 'guide' },
      { slug: 'activar-2fa', title: 'Cómo activar la verificación en dos pasos', description: 'Protege tu cuenta con autenticación de dos factores.', type: 'guide' },
    ],
  },
  {
    id: 'solicitar-servicio',
    slug: 'solicitar-servicio',
    title: 'Solicitar un servicio',
    description: 'Busca el servicio que necesitas y crea tu primera solicitud.',
    icon: '🔍',
    role: 'customer',
    color: '#F29A72',
    articles: [
      { slug: 'introduccion-proyectos', title: 'Introducción a los proyectos en Manito', description: 'Qué es un proyecto y cómo funciona el proceso de solicitud.', type: 'intro' },
      { slug: 'como-buscar-un-servicio', title: 'Cómo buscar un servicio', description: 'Encuentra el servicio que necesitas desde la pantalla de inicio.', type: 'guide' },
      { slug: 'como-crear-un-proyecto', title: 'Cómo crear un proyecto paso a paso', description: 'Guía completa del wizard: dirección, preguntas, fotos y envío.', type: 'guide' },
      { slug: 'agregar-editar-propiedad', title: 'Cómo agregar o editar una propiedad', description: 'Registra las propiedades donde necesitas los servicios.', type: 'guide' },
      { slug: 'subir-fotos-solicitud', title: 'Cómo subir fotos a tu solicitud', description: 'Agrega imágenes para que el maestro entienda mejor el trabajo.', type: 'guide' },
      { slug: 'que-pasa-despues-de-enviar', title: '¿Qué pasa después de enviar tu solicitud?', description: 'El proceso desde que envías hasta que recibes cotizaciones.', type: 'intro' },
      { slug: 'revisar-responder-cotizacion', title: 'Cómo revisar y responder una cotización', description: 'Entiende los detalles de una cotización y cómo aprobarla.', type: 'guide' },
      { slug: 'agendar-visita', title: 'Cómo agendar la visita de tu maestro', description: 'Confirma la fecha y hora del trabajo.', type: 'guide' },
      { slug: 'cancelar-proyecto', title: 'Cómo cancelar un proyecto', description: 'Cuándo y cómo cancelar, y qué implica.', type: 'guide' },
      { slug: 'solicitar-servicio-faq', title: 'Solicitar un servicio — Preguntas frecuentes', description: 'Respuestas a las dudas más comunes al crear una solicitud.', type: 'faq' },
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
    id: 'trabajos-disponibles',
    slug: 'trabajos-disponibles',
    title: 'Trabajos disponibles',
    description: 'Encuentra y acepta solicitudes de trabajo en tu área.',
    icon: '📥',
    role: 'provider',
    color: '#235F73',
    articles: [
      { slug: 'introduccion-feed-trabajos', title: 'Introducción al feed de trabajos disponibles', description: 'Cómo funciona el flujo de solicitudes en Manito.', type: 'intro' },
      { slug: 'leer-solicitud-trabajo', title: 'Cómo leer una solicitud de trabajo', description: 'Entiende toda la información antes de cotizar.', type: 'guide' },
      { slug: 'aceptar-declinar-trabajo', title: 'Cómo aceptar o declinar un trabajo', description: 'Gestiona las solicitudes que recibes.', type: 'guide' },
      { slug: 'badge-sin-competencia', title: 'Qué significa el badge "Sin competencia"', description: 'Cuándo eres el único maestro disponible para un trabajo.', type: 'guide' },
      { slug: 'filtrar-trabajos', title: 'Cómo filtrar los trabajos disponibles', description: 'Filtra por urgencia, distancia y más.', type: 'guide' },
      { slug: 'trabajos-disponibles-faq', title: 'Trabajos disponibles — Preguntas frecuentes', description: 'Respuestas a las dudas más comunes del feed.', type: 'faq' },
      { slug: 'consejos-conseguir-trabajos', title: 'Consejos para conseguir más trabajos', description: 'Mejores prácticas para aumentar tu tasa de aceptación.', type: 'tips' },
    ],
  },
  {
    id: 'cotizaciones',
    slug: 'cotizaciones',
    title: 'Cotizaciones',
    description: 'Crea, envía y gestiona tus cotizaciones con maestría.',
    icon: '💰',
    role: 'provider',
    color: '#235F73',
    articles: [
      { slug: 'introduccion-cotizaciones', title: 'Introducción al sistema de cotizaciones', description: 'Cómo funciona el proceso de cotización en Manito.', type: 'intro' },
      { slug: 'como-crear-cotizacion', title: 'Cómo crear una cotización', description: 'Agrega mano de obra, materiales, tramos de pago y envía.', type: 'guide' },
      { slug: 'mis-tarifas-pricebook', title: 'Cómo usar "Mis Tarifas" (pricebook)', description: 'Guarda tus precios más usados para cotizar más rápido.', type: 'guide' },
      { slug: 'tramos-de-pago', title: 'Cómo agregar tramos de pago a una cotización', description: 'Divide el pago en etapas según el avance del trabajo.', type: 'guide' },
      { slug: 'guardar-borrador-cotizacion', title: 'Cómo guardar una cotización como borrador', description: 'Guarda y retoma tu cotización antes de enviarla.', type: 'guide' },
      { slug: 'asistente-ia-cotizar', title: 'Cómo usar el asistente de IA para cotizar', description: 'Deja que la IA te ayude a armar tu cotización.', type: 'guide' },
      { slug: 'cotizacion-post-visita', title: 'Cómo cotizar después de una visita de inspección', description: 'El flujo especial para proyectos que requieren inspección previa.', type: 'guide' },
      { slug: 'cotizaciones-faq', title: 'Cotizaciones — Preguntas frecuentes', description: 'Las dudas más comunes al crear una cotización.', type: 'faq' },
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
