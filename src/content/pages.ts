// Copy of the four pages (Services, Logiciels, Réalisations, Contact). Same
// rules as site.ts: French is the reference, ar is typed against it, and every
// claim follows PRODUCT.md (confirmed claims only, examples labelled).

const fr = {
  meta: {
    services: {
      title: "Services · Broda Dev",
      description:
        "Logiciels de gestion, caisses POS, sites web, boutiques Shopify, publicité sponsorisée et logos pour les commerces d'Algérie. Ce que vous recevez, service par service.",
    },
    logiciels: {
      title: "Logiciels · POS-MINI MARKET, G-Stock, Budget Employé · Broda Dev",
      description:
        "POS-MINI MARKET pour la caisse, G-Stock pour le stock du restaurant, Budget Employé pour le personnel et la paie. Installés sur vos PC, en français et en arabe, même sans internet.",
    },
    realisations: {
      title: "Réalisations · Broda Dev",
      description: "Démos en ligne, logiciels en service, sites, publicités et logos : le travail de Broda Dev, en exemples concrets.",
    },
    contact: {
      title: "Contact · Broda Dev",
      description: "Devis gratuit sur WhatsApp au 0542 95 25 96. Broda Dev, Kiffan, Tlemcen.",
    },
  },

  services: {
    title: "Services.",
    lead: "Sept métiers, un seul partenaire. Voici ce que vous recevez, service par service.",
    indexLabel: "Aller à un service",
    receive: "Ce que vous recevez",
    audience: "Pour qui",
    quote: "Demander un devis",
    items: {
      logiciels: {
        lead: "Le logiciel qui fait tourner votre commerce, installé sur vos PC.",
        receive: [
          "POS-MINI MARKET, G-Stock ou Budget Employé, installé sur vos PC",
          "Vos produits, vos catégories et vos utilisateurs configurés",
          "La formation de votre équipe",
          "Un logiciel qui marche même sans internet",
          "Un logiciel sur mesure quand votre métier le demande",
        ],
        audience: "Supérettes, restaurants, commerces et entreprises.",
        link: "Voir les trois logiciels",
        wa: "Bonjour Broda Dev, je voudrais un devis pour un logiciel de gestion.",
        alt: "Tableau de bord de G-Stock au restaurant Lamssat Tlemcen : achats, sorties, état du stock et produits à commander",
        proof: "G-Stock au restaurant Lamssat, Tlemcen · écran réel, chiffres d'exemple.",
      },
      caisses: {
        lead: "Une caisse rapide, faite pour votre commerce.",
        receive: [
          "La caisse configurée avec vos produits et vos prix",
          "L'installation sur votre poste, après vérification de votre imprimante ticket et de votre lecteur de code-barres",
          "La formation de vos caissiers",
          "Pour un restaurant ou un café, une caisse adaptée à votre service",
        ],
        audience: "Supérettes, supermarchés, cafés et restaurants.",
        link: "Voir POS-MINI MARKET",
        wa: "Bonjour Broda Dev, je voudrais une caisse pour mon commerce.",
        alt: "POS-MINI MARKET sur une caisse tactile au comptoir d'une supérette, entre l'imprimante ticket et le lecteur de code-barres",
        proof: "Écran de POS-MINI MARKET, recréé en HD d'après le logiciel réel, sur une photo d'illustration.",
      },
      sites: {
        lead: "Un site qui donne envie de venir, ou de commander.",
        receive: [
          "Un site vitrine, un site d'entreprise ou une landing page",
          "Rapide sur téléphone, en français et en arabe",
          "Le bouton WhatsApp et le formulaire de commande",
          "Des textes et des images faits pour votre commerce",
        ],
        audience: "Commerces, entreprises et vendeurs en ligne.",
        link: "Essayer la landing page ZNIQA",
        wa: "Bonjour Broda Dev, je voudrais un site web.",
        alt: "Site vitrine d'exemple de la supérette MINI MARKET : promos, livraison et commande sur WhatsApp",
        proof: "Exemple · MINI MARKET est une supérette inventée.",
      },
      shopify: {
        lead: "Votre boutique ouverte, et des pages produit qui prennent les commandes.",
        receive: [
          "La boutique Shopify ouverte et configurée",
          "Vos produits, vos photos et vos prix en DA",
          "Des pages produit avec le formulaire algérien : wilaya, commune, stop desk ou domicile",
          "Les commandes réunies dans votre espace Shopify",
        ],
        audience: "Marques et vendeurs qui livrent dans les 58 wilayas.",
        link: "Essayer la page produit ZNIQA",
        wa: "Bonjour Broda Dev, je voudrais une boutique Shopify.",
        alt: "Espace Shopify de la boutique d'exemple ZNIQA : la liste des commandes payées à la livraison, à confirmer ou expédiées",
        proof: "Exemple · ZNIQA est une marque inventée, données d'exemple.",
      },
      publicite: {
        lead: "Une campagne, trois plateformes, et vous voyez ce qu'elle rapporte.",
        receive: [
          "Les visuels et les vidéos faits pour chaque plateforme",
          "Le ciblage par wilaya, âge et centres d'intérêt",
          "Le suivi des commandes et du coût par commande",
          "Un rapport clair, en dinars",
        ],
        audience: "Vendeurs en ligne et commerces qui veulent plus de clients.",
        link: "Voir les publicités d'exemple",
        wa: "Bonjour Broda Dev, je voudrais lancer une campagne sponsorisée.",
        alt: "Tableau de bord publicitaire d'exemple : dépenses, commandes par jour, commandes par plateforme et campagnes",
        proof: "Exemple · chiffres d'exemple, ZNIQA est une marque inventée.",
      },
      logos: {
        lead: "Un logo qui se reconnaît de loin, et tout ce qui va avec.",
        receive: [
          "Le logo et ses couleurs",
          "Les cartes de visite, l'enseigne et les emballages",
          "Les images pour les réseaux sociaux",
          "Des fichiers prêts pour l'imprimeur et pour le téléphone",
        ],
        audience: "Commerces qui ouvrent, et marques qui veulent grandir.",
        link: "Voir les logos d'exemple",
        wa: "Bonjour Broda Dev, je voudrais un logo pour mon commerce.",
        alt: "L'enseigne lumineuse de MINI MARKET au-dessus de l'entrée vitrée de la supérette",
        proof: "Exemple · MINI MARKET est une supérette inventée.",
      },
    },
    // The seventh service, a card rather than a section (no visual).
    hosting: {
      lead: "Votre site reste en ligne et à jour, sans que vous ayez à vous en occuper.",
      receive: ["Le nom de domaine", "L'hébergement du site", "Les mises à jour et petites retouches, chaque mois"],
      audience: "Tous les sites et boutiques que nous livrons, et les vôtres.",
      wa: "Bonjour Broda Dev, je voudrais l'hébergement et la maintenance de mon site.",
    },
  },

  logiciels: {
    title: "Logiciels.",
    lead: "Trois logiciels écrits ici, pour les commerces d'ici. Installés sur vos PC, vos données restent chez vous, et ils marchent même sans internet.",
    jumpLabel: "Aller à un logiciel",
    screensLabel: "Choisir un écran",
    superpos: {
      name: "POS-MINI MARKET",
      what: "La caisse des supérettes et des commerces.",
      sceneAlt: "POS-MINI MARKET sur une caisse tactile au comptoir d'une supérette, entre l'imprimante ticket et le lecteur de code-barres",
      sceneNote: "Écran de POS-MINI MARKET, recréé en HD d'après le logiciel réel, sur une photo d'illustration.",
      features: [
        { t: "Code-barres", d: "Scannez un article ou tapez son nom : il s'ajoute au ticket." },
        { t: "Plusieurs commandes", d: "Des onglets de commande en parallèle, pour servir le client suivant sans attendre." },
        { t: "Carnet de dettes", d: "Les crédits de vos clients, leurs versements et ce qu'il reste à payer." },
        { t: "Remboursement et échange", d: "Depuis l'historique des commandes." },
        { t: "Sans internet", d: "Aucune connexion nécessaire pour encaisser, et rapide même sur un vieux PC." },
        { t: "Français et arabe", d: "Toute la caisse change de langue." },
      ],
      screens: [
        { id: "caisse", label: "Caisse", alt: "Écran de caisse de POS-MINI MARKET : le ticket en cours et la grille des produits" },
        { id: "paiement", label: "Paiement", alt: "Écran de paiement de POS-MINI MARKET : total à payer, montant reçu et monnaie à rendre" },
        { id: "carnet", label: "Carnet de dettes", alt: "Carnet de dettes de POS-MINI MARKET : les clients, leur solde, et le détail d'un client" },
        { id: "cafe", label: "Configuré pour un café", alt: "POS-MINI MARKET configuré pour un café d'exemple : boissons et viennoiseries" },
      ],
      cafeAlt: "POS-MINI MARKET configuré pour un café, sur une caisse tactile au comptoir, devant la vitrine de viennoiseries",
      cafeNote: "La même caisse, configurée pour LEMMA, un café inventé. Écran recréé en HD d'après le logiciel réel, photo d'illustration.",
      proof: "Écrans de POS-MINI MARKET, recréés en HD d'après le logiciel réel · données d'exemple.",
      cta: "Demander une démo de POS-MINI MARKET",
      wa: "Bonjour Broda Dev, je voudrais une démo de POS-MINI MARKET.",
    },
    gstock: {
      name: "G-Stock",
      what: "Le stock et la gestion du restaurant.",
      where: "En service au restaurant Lamssat, à Tlemcen.",
      features: [
        { t: "Achats", d: "Les factures fournisseurs, produit par produit, et ce qu'il reste à payer." },
        { t: "Sorties vers la cuisine", d: "Ce qui sort du stock, jour après jour." },
        { t: "Stock et alertes", d: "L'état du stock, et les produits à commander avant la rupture." },
        { t: "Planning du personnel", d: "Qui travaille, quand, et combien d'heures." },
        { t: "Statistiques et bilan", d: "Recettes, achats, charges et résultat du mois." },
      ],
      screens: [
        { id: "tableau-de-bord", label: "Tableau de bord", alt: "Tableau de bord de G-Stock : achats, sorties, état du stock et produits à commander" },
        { id: "facture-achat", label: "Facture d'achat", alt: "Saisie d'une facture fournisseur dans G-Stock : produits, quantités, prix et reste à payer" },
        { id: "etat-du-stock", label: "État du stock", alt: "État du stock dans G-Stock : produits, catégories, quantités, seuils et valeur" },
        { id: "alertes", label: "Alertes", alt: "Alertes de stock dans G-Stock : produits en rupture ou sous le seuil, avec leur fournisseur" },
        { id: "planning-personnel", label: "Planning", alt: "Planning des employés dans G-Stock : horaires de la semaine et heures par employé" },
        { id: "statistiques", label: "Statistiques", alt: "Statistiques de G-Stock : recettes, coût des sorties, marge et résultat du mois" },
        { id: "bilan", label: "Bilan", alt: "Bilan du mois dans G-Stock : recettes, marge, charges et résultat, jour par jour" },
      ],
      proof: "Écrans réels du restaurant Lamssat Tlemcen, qui a accepté d'être cité · chiffres d'exemple.",
      cta: "Demander une démo de G-Stock",
      wa: "Bonjour Broda Dev, je voudrais une démo de G-Stock.",
    },
    budget: {
      name: "Budget Employé",
      what: "Le personnel, les présences et la paie.",
      features: [
        { t: "Présences", d: "Présent, absent ou en congé, au jour le jour." },
        { t: "Paie", d: "Au jour, à la semaine ou au mois, selon chaque employé." },
        { t: "Avances", d: "Déduites automatiquement de la paie du mois." },
        { t: "Dépenses et rapports", d: "Les sorties du mois et l'évolution de la masse salariale." },
      ],
      screens: [
        { id: "dashboard", label: "Tableau de bord", alt: "Tableau de bord de Budget Employé : employés actifs, présents, masse salariale, paie du mois et avances" },
        { id: "presences", label: "Présences", alt: "Présences de la semaine dans Budget Employé : présent, absent ou en congé pour chaque employé" },
        { id: "salaires", label: "Paie du mois", alt: "Paie du mois dans Budget Employé : jours, gains, avances et montant à verser par employé" },
        { id: "avances", label: "Avances", alt: "Avances, primes et retenues dans Budget Employé, par date et par employé" },
      ],
      proof: "Écrans de démonstration de Budget Employé.",
      cta: "Demander une démo de Budget\u00a0Employé",
      wa: "Bonjour Broda Dev, je voudrais une démo de Budget Employé.",
    },
    steps: {
      title: "De la demande à la première vente.",
      items: [
        { t: "Votre activité", d: "Ce que vous vendez, et comment vous encaissez." },
        { t: "Configuration", d: "Produits, catégories, utilisateurs et droits." },
        { t: "Installation", d: "Sur vos PC, avec votre matériel, vérifié avant." },
        { t: "Formation", d: "Pour vous et pour votre équipe." },
      ],
    },
    faq: {
      title: "Questions fréquentes.",
      items: [
        { q: "La caisse marche sans internet ?", a: "Oui. POS-MINI MARKET fonctionne entièrement hors ligne." },
        { q: "Il faut un ordinateur récent ?", a: "Non. POS-MINI MARKET reste rapide même sur un vieux PC." },
        { q: "Et pour un restaurant ou un café ?", a: "On adapte la caisse à votre service. Pour le stock du restaurant, il y a G-Stock." },
        { q: "Mon imprimante et mon lecteur de code-barres sont-ils compatibles ?", a: "Dites-nous votre matériel : on le vérifie avant l'installation." },
        { q: "La formation est comprise ?", a: "Oui, la formation fait partie de l'installation." },
        { q: "Pouvez-vous partir d'un logiciel existant ?", a: "Oui. POS-MINI MARKET et G-Stock servent de base et s'adaptent à votre métier." },
      ],
    },
  },

  realisations: {
    title: "Réalisations.",
    lead: "Des exemples concrets, faits comme pour un vrai client. Les marques sont inventées pour la démonstration ; G-Stock, lui, tourne pour de vrai au restaurant Lamssat.",
    filtersLabel: "Filtrer les réalisations",
    filters: { all: "Tout", demos: "Démos en ligne", logiciels: "Logiciels", sites: "Sites et boutiques", publicite: "Publicité", logos: "Logos" },
    tags: { real: "Réel", example: "Exemple", live: "Démo en ligne" },
    open: "Ouvrir la démo",
    more: "En savoir plus",
    items: {
      zniqaProduct: {
        title: "ZNIQA, page produit",
        line: "Une boutique streetwear : galerie, taille, couleur, et le formulaire de commande avec les 58 wilayas.",
        alt: "Page produit ZNIQA sur ordinateur : galerie photo, prix en DA et formulaire de commande",
      },
      zniqaLanding: {
        title: "ZNIQA, landing page",
        line: "Une page pour une seule offre, faite pour le téléphone, avec le bouton Commander toujours visible.",
        alt: "Landing page d'exemple du t-shirt ZNIQA sur téléphone",
      },
      nouara: {
        title: "NOUARA, sac à main",
        line: "Une maroquinerie en trois coloris : photos, dimensions, et la commande payée à la livraison.",
        alt: "Page produit NOUARA sur ordinateur : le sac camel, son prix et le formulaire de commande",
      },
      gstock: {
        title: "G-Stock chez Lamssat",
        line: "Le stock du restaurant Lamssat, à Tlemcen : achats, sorties, alertes et planning. Écran réel, chiffres d'exemple.",
        alt: "Tableau de bord de G-Stock au restaurant Lamssat Tlemcen",
      },
      superpos: {
        title: "POS-MINI MARKET au comptoir",
        line: "La caisse d'une supérette, avec l'imprimante ticket et le lecteur de code-barres.",
        alt: "POS-MINI MARKET sur une caisse tactile au comptoir d'une supérette",
      },
      superposCafe: {
        title: "POS-MINI MARKET pour un café",
        line: "La même caisse, configurée avec le menu de LEMMA, un café inventé.",
        alt: "POS-MINI MARKET configuré pour un café, au comptoir, devant la vitrine de viennoiseries",
      },
      minimarketSite: {
        title: "MINI MARKET, site vitrine",
        line: "Le site d'une supérette : promos, livraison, et la commande sur WhatsApp.",
        alt: "Site vitrine d'exemple de la supérette MINI MARKET",
      },
      shopify: {
        title: "ZNIQA sur Shopify",
        line: "Les commandes de la boutique réunies dans l'espace Shopify, à confirmer par téléphone.",
        alt: "Espace Shopify de la boutique d'exemple ZNIQA : la liste des commandes",
      },
      campagne: {
        title: "Campagne ZNIQA",
        line: "Le même produit sur Facebook, Instagram et TikTok, chaque visuel au format de sa plateforme.",
        alt: "Trois publicités d'exemple pour ZNIQA sur Facebook, Instagram et TikTok",
      },
      tableau: {
        title: "Le rapport de campagne",
        line: "Dépenses, commandes et coût par commande, en dinars. Chiffres d'exemple.",
        alt: "Tableau de bord publicitaire d'exemple : dépenses, commandes par jour et par plateforme",
      },
      logos: {
        title: "Quatre logos",
        line: "Un café, une maroquinerie, une supérette et une marque streetwear, chacun dans ses couleurs.",
      },
      enseigne: {
        title: "MINI MARKET, l'enseigne",
        line: "L'enseigne lumineuse au-dessus de l'entrée vitrée : le logo, et la signature « Toujours à vos côtés ! ».",
        alt: "L'enseigne lumineuse de MINI MARKET au-dessus de l'entrée vitrée de la supérette",
      },
    },
    note: "Les marques ZNIQA, NOUARA, MINI MARKET et LEMMA sont inventées pour la démonstration. Leurs photos sont des illustrations et leurs chiffres sont des exemples.",
  },

  contact: {
    where: {
      title: "Kiffan, Tlemcen.",
      line: "C'est d'ici que Broda Dev travaille, pour les commerces de toute l'Algérie.",
      hours: "Le plus simple : un message WhatsApp, avec deux lignes sur votre projet.",
    },
  },

  // Any address that matches no page (src/app/[locale]/not-found.tsx).
  notFound: {
    title: "Page introuvable.",
    lead: "Cette adresse ne mène à aucune page : elle a peut-être changé. Tout le reste est à un clic d'ici.",
    home: "Retour à l'accueil",
    services: "Voir les services",
    work: "Voir les réalisations",
  },
};

// Arabic rewritten for Algerian readers on 2026-09-27 (see site.ts): clear
// sentences in the words used here, the same facts as the French.
const ar: typeof fr = {
  meta: {
    services: {
      title: "الخدمات · Broda Dev",
      description: "برامج التسيير، أجهزة صندوق الدفع، مواقع الإنترنت، متاجر Shopify، الإشهار الممول والشعار، للمحلات والشركات في الجزائر. ما تستلمه في كل خدمة.",
    },
    logiciels: {
      title: "البرامج · POS-MINI MARKET، G-Stock، Budget Employé · Broda Dev",
      description: "POS-MINI MARKET لصندوق الدفع، G-Stock لمخزون المطعم، Budget Employé للعمال والرواتب. على حواسيبك، بالعربية والفرنسية، وتعمل حتى بدون إنترنت.",
    },
    realisations: {
      title: "أعمالنا · Broda Dev",
      description: "أمثلة تجرّبها مباشرة، برامج مستعملة في محلات، مواقع، إشهار وشعارات: عمل Broda Dev بأمثلة واضحة.",
    },
    contact: {
      title: "اتصل بنا · Broda Dev",
      description: "عرض سعر مجاني عبر واتساب على الرقم 0542 95 25 96. Broda Dev، كيفان، تلمسان.",
    },
  },

  services: {
    title: "الخدمات.",
    lead: "سبع خدمات، وشريك واحد. هذا ما تستلمه في كل خدمة.",
    indexLabel: "انتقل إلى خدمة",
    receive: "ما تستلمه",
    audience: "لمن؟",
    quote: "اطلب عرض سعر",
    items: {
      logiciels: {
        lead: "البرنامج الذي تسيّر به نشاطك، على حواسيبك.",
        receive: [
          "POS-MINI MARKET أو G-Stock أو Budget Employé، مثبّت على حواسيبك",
          "سلعك وأصنافها والمستخدمون، كلها مضبوطة",
          "تكوين فريقك",
          "برنامج يعمل حتى بدون إنترنت",
          "برنامج على المقاس إذا احتاجه نشاطك",
        ],
        audience: "محلات المواد الغذائية، المطاعم، المحلات والشركات.",
        link: "شاهد البرامج الثلاثة",
        wa: "السلام عليكم Broda Dev، أريد عرض سعر لبرنامج تسيير.",
        alt: "لوحة G-Stock في مطعم Lamssat Tlemcen: المشتريات، ما خرج إلى المطبخ، المخزون والسلع التي يجب طلبها",
        proof: "G-Stock في مطعم Lamssat، تلمسان · الشاشة حقيقية، والأرقام للمثال.",
      },
      caisses: {
        lead: "صندوق دفع سريع، مضبوط على نشاطك.",
        receive: [
          "صندوق الدفع مضبوط بسلعك وأسعارك",
          "التركيب على جهازك بعد تجربة طابعة الوصولات وقارئ الباركود",
          "تكوين من سيعمل على صندوق الدفع",
          "للمطعم أو المقهى، صندوق دفع مضبوط على طريقة عملك",
        ],
        audience: "محلات المواد الغذائية، السوبر ماركت، المقاهي والمطاعم.",
        link: "شاهد POS-MINI MARKET",
        wa: "السلام عليكم Broda Dev، أريد صندوق دفع لمحلي.",
        alt: "POS-MINI MARKET على صندوق دفع بشاشة لمس فوق طاولة محل مواد غذائية، بين طابعة الوصولات وقارئ الباركود",
        proof: "شاشة POS-MINI MARKET أعدنا رسمها بجودة عالية من البرنامج الحقيقي، فوق صورة للتوضيح.",
      },
      sites: {
        lead: "موقع يعرّف الناس بك، أو يجعلهم يطلبون.",
        receive: [
          "موقع تعريفي، موقع شركة أو صفحة بيع",
          "سريع على الهاتف، بالعربية والفرنسية",
          "زر واتساب واستمارة الطلب",
          "نصوص وصور مصنوعة لنشاطك",
        ],
        audience: "المحلات، الشركات، ومن يبيع عبر الإنترنت.",
        link: "جرّب صفحة بيع ZNIQA",
        wa: "السلام عليكم Broda Dev، أريد موقع إنترنت.",
        alt: "موقع تعريفي للمثال لمحل MINI MARKET: التخفيضات، التوصيل والطلب عبر واتساب",
        proof: "مثال · MINI MARKET محل وهمي.",
      },
      shopify: {
        lead: "متجرك جاهز، بصفحات منتجات تستقبل الطلبيات.",
        receive: [
          "متجر Shopify جاهز ومضبوط",
          "سلعك وصورها وأسعارها بالدينار",
          "صفحات منتجات باستمارة الطلب الجزائرية: الولاية، البلدية، المكتب أو المنزل",
          "كل الطلبيات في حسابك على Shopify",
        ],
        audience: "العلامات ومن يبيع مع التوصيل إلى الـ58 ولاية.",
        link: "جرّب صفحة منتج ZNIQA",
        wa: "السلام عليكم Broda Dev، أريد متجراً على Shopify.",
        alt: "حساب Shopify لمتجر المثال ZNIQA: قائمة الطلبيات بالدفع عند الاستلام، في انتظار التأكيد أو مُرسَلة",
        proof: "مثال · ZNIQA علامة وهمية، والأرقام للمثال.",
      },
      publicite: {
        lead: "حملة واحدة على ثلاث منصات، وترى بالأرقام ما تجلبه لك.",
        receive: [
          "صور وفيديوهات مصنوعة لكل منصة",
          "الاستهداف حسب الولاية والعمر والاهتمامات",
          "عدد الطلبيات وتكلفة كل طلبية",
          "تقرير واضح بالدينار",
        ],
        audience: "من يبيع عبر الإنترنت، والمحلات التي تريد زبائن أكثر.",
        link: "شاهد إشهارات المثال",
        wa: "السلام عليكم Broda Dev، أريد إطلاق حملة إشهارية ممولة.",
        alt: "لوحة إشهار للمثال: المصروف، الطلبيات في اليوم، الطلبيات حسب المنصة والحملات",
        proof: "مثال · الأرقام للمثال، و ZNIQA علامة وهمية.",
      },
      logos: {
        lead: "شعار يعرفه الناس من بعيد، وكل ما يلزمه.",
        receive: [
          "الشعار وألوانه",
          "بطاقات الزيارة، واجهة المحل والتغليف",
          "صور لصفحات التواصل",
          "ملفات جاهزة للطباعة وللهاتف",
        ],
        audience: "المحلات الجديدة، والعلامات التي تريد أن تكبر.",
        link: "شاهد شعارات المثال",
        wa: "السلام عليكم Broda Dev، أريد شعاراً لمحلي.",
        alt: "لافتة MINI MARKET المضيئة فوق مدخل المحل",
        proof: "مثال · MINI MARKET محل وهمي.",
      },
    },
    hosting: {
      lead: "يبقى موقعك يعمل ومحدّثاً، بدون أن تشغل بالك.",
      receive: ["اسم الموقع (الدومين)", "استضافة الموقع", "التحديثات والتعديلات الصغيرة، كل شهر"],
      audience: "كل المواقع والمتاجر التي نسلّمها، ومواقعكم الحالية أيضاً.",
      wa: "السلام عليكم Broda Dev، أريد استضافة موقعي وصيانته.",
    },
  },

  logiciels: {
    title: "البرامج.",
    lead: "ثلاثة برامج من إنجازنا، على مقاس المحلات عندنا. على حواسيبك، معلوماتك تبقى عندك، وتعمل حتى بدون إنترنت.",
    jumpLabel: "انتقل إلى برنامج",
    screensLabel: "اختر شاشة",
    superpos: {
      name: "POS-MINI MARKET",
      what: "برنامج صندوق الدفع للمحلات والسوبر ماركت.",
      sceneAlt: "POS-MINI MARKET على صندوق دفع بشاشة لمس فوق طاولة محل مواد غذائية، بين طابعة الوصولات وقارئ الباركود",
      sceneNote: "شاشة POS-MINI MARKET أعدنا رسمها بجودة عالية من البرنامج الحقيقي، فوق صورة للتوضيح.",
      features: [
        { t: "الباركود", d: "امسح السلعة أو اكتب اسمها، فتُضاف إلى الوصل." },
        { t: "عدة زبائن معاً", d: "افتح عدة وصولات في نفس الوقت، وخدّم الزبون الموالي بدون انتظار." },
        { t: "دفتر الديون (الكريدي)", d: "ديون زبائنك، ما دفعوه وما بقي عليهم." },
        { t: "الإرجاع والتبديل", d: "من سجل المبيعات." },
        { t: "بدون إنترنت", d: "تبيع بدون أي اتصال، وسريع حتى على حاسوب قديم." },
        { t: "بالعربية والفرنسية", d: "البرنامج كله يتبدّل إلى اللغة التي تختارها." },
      ],
      screens: [
        { id: "caisse", label: "صندوق الدفع", alt: "شاشة صندوق الدفع في POS-MINI MARKET: الوصل المفتوح وقائمة السلع" },
        { id: "paiement", label: "الدفع", alt: "شاشة الدفع في POS-MINI MARKET: المبلغ، ما دفعه الزبون والصرف" },
        { id: "carnet", label: "دفتر الديون", alt: "دفتر الديون في POS-MINI MARKET: الزبائن وما على كل واحد، وتفاصيل زبون" },
        { id: "cafe", label: "لمقهى", alt: "POS-MINI MARKET مضبوط لمقهى للمثال: المشروبات والحلويات" },
      ],
      cafeAlt: "POS-MINI MARKET مضبوط لمقهى، على صندوق دفع بشاشة لمس فوق الطاولة، أمام واجهة الحلويات",
      cafeNote: "نفس البرنامج، مضبوط لـ LEMMA، مقهى وهمي. شاشة أعدنا رسمها بجودة عالية من البرنامج الحقيقي، وصورة للتوضيح.",
      proof: "شاشات POS-MINI MARKET أعدنا رسمها بجودة عالية من البرنامج الحقيقي · الأرقام للمثال.",
      cta: "اطلب عرضاً تجريبياً لـ POS-MINI MARKET",
      wa: "السلام عليكم Broda Dev، أريد عرضاً تجريبياً لبرنامج POS-MINI MARKET.",
    },
    gstock: {
      name: "G-Stock",
      what: "تسيير مخزون المطعم.",
      where: "يستعمله مطعم Lamssat في تلمسان.",
      features: [
        { t: "المشتريات", d: "فواتير المورّدين، سلعة بسلعة، وما بقي للدفع." },
        { t: "ما يخرج إلى المطبخ", d: "كل ما يخرج من المخزن، يوماً بيوم." },
        { t: "المخزون والتنبيهات", d: "كمية كل سلعة، والسلع التي يجب طلبها قبل أن تنفد." },
        { t: "جدول العمال", d: "من يعمل، ومتى، وكم ساعة." },
        { t: "الإحصائيات والحصيلة", d: "المداخيل، المشتريات، المصاريف ونتيجة الشهر." },
      ],
      screens: [
        { id: "tableau-de-bord", label: "الرئيسية", alt: "لوحة G-Stock: المشتريات، ما خرج إلى المطبخ، المخزون والسلع التي يجب طلبها" },
        { id: "facture-achat", label: "فاتورة شراء", alt: "إدخال فاتورة مورّد في G-Stock: السلع، الكميات، الأسعار وما بقي للدفع" },
        { id: "etat-du-stock", label: "المخزون", alt: "المخزون في G-Stock: السلع، الأصناف، الكميات، الحد الأدنى والقيمة" },
        { id: "alertes", label: "التنبيهات", alt: "تنبيهات المخزون في G-Stock: سلع نفدت أو قاربت النفاد، مع مورّدها" },
        { id: "planning-personnel", label: "جدول العمال", alt: "جدول العمال في G-Stock: أوقات الأسبوع وساعات كل عامل" },
        { id: "statistiques", label: "الإحصائيات", alt: "إحصائيات G-Stock: المداخيل، تكلفة ما خرج إلى المطبخ، الربح ونتيجة الشهر" },
        { id: "bilan", label: "الحصيلة", alt: "حصيلة الشهر في G-Stock: المداخيل، الربح، المصاريف والنتيجة، يوماً بيوم" },
      ],
      proof: "شاشات حقيقية من مطعم Lamssat Tlemcen، الذي وافق على ذكر اسمه · الأرقام للمثال.",
      cta: "اطلب عرضاً تجريبياً لـ G-Stock",
      wa: "السلام عليكم Broda Dev، أريد عرضاً تجريبياً لبرنامج G-Stock.",
    },
    budget: {
      name: "Budget Employé",
      what: "العمال، الحضور والرواتب.",
      features: [
        { t: "الحضور", d: "حاضر، غائب أو في عطلة، يوماً بيوم." },
        { t: "الرواتب", d: "باليوم أو بالأسبوع أو بالشهر، حسب كل عامل." },
        { t: "التسبيقات", d: "تُخصم وحدها من راتب الشهر." },
        { t: "المصاريف والتقارير", d: "مصاريف الشهر، وتطوّر مجموع الرواتب." },
      ],
      screens: [
        { id: "dashboard", label: "الرئيسية", alt: "لوحة Budget Employé: عدد العمال، الحاضرون اليوم، مجموع الرواتب، رواتب الشهر والتسبيقات" },
        { id: "presences", label: "الحضور", alt: "حضور الأسبوع في Budget Employé: حاضر، غائب أو في عطلة لكل عامل" },
        { id: "salaires", label: "رواتب الشهر", alt: "رواتب الشهر في Budget Employé: الأيام، المستحق، التسبيقات والمبلغ الذي يُدفع لكل عامل" },
        { id: "avances", label: "التسبيقات", alt: "التسبيقات والمكافآت والاقتطاعات في Budget Employé، حسب التاريخ والعامل" },
      ],
      proof: "شاشات للمثال من Budget Employé.",
      cta: "اطلب عرضاً تجريبياً لـ Budget Employé",
      wa: "السلام عليكم Broda Dev، أريد عرضاً تجريبياً لبرنامج Budget Employé.",
    },
    steps: {
      title: "من طلبك إلى أول عملية بيع.",
      items: [
        { t: "نشاطك", d: "ماذا تبيع، وكيف يدفع زبائنك." },
        { t: "الضبط", d: "السلع، الأصناف، المستخدمون وصلاحياتهم." },
        { t: "التركيب", d: "على حواسيبك، مع أجهزتك، بعد تجربتها." },
        { t: "التكوين", d: "لك ولفريقك." },
      ],
    },
    faq: {
      title: "أسئلة شائعة.",
      items: [
        { q: "هل يعمل صندوق الدفع بدون إنترنت؟", a: "نعم. POS-MINI MARKET يعمل كاملاً بدون اتصال." },
        { q: "هل أحتاج حاسوباً جديداً؟", a: "لا. POS-MINI MARKET يبقى سريعاً حتى على حاسوب قديم." },
        { q: "وإذا كان عندي مطعم أو مقهى؟", a: "نضبط صندوق الدفع على طريقة عملك. ولمخزون المطعم، عندنا G-Stock." },
        { q: "هل تصلح طابعتي وقارئ الباركود عندي؟", a: "أخبرنا بأجهزتك، ونجرّبها قبل التركيب." },
        { q: "هل التكوين مشمول؟", a: "نعم، التكوين جزء من التركيب." },
        { q: "هل يمكن تعديل البرنامج حسب نشاطي؟", a: "نعم. POS-MINI MARKET و G-Stock أساس نكيّفه مع نشاطك." },
      ],
    },
  },

  realisations: {
    title: "أعمالنا.",
    lead: "أمثلة حقيقية الشكل، صنعناها كما نصنعها لزبون. العلامات وهمية للمثال، أما G-Stock فيعمل فعلاً في مطعم Lamssat.",
    filtersLabel: "اختر نوع العمل",
    filters: { all: "الكل", demos: "أمثلة تجرّبها", logiciels: "البرامج", sites: "المواقع والمتاجر", publicite: "الإشهار", logos: "الشعارات" },
    tags: { real: "حقيقي", example: "مثال", live: "جرّبه مباشرة" },
    open: "افتح المثال",
    more: "اعرف المزيد",
    items: {
      zniqaProduct: {
        title: "ZNIQA، صفحة منتج",
        line: "متجر ملابس شبابية: صور، مقاس، لون، واستمارة الطلب مع الـ58 ولاية.",
        alt: "صفحة منتج ZNIQA على الحاسوب: الصور، السعر بالدينار واستمارة الطلب",
      },
      zniqaLanding: {
        title: "ZNIQA، صفحة بيع",
        line: "صفحة لعرض واحد، مصنوعة للهاتف، وزر الطلب ظاهر دائماً.",
        alt: "صفحة بيع للمثال لتيشيرت ZNIQA على الهاتف",
      },
      nouara: {
        title: "NOUARA، حقيبة يد",
        line: "حقيبة جلدية بثلاثة ألوان: صور، مقاسات، والطلب مع الدفع عند الاستلام.",
        alt: "صفحة منتج NOUARA على الحاسوب: الحقيبة باللون البني الفاتح، سعرها واستمارة الطلب",
      },
      gstock: {
        title: "G-Stock في مطعم Lamssat",
        line: "مخزون مطعم Lamssat في تلمسان: المشتريات، ما يخرج إلى المطبخ، التنبيهات والجدول. الشاشة حقيقية، والأرقام للمثال.",
        alt: "لوحة G-Stock في مطعم Lamssat Tlemcen",
      },
      superpos: {
        title: "POS-MINI MARKET في المحل",
        line: "صندوق الدفع في محل مواد غذائية، مع طابعة الوصولات وقارئ الباركود.",
        alt: "POS-MINI MARKET على صندوق دفع بشاشة لمس فوق طاولة محل مواد غذائية",
      },
      superposCafe: {
        title: "POS-MINI MARKET لمقهى",
        line: "نفس البرنامج، مضبوط بقائمة LEMMA، مقهى وهمي.",
        alt: "POS-MINI MARKET مضبوط لمقهى، فوق الطاولة، أمام واجهة الحلويات",
      },
      minimarketSite: {
        title: "MINI MARKET، موقع تعريفي",
        line: "موقع سوبر ماركت: التخفيضات، التوصيل، والطلب عبر واتساب.",
        alt: "موقع تعريفي للمثال لمحل MINI MARKET",
      },
      shopify: {
        title: "ZNIQA على Shopify",
        line: "كل طلبيات المتجر في حساب Shopify، في انتظار تأكيدها بالهاتف.",
        alt: "حساب Shopify لمتجر المثال ZNIQA: قائمة الطلبيات",
      },
      campagne: {
        title: "حملة ZNIQA",
        line: "نفس المنتج على فيسبوك وإنستغرام وتيك توك، وكل صورة بمقاس منصتها.",
        alt: "ثلاث إشهارات للمثال لعلامة ZNIQA على فيسبوك وإنستغرام وتيك توك",
      },
      tableau: {
        title: "تقرير الحملة",
        line: "المصروف، الطلبيات وتكلفة كل طلبية، بالدينار. الأرقام للمثال.",
        alt: "لوحة إشهار للمثال: المصروف، الطلبيات في اليوم وحسب المنصة",
      },
      logos: {
        title: "أربعة شعارات",
        line: "مقهى، محل حقائب، سوبر ماركت وعلامة ملابس شبابية، ولكل واحد ألوانه.",
      },
      enseigne: {
        title: "MINI MARKET، اللافتة",
        line: "اللافتة المضيئة فوق مدخل المحل: الشعار، وعبارة المحل « Toujours à vos côtés ! » (دائماً بجانبكم).",
        alt: "لافتة MINI MARKET المضيئة فوق مدخل المحل",
      },
    },
    note: "ZNIQA و NOUARA و MINI MARKET و LEMMA علامات وهمية للمثال. صورها للتوضيح، وأرقامها أمثلة.",
  },

  contact: {
    where: {
      title: "كيفان، تلمسان.",
      line: "من هنا تعمل Broda Dev، لمحلات وشركات الجزائر كلها.",
      hours: "الأسهل: رسالة واتساب، بسطرين عن مشروعك.",
    },
  },

  notFound: {
    title: "هذه الصفحة غير موجودة.",
    lead: "هذا الرابط لا يؤدي إلى أي صفحة، ربما تغيّر. باقي الموقع على بُعد نقرة من هنا.",
    home: "العودة إلى الرئيسية",
    services: "شاهد الخدمات",
    work: "شاهد أعمالنا",
  },
};

export const PAGES = { fr, ar };
