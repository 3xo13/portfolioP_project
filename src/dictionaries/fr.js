const dictionary = {
  metadata: {
    title: 'Portfolio de Kerim',
    description: 'Portfolio 3D construit avec Next.js et React Three Fiber',
  },
  navbar: {
    role: 'Développeur Front-End',
    languageLabel: 'Langue',
    localeNames: {
      en: 'Anglais',
      ar: 'Arabe',
      tr: 'Turc',
      fr: 'Français',
      ru: 'Russe',
      es: 'Espagnol',
    },
    links: [
      { id: 'about', title: 'À propos' },
      { id: 'work', title: 'Expérience' },
      { id: 'contact', title: 'Contact' },
    ],
  },
  hero: {
    greeting: 'Salut, je suis',
    name: 'Kerim',
    subtitleLine1: 'Je développe des sites web, des interfaces utilisateur',
    subtitleLine2: 'et des applications web',
  },
  about: {
    intro: 'Introduction',
    title: 'Vue d’ensemble',
    description: 'Je suis un développeur logiciel expérimenté en HTML, CSS et JavaScript, avec une solide maîtrise de React, Node.js et Three.js. Je crée des expériences numériques efficaces, évolutives et agréables à utiliser.',
    services: ['Développeur Web', 'Développeur React Native', 'Développeur Backend', 'Créateur de contenu'],
  },
  experience: {
    intro: 'Le parcours que je construis',
    title: 'Expérience professionnelle',
    items: [
      {
        title: 'Développeur Web Freelance',
        company_name: 'Clients indépendants',
        date: '2003 - Aujourd’hui',
        iconKey: 'freelance',
        summary: 'Un parcours freelance de longue durée centré sur les sites web, les interfaces produit et des solutions sur mesure pour des clients de secteurs variés.',
        points: [
          'Je prends en charge les projets de bout en bout, de la phase de cadrage à la mise en ligne puis aux itérations.',
          'J’adapte la livraison aux objectifs, au budget et aux contraintes techniques de chaque client.',
          'Je continue à accompagner des clients sélectionnés en parallèle de mes engagements à long terme.',
        ],
      },
      {
        title: 'Développeur Full Stack',
        company_name: 'Logica Studious LLC',
        date: '2024 - Aujourd’hui',
        iconKey: 'logica',
        summary: 'J’interviens comme développeur full stack sur des solutions web prêtes pour la production, en équilibrant expérience frontend et implémentation backend pragmatique.',
        points: [
          'Je développe et maintiens des fonctionnalités full stack avec un fort souci de fiabilité et d’ergonomie.',
          'Je contribue à des produits client et à des améliorations internes au sein d’une équipe de delivery active.',
          'Je transforme les besoins métier en interfaces claires et en logique applicative solide.',
        ],
      },
      {
        title: 'Développeur Freelance',
        company_name: 'Mostaql et clients directs',
        date: 'En cours',
        iconKey: 'mostaql',
        summary: 'Je reste actif sur Mostaql et avec des clients directs, en réalisant des projets web ciblés qui demandent une communication claire et une exécution fiable.',
        points: [
          'Je livre des sites, des refontes et des évolutions fonctionnelles pour des clients indépendants.',
          'Je garde une communication directe et pragmatique du premier brief jusqu’à la livraison finale.',
          'Le travail en plateforme et en freelance me maintient au plus près des besoins réels et des retours rapides des clients.',
        ],
      },
    ],
  },
  works: {
    intro: 'Mes projets',
    title: 'Projets',
    description: 'Ces projets reflètent ma capacité à concevoir, développer et livrer des produits utiles avec des technologies frontend et full-stack modernes.',
    items: [
      { name: 'Car Rent', description: 'Une plateforme web pour rechercher, réserver et gérer des locations de voitures auprès de différents fournisseurs.' },
      { name: 'Job IT', description: 'Une plateforme d’emploi pour explorer les offres, les salaires estimés et les opportunités selon la localisation.' },
      { name: 'Trip Guide', description: 'Une plateforme de voyage pour planifier des séjours avec réservations, recommandations et contenus de destinations.' },
    ],
  },
  testimonials: {
    intro: 'Ce que disent les autres',
    title: 'Témoignages',
    items: [
      {
        name: 'Abdarhman A.',
        quote: 'Très compréhensif, remarquable, et il travaille jusqu’à ce que le résultat vous convienne parfaitement. Je lui en suis reconnaissant, et notre collaboration continue; ce ne sera certainement pas notre dernier projet.',
      },
      {
        name: 'Oussama K.',
        quote: 'Très bonne communication, et vraiment excellent dans la résolution de problèmes.',
      },
      {
        name: 'Ahmad A.',
        quote: 'Le projet a été réalisé entièrement avec sérieux et honnêteté. Il résout tous les problèmes et toutes les demandes, accomplit son travail avec excellence et garde une communication très professionnelle. Je recommande vivement de travailler avec ce développeur et j’espère collaborer avec lui sur tous mes futurs projets.',
      },
    ],
  },
  contact: {
    intro: 'Entrer en contact',
    title: 'Contact.',
    fields: {
      name: 'Votre nom',
      email: 'Votre e-mail',
      phone: 'Numéro WhatsApp',
      message: 'Votre message',
      optional: 'optionnel',
    },
    placeholders: {
      name: 'Quel est votre nom ?',
      email: 'Quelle est votre adresse e-mail ?',
      phone: 'Ajoutez votre numéro WhatsApp si vous voulez une réponse plus rapide',
      message: 'Que souhaitez-vous dire ?',
    },
    actions: {
      send: 'Envoyer',
      sending: 'Envoi...',
    },
    quickContact: {
      label: 'Contact direct',
      description: 'Si vous voulez me joindre le plus rapidement possible, utilisez l’e-mail pour les détails du projet ou ouvrez WhatsApp pour un échange rapide.',
      emailLabel: 'E-mail',
      emailHint: 'Pour les demandes de projet directes et un contact écrit plus rapide.',
      whatsappLabel: 'WhatsApp',
      whatsappHint: 'Ouvrez une conversation avec un message prérempli dans votre langue.',
      whatsappMessage: 'Bonjour Kerim, j’ai découvert votre portfolio et je voudrais discuter d’un projet avec vous.',
    },
    feedback: {
      success: 'Merci. Votre message a bien été envoyé.',
      genericError: 'Une erreur est survenue. Veuillez réessayer.',
      rateLimited: 'Vous avez déjà envoyé 3 messages aujourd’hui. Nous vous contacterons bientôt.',
      validation: {
        name_required: 'Veuillez saisir votre nom.',
        email_invalid: 'Veuillez saisir une adresse e-mail valide.',
        phone_invalid: 'Veuillez saisir un numéro WhatsApp valide ou laisser ce champ vide.',
        message_short: 'Veuillez saisir un message d’au moins 10 caractères.',
      },
    },
  },
};

export default dictionary;