const dictionary = {
  metadata: {
    title: 'Kerim Portfolyo',
    description: 'Next.js ve React Three Fiber ile oluşturulmuş 3D portfolyo',
  },
  navbar: {
    role: 'Frontend Geliştirici',
    languageLabel: 'Dil',
    localeNames: {
      en: 'İngilizce',
      ar: 'Arapça',
      tr: 'Türkçe',
      fr: 'Fransızca',
      ru: 'Rusça',
      es: 'İspanyolca',
    },
    links: [
      { id: 'about', title: 'Hakkımda' },
      { id: 'work', title: 'Deneyim' },
      { id: 'contact', title: 'İletişim' },
    ],
  },
  hero: {
    greeting: 'Merhaba, ben',
    name: 'Kerim',
    subtitleLine1: 'Web siteleri, kullanıcı arayüzleri',
    subtitleLine2: 've web uygulamaları geliştiriyorum',
  },
  about: {
    intro: 'Giriş',
    title: 'Genel Bakış',
    description: 'HTML, CSS ve JavaScript ile birlikte React, Node.js ve Three.js alanlarında deneyimli bir yazılım geliştiricisiyim. Verimli, ölçeklenebilir ve kullanıcı dostu dijital deneyimler geliştiriyorum.',
    services: ['Web Geliştirici', 'React Native Geliştirici', 'Backend Geliştirici', 'İçerik Üreticisi'],
  },
  experience: {
    intro: 'Bugüne kadar inşa ettiğim yol',
    title: 'İş Deneyimi',
    items: [
      {
        title: 'Freelance Web Geliştirici',
        company_name: 'Bağımsız Müşteriler',
        date: '2003 - Günümüz',
        iconKey: 'freelance',
        summary: 'Farklı sektörlerdeki müşteriler için web siteleri, ürün arayüzleri ve özel web çözümlerine odaklanan uzun soluklu bir freelance kariyer.',
        points: [
          'Projeleri ilk planlama ve UX düşüncesinden yayına alma ve iyileştirmeye kadar uçtan uca yönetirim.',
          'Teslim sürecini farklı müşteri hedeflerine, bütçelere ve teknik kısıtlara göre uyarlarım.',
          'Uzun vadeli rollerimin yanında seçili müşterilerle freelance çalışmayı sürdürürüm.',
        ],
      },
      {
        title: 'Full Stack Geliştirici',
        company_name: 'Logica Studious LLC',
        date: '2024 - Günümüz',
        iconKey: 'logica',
        summary: 'Üretime hazır web çözümlerinde frontend deneyimi ile pratik backend uygulamalarını dengeleyerek full stack geliştirici olarak çalışıyorum.',
        points: [
          'Güvenilirlik ve kullanılabilirliğe odaklanarak full-stack özellikler geliştirir ve bakımını yaparım.',
          'Aktif bir teslim ekibinin parçası olarak müşteri ürünleri ve iç iyileştirmeleri desteklerim.',
          'İş ihtiyaçlarını temiz arayüzlere ve sağlam uygulama mantığına dönüştürürüm.',
        ],
      },
      {
        title: 'Freelance Geliştirici',
        company_name: 'Mostaql ve Doğrudan Müşteriler',
        date: 'Devam ediyor',
        iconKey: 'mostaql',
        summary: 'Mostaql üzerinde ve doğrudan müşterilerle hâlâ aktif olarak, net iletişim ve güvenilir teslimat gerektiren odaklı web projeleri üstleniyorum.',
        points: [
          'Bağımsız müşteriler için kapsamı net web siteleri, yeniden tasarımlar ve özellik geliştirmeleri teslim ederim.',
          'İlk brief aşamasından son teslimata kadar iletişimi doğrudan ve pratik tutarım.',
          'Platform ve serbest çalışmalar, gerçek müşteri ihtiyaçlarına ve hızlı geri bildirim döngülerine yakın kalmamı sağlar.',
        ],
      },
    ],
  },
  works: {
    intro: 'Projelerim',
    title: 'Projeler',
    description: 'Bu projeler modern frontend ve full-stack teknolojileriyle faydalı ürünler tasarlama, geliştirme ve yayına alma becerimi yansıtıyor.',
    items: [
      { name: 'Car Rent', description: 'Farklı sağlayıcılardan araç kiralama arama, rezervasyon ve yönetim işlemleri için web platformu.' },
      { name: 'Job IT', description: 'İş ilanlarını, maaş aralıklarını ve konuma göre fırsatları incelemek için iş platformu.' },
      { name: 'Trip Guide', description: 'Rezervasyonlar, öneriler ve destinasyon içerikleriyle gezi planlamaya yönelik seyahat platformu.' },
    ],
  },
  testimonials: {
    intro: 'Başkaları Ne Diyor',
    title: 'Yorumlar',
    items: [
      {
        name: 'Abdarhman A.',
        quote: 'Anlayışlı, seçkin ve işi size tam uyacak hale gelene kadar düzenlemeler yapıyor. Kendisine teşekkür ederim; birlikte çalışmamız sürüyor ve bu kesinlikle son projemiz olmayacak.',
      },
      {
        name: 'Oussama K.',
        quote: 'İletişimi gerçekten çok iyi ve problem çözme konusunda son derece başarılı.',
      },
      {
        name: 'Ahmad A.',
        quote: 'Projenin tamamı başarıyla teslim edildi. Ciddi ve dürüst çalışıyor, tüm sorunları ve talepleri çözüyor, işini en iyi şekilde yapıyor ve iletişimi çok profesyonel. Bu geliştiriciyle çalışmayı güçlü şekilde tavsiye ederim ve tüm projelerimde onunla çalışmayı umuyorum.',
      },
    ],
  },
  contact: {
    intro: 'İletişime Geçin',
    title: 'İletişim.',
    fields: {
      name: 'Adınız',
      email: 'E-posta adresiniz',
      phone: 'WhatsApp numarası',
      message: 'Mesajınız',
      optional: 'isteğe bağlı',
    },
    placeholders: {
      name: 'Adınız nedir?',
      email: 'E-posta adresiniz nedir?',
      phone: 'Daha hızlı dönüş için WhatsApp numaranızı ekleyin',
      message: 'Ne söylemek istersiniz?',
    },
    actions: {
      send: 'Gönder',
      sending: 'Gönderiliyor...',
    },
    quickContact: {
      label: 'Doğrudan iletişim',
      description: 'Bana en hızlı şekilde ulaşmak istersen proje detayları için e-postayı kullanabilir ya da hızlı bir görüşme için WhatsApp açabilirsin.',
      emailLabel: 'E-posta',
      emailHint: 'Doğrudan proje talepleri ve daha hızlı yazılı iletişim için.',
      whatsappLabel: 'WhatsApp',
      whatsappHint: 'Dilinizde hazır bir mesajla sohbet başlatın.',
      whatsappMessage: 'Merhaba Kerim, portföyünü gördüm ve seninle bir proje görüşmek istiyorum.',
    },
    feedback: {
      success: 'Teşekkürler. Mesajınız başarıyla gönderildi.',
      genericError: 'Bir şeyler ters gitti. Lütfen tekrar deneyin.',
      rateLimited: 'Bugün zaten 3 mesaj gönderdiniz. En kısa sürede sizinle iletişime geçeceğiz.',
      validation: {
        name_required: 'Lütfen adınızı girin.',
        email_invalid: 'Lütfen geçerli bir e-posta adresi girin.',
        phone_invalid: 'Lütfen geçerli bir WhatsApp numarası girin ya da boş bırakın.',
        message_short: 'Lütfen en az 10 karakter içeren bir mesaj girin.',
      },
    },
  },
};

export default dictionary;