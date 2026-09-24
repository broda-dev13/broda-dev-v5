// Copy shared by the three direction prototypes (hero + one service section).
// Same words in every direction, so the owner compares design, not wording.

const fr = {
  nav: {
    services: "Services",
    software: "Logiciels",
    work: "Réalisations",
    contact: "Contact",
    quote: "Demander un devis",
    quoteShort: "Devis gratuit",
    switchLang: "العربية",
    switchShort: "ع",
    menu: "Menu",
    home: "Broda Dev, accueil",
  },
  hero: {
    kicker: "Logiciels, sites et pub · Tlemcen, Algérie",
    titleA: "De la caisse",
    titleB: "à la pub TikTok.",
    // Poster direction: the same sentence cut into four shorter lines.
    poster: ["De la", "caisse", "à la pub", "TikTok."],
    lead: "Logiciels de gestion, caisses, sites web, boutiques Shopify, publicité et logos : tout ce qui fait tourner votre commerce, et tout ce qui le fait vendre. Depuis Tlemcen, pour toute l'Algérie.",
    primary: "Demander un devis gratuit",
    whatsapp: "WhatsApp",
    caption: "SuperPOS, notre logiciel de caisse · Publicité d'exemple pour ZNIQA, une marque inventée",
    sticker: "6 services · 1 seul partenaire · Tlemcen · ",
    posAlt: "Écran de caisse SuperPOS avec un ticket en cours et la grille des produits",
    adAlt: "Publicité vidéo sponsorisée pour la marque d'exemple ZNIQA, avec le bouton Commander",
  },
  services: [
    { n: "01", title: "Logiciels", sub: "SuperPOS · G-Stock · Budget Employé" },
    { n: "02", title: "Caisses POS", sub: "Commerces, supérettes, restaurants, cafés" },
    { n: "03", title: "Sites web", sub: "Vitrine, entreprise, landing page" },
    { n: "04", title: "Shopify", sub: "Boutiques et pages produit" },
    { n: "05", title: "Publicité", sub: "Facebook, Instagram, TikTok" },
    { n: "06", title: "Logos", sub: "Identité de marque" },
  ],
  servicesLabel: "Nos six services",
  service: {
    n: "04",
    kicker: "Shopify & pages produit",
    title: "Une page produit qui prend les commandes pour vous.",
    body: "Photos soignées, prix en DA, taille et couleur, et le formulaire que vos clients connaissent déjà : wilaya, commune, stop desk ou domicile. Ils commandent depuis leur téléphone, vous recevez la commande.",
    cta: "Essayer la démo",
    label: "Exemple · ZNIQA est une marque inventée pour la démonstration.",
    features: ["Nom et téléphone", "58 wilayas et commune", "Stop desk ou domicile", "Total calculé en direct", "Un bouton, une commande"],
    laptopAlt: "Page produit ZNIQA sur ordinateur : galerie photo, prix en DA et formulaire de commande",
    phoneAlt: "Formulaire de commande ZNIQA sur téléphone : nom, téléphone, wilaya, commune, livraison et total",
  },
  whatsappLabel: "Écrire à Broda Dev sur WhatsApp",
  waMessage: "Bonjour Broda Dev, je voudrais un devis gratuit.",
};

const ar: typeof fr = {
  nav: {
    services: "الخدمات",
    software: "البرامج",
    work: "أعمالنا",
    contact: "اتصل بنا",
    quote: "اطلب عرض سعر",
    quoteShort: "عرض سعر",
    switchLang: "Français",
    switchShort: "FR",
    menu: "القائمة",
    home: "Broda Dev، الصفحة الرئيسية",
  },
  hero: {
    kicker: "برامج، مواقع وإعلانات · تلمسان، الجزائر",
    titleA: "من صندوق الدفع",
    titleB: "إلى إعلان تيك توك.",
    poster: ["من صندوق", "الدفع", "إلى إعلان", "تيك توك."],
    lead: "برامج التسيير، أنظمة الدفع، مواقع الويب، متاجر Shopify، الإعلانات والشعارات: كل ما يُشغّل تجارتك، وكل ما يزيد مبيعاتها. من تلمسان إلى كل ولايات الجزائر.",
    primary: "اطلب عرض سعر مجاني",
    whatsapp: "واتساب",
    caption: "SuperPOS، برنامج الصندوق الخاص بنا · إعلان للعرض لعلامة مُتخيَّلة اسمها ZNIQA",
    sticker: "6 خدمات · شريك واحد · تلمسان · ",
    posAlt: "شاشة الصندوق في SuperPOS مع تذكرة جارية وقائمة المنتجات",
    adAlt: "إعلان فيديو مُموَّل لعلامة المثال ZNIQA مع زر الطلب",
  },
  services: [
    { n: "01", title: "برامج التسيير", sub: "SuperPOS · G-Stock · Budget Employé" },
    { n: "02", title: "أنظمة الدفع POS", sub: "محلات، متاجر كبرى، مطاعم، مقاهي" },
    { n: "03", title: "مواقع الويب", sub: "موقع تعريفي، مؤسسة، صفحة هبوط" },
    { n: "04", title: "Shopify", sub: "متاجر وصفحات منتجات" },
    { n: "05", title: "الإعلانات", sub: "فيسبوك، إنستغرام، تيك توك" },
    { n: "06", title: "الشعارات", sub: "هوية العلامة" },
  ],
  servicesLabel: "خدماتنا الست",
  service: {
    n: "04",
    kicker: "Shopify وصفحات المنتج",
    title: "صفحة منتج تستقبل الطلبات بدلاً عنك.",
    body: "صور احترافية، السعر بالدينار، المقاس واللون، واستمارة الطلب التي يعرفها زبائنك: الولاية، البلدية، التوصيل للمكتب أو للمنزل. يطلبون من هواتفهم، وتصلك الطلبية.",
    cta: "جرّب النموذج",
    label: "مثال · ZNIQA علامة مُتخيَّلة للعرض فقط.",
    features: ["الاسم ورقم الهاتف", "58 ولاية والبلدية", "المكتب أو المنزل", "المجموع يُحسب مباشرة", "زر واحد، طلبية واحدة"],
    laptopAlt: "صفحة منتج ZNIQA على الحاسوب: صور، السعر بالدينار واستمارة الطلب",
    phoneAlt: "استمارة طلب ZNIQA على الهاتف: الاسم، الهاتف، الولاية، البلدية، التوصيل والمجموع",
  },
  whatsappLabel: "راسل Broda Dev على واتساب",
  waMessage: "السلام عليكم Broda Dev، أريد عرض سعر مجاني.",
};

export const PISTES = { fr, ar };
export type PistesCopy = typeof fr;
export type Lang = keyof typeof PISTES;

export const lang = (locale: string): Lang => (locale === "ar" ? "ar" : "fr");

/**
 * Where the numbered markers sit on the phone order-form render
 * (zniqa-mobile-form), as % of the phone screen height, status bar included:
 * name, wilaya, delivery, total, order button.
 */
export const FORM_MARKERS = [29.3, 49.9, 61.8, 89.1, 96.4];
