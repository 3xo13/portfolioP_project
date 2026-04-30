const dictionary = {
  metadata: {
    title: 'Kerim Portfolio',
    description: '3D portfolio built with Next.js and React Three Fiber',
  },
  navbar: {
    role: 'Front-End Web Developer',
    languageLabel: 'Language',
    localeNames: {
      en: 'English',
      ar: 'Arabic',
      tr: 'Turkish',
      fr: 'French',
      ru: 'Russian',
      es: 'Spanish',
    },
    links: [
      { id: 'about', title: 'About' },
      { id: 'work', title: 'Work' },
      { id: 'contact', title: 'Contact' },
    ],
  },
  hero: {
    greeting: "Hi I'm",
    name: 'Kerim',
    subtitleLine1: 'I develop websites, user interfaces',
    subtitleLine2: 'and web applications',
  },
  about: {
    intro: 'Introduction',
    title: 'Overview',
    description: "I'm a skilled software developer with experience in HTML, CSS, JavaScript, React, Node.js, and Three.js. I build efficient, scalable, and user-friendly digital experiences that solve real business problems.",
    services: ['Web Developer', 'React Native Developer', 'Backend Developer', 'Content Creator'],
  },
  experience: {
    intro: 'The path I have been building',
    title: 'Work Experience',
    items: [
      {
        title: 'Freelance Web Developer',
        company_name: 'Independent Clients',
        date: '2003 - Present',
        iconKey: 'freelance',
        summary: 'A long-running freelance track focused on websites, product interfaces, and tailored web solutions for clients across different industries.',
        points: [
          'Handle projects end-to-end, from early planning and UX thinking to launch and iteration.',
          'Adapt delivery to different client goals, budgets, and technical constraints.',
          'Continue to work with selected clients alongside long-term product and company work.',
        ],
      },
      {
        title: 'Full Stack Developer',
        company_name: 'Logica Studious LLC',
        date: '2024 - Present',
        iconKey: 'logica',
        summary: 'Contributing as a full stack developer on production-ready web solutions, balancing frontend experience work with practical backend implementation.',
        points: [
          'Build and maintain full-stack features with an emphasis on reliability and usability.',
          'Support client-facing products and internal improvements as part of an active delivery team.',
          'Translate business needs into clean interfaces and dependable application logic.',
        ],
      },
      {
        title: 'Freelance Developer',
        company_name: 'Mostaql & Direct Clients',
        date: 'Ongoing',
        iconKey: 'mostaql',
        summary: 'Still active on Mostaql and with direct clients, taking on focused web projects that need clear communication and dependable execution.',
        points: [
          'Deliver scoped websites, redesigns, and feature work for independent clients.',
          'Keep communication direct and practical from the first brief to final handoff.',
          'Use platform and freelance work to stay close to real client needs and fast feedback loops.',
        ],
      },
    ],
  },
  works: {
    intro: 'My Projects',
    title: 'Projects',
    description: 'These projects reflect my ability to design, build, and ship useful products with modern frontend and full-stack technologies.',
    items: [
      { name: 'Car Rent', description: 'A web platform for searching, booking, and managing car rentals from different providers.' },
      { name: 'Job IT', description: 'A job platform for exploring openings, salary ranges, and location-based opportunities.' },
      { name: 'Trip Guide', description: 'A travel platform for planning trips with bookings, recommendations, and curated destination content.' },
    ],
  },
  testimonials: {
    intro: 'What Others Say',
    title: 'Testimonials',
    items: [
      {
        name: 'Abdarhman A.',
        quote: 'Understanding, distinguished, and committed to making adjustments until the work suits you perfectly. I appreciate him, and our work together is still ongoing and certainly will not be the last project.',
      },
      {
        name: 'Oussama K.',
        quote: 'Really good communication, and super well in problem solving.',
      },
      {
        name: 'Ahmad A.',
        quote: 'The full project was completed successfully with seriousness and honesty. He solves every issue and request, delivers his work in the best possible way, and handles communication professionally. I strongly recommend working with this developer, and I hope to work with him on all my future projects.',
      },
    ],
  },
  contact: {
    intro: 'Get in touch',
    title: 'Contact.',
    fields: {
      name: 'Your Name',
      email: 'Your Email',
      phone: 'WhatsApp number',
      message: 'Your Message',
      optional: 'optional',
    },
    placeholders: {
      name: "What's your good name?",
      email: "What's your email address?",
      phone: 'Add your WhatsApp number if you want a faster reply',
      message: 'What would you like to say?',
    },
    actions: {
      send: 'Send',
      sending: 'Sending...',
    },
    quickContact: {
      label: 'Direct contact',
      description: 'If you want the fastest way to reach me, use email for project details or open WhatsApp for a quick conversation.',
      emailLabel: 'Email',
      emailHint: 'For direct project inquiries and faster written communication.',
      whatsappLabel: 'WhatsApp',
      whatsappHint: 'Open a chat with a prefilled message in your language.',
      whatsappMessage: 'Hello Kerim, I found your portfolio and would like to discuss a project with you.',
    },
    feedback: {
      success: 'Thank you. Your message has been sent successfully.',
      genericError: 'Something went wrong. Please try again.',
      rateLimited: 'You have already sent 3 messages today. We will contact you soon.',
      validation: {
        name_required: 'Please enter your name.',
        email_invalid: 'Please enter a valid email address.',
        phone_invalid: 'Please enter a valid WhatsApp number or leave it empty.',
        message_short: 'Please enter a message with at least 10 characters.',
      },
    },
  },
};

export default dictionary;