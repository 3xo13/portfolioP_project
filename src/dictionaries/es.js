const dictionary = {
  metadata: {
    title: 'Portafolio de Kerim',
    description: 'Portafolio 3D creado con Next.js y React Three Fiber',
  },
  navbar: {
    role: 'Desarrollador Front-End',
    languageLabel: 'Idioma',
    localeNames: {
      en: 'Inglés',
      ar: 'Árabe',
      tr: 'Turco',
      fr: 'Francés',
      ru: 'Ruso',
      es: 'Español',
    },
    links: [
      { id: 'about', title: 'Sobre mí' },
      { id: 'work', title: 'Experiencia' },
      { id: 'contact', title: 'Contacto' },
    ],
  },
  hero: {
    greeting: 'Hola, soy',
    name: 'Kerim',
    subtitleLine1: 'Desarrollo sitios web, interfaces de usuario',
    subtitleLine2: 'y aplicaciones web',
  },
  about: {
    intro: 'Introducción',
    title: 'Resumen',
    description: 'Soy un desarrollador de software con experiencia en HTML, CSS y JavaScript, además de React, Node.js y Three.js. Construyo experiencias digitales eficientes, escalables y fáciles de usar.',
    services: ['Desarrollador Web', 'Desarrollador React Native', 'Desarrollador Backend', 'Creador de contenido'],
  },
  experience: {
    intro: 'El camino que he construido',
    title: 'Experiencia laboral',
    items: [
      {
        title: 'Desarrollador Web Freelance',
        company_name: 'Clientes independientes',
        date: '2003 - Presente',
        iconKey: 'freelance',
        summary: 'Una trayectoria freelance de largo plazo centrada en sitios web, interfaces de producto y soluciones web a medida para clientes de distintos sectores.',
        points: [
          'Llevo los proyectos de principio a fin, desde la planificación inicial y el enfoque UX hasta el lanzamiento y la mejora continua.',
          'Adapto la ejecución a los objetivos del cliente, el presupuesto y las limitaciones técnicas.',
          'Sigo trabajando con clientes seleccionados junto con mis compromisos de largo plazo.',
        ],
      },
      {
        title: 'Desarrollador Full Stack',
        company_name: 'Logica Studious LLC',
        date: '2024 - Presente',
        iconKey: 'logica',
        summary: 'Trabajo como desarrollador full stack en soluciones web listas para producción, equilibrando la experiencia frontend con una implementación backend práctica.',
        points: [
          'Desarrollo y mantengo funcionalidades full stack con énfasis en fiabilidad y usabilidad.',
          'Apoyo productos orientados al cliente y mejoras internas dentro de un equipo de entrega activo.',
          'Convierto necesidades de negocio en interfaces limpias y lógica de aplicación confiable.',
        ],
      },
      {
        title: 'Desarrollador Freelance',
        company_name: 'Mostaql y clientes directos',
        date: 'En curso',
        iconKey: 'mostaql',
        summary: 'Sigo activo en Mostaql y con clientes directos, desarrollando proyectos web concretos que requieren comunicación clara y ejecución confiable.',
        points: [
          'Entrego sitios web, rediseños y desarrollo de funcionalidades para clientes independientes.',
          'Mantengo una comunicación directa y práctica desde el primer briefing hasta la entrega final.',
          'El trabajo en plataforma y freelance me mantiene cerca de las necesidades reales del cliente y de ciclos de feedback rápidos.',
        ],
      },
    ],
  },
  works: {
    intro: 'Mis proyectos',
    title: 'Proyectos',
    description: 'Estos proyectos reflejan mi capacidad para diseñar, desarrollar y lanzar productos útiles con tecnologías modernas de frontend y full-stack.',
    items: [
      { name: 'Car Rent', description: 'Una plataforma web para buscar, reservar y gestionar alquileres de coches de distintos proveedores.' },
      { name: 'Job IT', description: 'Una plataforma de empleo para explorar vacantes, rangos salariales y oportunidades según la ubicación.' },
      { name: 'Trip Guide', description: 'Una plataforma de viajes para planificar experiencias con reservas, recomendaciones y contenido curado de destinos.' },
    ],
  },
  testimonials: {
    intro: 'Lo que dicen otros',
    title: 'Testimonios',
    items: [
      {
        name: 'Abdarhman A.',
        quote: 'Es comprensivo, destacado y trabaja en los ajustes hasta que el resultado se adapte perfectamente a ti. Le estoy agradecido y el trabajo sigue en curso; sin duda no será nuestro último proyecto.',
      },
      {
        name: 'Oussama K.',
        quote: 'Muy buena comunicación y un nivel excelente para resolver problemas.',
      },
      {
        name: 'Ahmad A.',
        quote: 'El proyecto completo se realizó con seriedad y honestidad. Resuelve todos los problemas y solicitudes, hace su trabajo de la mejor manera posible y mantiene un trato muy profesional. Recomiendo encarecidamente trabajar con este desarrollador y espero colaborar con él en todos mis proyectos futuros.',
      },
    ],
  },
  contact: {
    intro: 'Ponte en contacto',
    title: 'Contacto.',
    fields: {
      name: 'Tu nombre',
      email: 'Tu correo electrónico',
      phone: 'Número de WhatsApp',
      message: 'Tu mensaje',
      optional: 'opcional',
    },
    placeholders: {
      name: '¿Cuál es tu nombre?',
      email: '¿Cuál es tu correo electrónico?',
      phone: 'Agrega tu número de WhatsApp si quieres una respuesta más rápida',
      message: '¿Qué te gustaría decir?',
    },
    actions: {
      send: 'Enviar',
      sending: 'Enviando...',
    },
    quickContact: {
      label: 'Contacto directo',
      description: 'Si quieres la forma más rápida de contactarme, usa el correo para los detalles del proyecto o abre WhatsApp para una conversación rápida.',
      emailLabel: 'Correo',
      emailHint: 'Para consultas directas sobre proyectos y una comunicación escrita más rápida.',
      whatsappLabel: 'WhatsApp',
      whatsappHint: 'Abre un chat con un mensaje listo en tu idioma.',
      whatsappMessage: 'Hola Kerim, encontré tu portafolio y me gustaría hablar contigo sobre un proyecto.',
    },
    feedback: {
      success: 'Gracias. Tu mensaje se ha enviado correctamente.',
      genericError: 'Algo salió mal. Inténtalo de nuevo.',
      rateLimited: 'Ya has enviado 3 mensajes hoy. Nos pondremos en contacto contigo pronto.',
      validation: {
        name_required: 'Por favor, introduce tu nombre.',
        email_invalid: 'Por favor, introduce un correo electrónico válido.',
        phone_invalid: 'Por favor, introduce un número de WhatsApp válido o deja el campo vacío.',
        message_short: 'Por favor, introduce un mensaje de al menos 10 caracteres.',
      },
    },
  },
};

export default dictionary;