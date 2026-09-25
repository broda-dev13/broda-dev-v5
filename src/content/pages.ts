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
      title: "Logiciels · SuperPOS, G-Stock, Budget Employé · Broda Dev",
      description:
        "SuperPOS pour la caisse, G-Stock pour le stock du restaurant, Budget Employé pour le personnel et la paie. Installés sur vos PC, en français et en arabe, même sans internet.",
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
    lead: "Six métiers, un seul partenaire. Voici ce que vous recevez, service par service.",
    indexLabel: "Aller à un service",
    receive: "Ce que vous recevez",
    audience: "Pour qui",
    quote: "Demander un devis",
    items: {
      logiciels: {
        lead: "Le logiciel qui fait tourner votre commerce, installé sur vos PC.",
        receive: [
          "SuperPOS, G-Stock ou Budget Employé, installé sur vos PC",
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
        link: "Voir SuperPOS",
        wa: "Bonjour Broda Dev, je voudrais une caisse pour mon commerce.",
        alt: "SuperPOS sur une caisse tactile au comptoir d'une supérette, entre l'imprimante ticket et le lecteur de code-barres",
        proof: "Écran réel de SuperPOS, recréé en HD, sur une photo d'illustration.",
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
        alt: "Site vitrine d'exemple de la supérette HANOUT 13 : promos, livraison et commande sur WhatsApp",
        proof: "Exemple · HANOUT 13 est une supérette inventée.",
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
        alt: "L'enseigne de HANOUT 13 au-dessus de la porte de la supérette",
        proof: "Exemple · HANOUT 13 est une supérette inventée.",
      },
    },
  },

  logiciels: {
    title: "Logiciels.",
    lead: "Trois logiciels écrits ici, pour les commerces d'ici. Installés sur vos PC, vos données restent chez vous, et ils marchent même sans internet.",
    jumpLabel: "Aller à un logiciel",
    screensLabel: "Choisir un écran",
    superpos: {
      name: "SuperPOS",
      what: "La caisse des supérettes et des commerces.",
      sceneAlt: "SuperPOS sur une caisse tactile au comptoir d'une supérette, entre l'imprimante ticket et le lecteur de code-barres",
      sceneNote: "Écran réel de SuperPOS, recréé en HD, sur une photo d'illustration.",
      features: [
        { t: "Code-barres", d: "Scannez un article ou tapez son nom : il s'ajoute au ticket." },
        { t: "Plusieurs commandes", d: "Des onglets de commande en parallèle, pour servir le client suivant sans attendre." },
        { t: "Carnet de dettes", d: "Les crédits de vos clients, leurs versements et ce qu'il reste à payer." },
        { t: "Remboursement et échange", d: "Depuis l'historique des commandes." },
        { t: "Sans internet", d: "Aucune connexion nécessaire pour encaisser, et rapide même sur un vieux PC." },
        { t: "Français et arabe", d: "Toute la caisse change de langue." },
      ],
      screens: [
        { id: "caisse", label: "Caisse", alt: "Écran de caisse de SuperPOS : le ticket en cours et la grille des produits" },
        { id: "paiement", label: "Paiement", alt: "Écran de paiement de SuperPOS : total à payer, montant reçu et monnaie à rendre" },
        { id: "carnet", label: "Carnet de dettes", alt: "Carnet de dettes de SuperPOS : les clients, leur solde, et le détail d'un client" },
        { id: "cafe", label: "Configuré pour un café", alt: "SuperPOS configuré pour un café d'exemple : boissons et viennoiseries" },
      ],
      cafeAlt: "SuperPOS configuré pour un café, sur une caisse tactile au comptoir, devant la vitrine de viennoiseries",
      cafeNote: "La même caisse, configurée pour LEMMA, un café inventé. Écran réel recréé en HD, photo d'illustration.",
      proof: "Écrans réels de SuperPOS, recréés en HD · données d'exemple.",
      cta: "Demander une démo de SuperPOS",
      wa: "Bonjour Broda Dev, je voudrais une démo de SuperPOS.",
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
        { q: "La caisse marche sans internet ?", a: "Oui. SuperPOS fonctionne entièrement hors ligne." },
        { q: "Il faut un ordinateur récent ?", a: "Non. SuperPOS reste rapide même sur un vieux PC." },
        { q: "Et pour un restaurant ou un café ?", a: "On adapte la caisse à votre service. Pour le stock du restaurant, il y a G-Stock." },
        { q: "Mon imprimante et mon lecteur de code-barres sont-ils compatibles ?", a: "Dites-nous votre matériel : on le vérifie avant l'installation." },
        { q: "La formation est comprise ?", a: "Oui, la formation fait partie de l'installation." },
        { q: "Pouvez-vous partir d'un logiciel existant ?", a: "Oui. SuperPOS et G-Stock servent de base et s'adaptent à votre métier." },
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
        title: "SuperPOS au comptoir",
        line: "La caisse d'une supérette, avec l'imprimante ticket et le lecteur de code-barres.",
        alt: "SuperPOS sur une caisse tactile au comptoir d'une supérette",
      },
      superposCafe: {
        title: "SuperPOS pour un café",
        line: "La même caisse, configurée avec le menu de LEMMA, un café inventé.",
        alt: "SuperPOS configuré pour un café, au comptoir, devant la vitrine de viennoiseries",
      },
      hanoutSite: {
        title: "HANOUT 13, site vitrine",
        line: "Le site d'une supérette de quartier : promos, livraison, et la commande sur WhatsApp.",
        alt: "Site vitrine d'exemple de la supérette HANOUT 13",
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
        title: "HANOUT 13, l'enseigne",
        line: "Le logo peint au-dessus de la porte, en français et en arabe.",
        alt: "L'enseigne de HANOUT 13 au-dessus de la porte de la supérette",
      },
    },
    note: "Les marques ZNIQA, NOUARA, HANOUT 13 et LEMMA sont inventées pour la démonstration. Leurs photos sont générées avec Canva et leurs chiffres sont des exemples.",
  },

  contact: {
    where: {
      title: "Kiffan, Tlemcen.",
      line: "C'est d'ici que Broda Dev travaille, pour les commerces de toute l'Algérie.",
      hours: "Le plus simple : un message WhatsApp, avec deux lignes sur votre projet.",
    },
  },
};

const ar: typeof fr = {
  meta: {
    services: {
      title: "الخدمات · Broda Dev",
      description: "برامج التسيير، أنظمة الدفع، مواقع الويب، متاجر Shopify، الإعلانات المموّلة والشعارات لتجار الجزائر. ما تستلمه، خدمة بخدمة.",
    },
    logiciels: {
      title: "البرامج · SuperPOS، G-Stock، Budget Employé · Broda Dev",
      description: "SuperPOS للصندوق، G-Stock لمخزون المطعم، Budget Employé للعمال والأجور. مثبّتة على حواسيبك، بالفرنسية والعربية، حتى بدون إنترنت.",
    },
    realisations: {
      title: "أعمالنا · Broda Dev",
      description: "نماذج مباشرة، برامج قيد الاستعمال، مواقع، إعلانات وشعارات: عمل Broda Dev في أمثلة ملموسة.",
    },
    contact: {
      title: "اتصل بنا · Broda Dev",
      description: "عرض سعر مجاني عبر واتساب على الرقم 0542 95 25 96. Broda Dev، كيفان، تلمسان.",
    },
  },

  services: {
    title: "الخدمات.",
    lead: "ست مهن، وشريك واحد. هذا ما تستلمه، خدمة بخدمة.",
    indexLabel: "الانتقال إلى خدمة",
    receive: "ما تستلمه",
    audience: "لمن",
    quote: "اطلب عرض سعر",
    items: {
      logiciels: {
        lead: "البرنامج الذي يسيّر تجارتك، مثبّت على حواسيبك.",
        receive: [
          "SuperPOS أو G-Stock أو Budget Employé، مثبّت على حواسيبك",
          "منتجاتك وأصنافك ومستخدموك مضبوطون",
          "تدريب فريقك",
          "برنامج يعمل حتى بدون إنترنت",
          "برنامج حسب الطلب عندما تحتاجه مهنتك",
        ],
        audience: "البقالات، المطاعم، المحلات والمؤسسات.",
        link: "شاهد البرامج الثلاثة",
        wa: "السلام عليكم Broda Dev، أريد عرض سعر لبرنامج تسيير.",
        alt: "لوحة تحكم G-Stock في مطعم Lamssat Tlemcen: المشتريات، الإخراجات، حالة المخزون والمنتجات الواجب طلبها",
        proof: "G-Stock في مطعم Lamssat، تلمسان · شاشة حقيقية، أرقام للعرض.",
      },
      caisses: {
        lead: "صندوق سريع، مصمَّم لتجارتك.",
        receive: [
          "الصندوق مضبوط بمنتجاتك وأسعارك",
          "التثبيت على جهازك بعد التحقّق من طابعة التذاكر وقارئ الرمز الشريطي",
          "تدريب من يعمل على الصندوق",
          "للمطعم أو المقهى، صندوق مكيَّف حسب طريقة خدمتك",
        ],
        audience: "البقالات، السوبرماركت، المقاهي والمطاعم.",
        link: "شاهد SuperPOS",
        wa: "السلام عليكم Broda Dev، أريد نظام صندوق لتجارتي.",
        alt: "SuperPOS على صندوق لمسي عند منضدة بقالة، بين طابعة التذاكر وقارئ الرمز الشريطي",
        proof: "شاشة حقيقية من SuperPOS، أعيد إنجازها بدقة عالية، على صورة توضيحية.",
      },
      sites: {
        lead: "موقع يجعلهم يأتون، أو يطلبون.",
        receive: [
          "موقع تعريفي، موقع مؤسسة أو صفحة هبوط",
          "سريع على الهاتف، بالفرنسية والعربية",
          "زر واتساب واستمارة الطلب",
          "نصوص وصور مصنوعة لتجارتك",
        ],
        audience: "المحلات، المؤسسات والباعة عبر الإنترنت.",
        link: "جرّب صفحة هبوط ZNIQA",
        wa: "السلام عليكم Broda Dev، أريد موقع ويب.",
        alt: "موقع تعريفي للعرض لبقالة HANOUT 13: التخفيضات، التوصيل والطلب عبر واتساب",
        proof: "مثال · HANOUT 13 بقالة مُتخيَّلة.",
      },
      shopify: {
        lead: "متجرك مفتوح، وصفحات منتجات تستقبل الطلبيات.",
        receive: [
          "متجر Shopify مفتوح ومضبوط",
          "منتجاتك وصورك وأسعارك بالدينار",
          "صفحات منتجات بالاستمارة الجزائرية: الولاية، البلدية، المكتب أو المنزل",
          "الطلبيات مجمّعة في فضاء Shopify الخاص بك",
        ],
        audience: "العلامات والباعة الذين يوصلون إلى 58 ولاية.",
        link: "جرّب صفحة منتج ZNIQA",
        wa: "السلام عليكم Broda Dev، أريد متجر Shopify.",
        alt: "فضاء Shopify لمتجر المثال ZNIQA: قائمة الطلبيات المدفوعة عند الاستلام، في انتظار التأكيد أو المُرسَلة",
        proof: "مثال · ZNIQA علامة مُتخيَّلة، بيانات للعرض.",
      },
      publicite: {
        lead: "حملة واحدة، ثلاث منصات، وترى ما تجلبه لك.",
        receive: [
          "صور وفيديوهات مصنوعة لكل منصة",
          "الاستهداف حسب الولاية والسن والاهتمامات",
          "متابعة الطلبيات وتكلفة كل طلبية",
          "تقرير واضح، بالدينار",
        ],
        audience: "الباعة عبر الإنترنت والمحلات التي تريد زبائن أكثر.",
        link: "شاهد إعلانات المثال",
        wa: "السلام عليكم Broda Dev، أريد إطلاق حملة إعلانية مموّلة.",
        alt: "لوحة إعلانات للعرض: المصروف، الطلبيات في اليوم، الطلبيات حسب المنصة والحملات",
        proof: "مثال · أرقام للعرض، ZNIQA علامة مُتخيَّلة.",
      },
      logos: {
        lead: "شعار يُعرَف من بعيد، وكل ما يرافقه.",
        receive: [
          "الشعار وألوانه",
          "بطاقات الزيارة، اللافتة والتغليف",
          "الصور لمواقع التواصل",
          "ملفات جاهزة للمطبعة وللهاتف",
        ],
        audience: "المحلات الجديدة، والعلامات التي تريد أن تكبر.",
        link: "شاهد شعارات المثال",
        wa: "السلام عليكم Broda Dev، أريد شعاراً لتجارتي.",
        alt: "لافتة HANOUT 13 فوق باب البقالة",
        proof: "مثال · HANOUT 13 بقالة مُتخيَّلة.",
      },
    },
  },

  logiciels: {
    title: "البرامج.",
    lead: "ثلاثة برامج مكتوبة هنا، لتجّار هنا. مثبّتة على حواسيبك، بياناتك تبقى عندك، وتعمل حتى بدون إنترنت.",
    jumpLabel: "الانتقال إلى برنامج",
    screensLabel: "اختر شاشة",
    superpos: {
      name: "SuperPOS",
      what: "صندوق البقالات والمحلات.",
      sceneAlt: "SuperPOS على صندوق لمسي عند منضدة بقالة، بين طابعة التذاكر وقارئ الرمز الشريطي",
      sceneNote: "شاشة حقيقية من SuperPOS، أعيد إنجازها بدقة عالية، على صورة توضيحية.",
      features: [
        { t: "الرمز الشريطي", d: "امسح المنتج أو اكتب اسمه: يُضاف إلى التذكرة." },
        { t: "عدّة طلبات", d: "خانات طلبات في آن واحد، لخدمة الزبون التالي دون انتظار." },
        { t: "دفتر الديون", d: "ديون زبائنك، دفعاتهم وما تبقّى عليهم." },
        { t: "الإرجاع والاستبدال", d: "من سجلّ الطلبات." },
        { t: "بدون إنترنت", d: "لا حاجة لأي اتصال للبيع، وسريع حتى على حاسوب قديم." },
        { t: "الفرنسية والعربية", d: "الصندوق كله يتغيّر لغته." },
      ],
      screens: [
        { id: "caisse", label: "الصندوق", alt: "شاشة الصندوق في SuperPOS: التذكرة الجارية وقائمة المنتجات" },
        { id: "paiement", label: "الدفع", alt: "شاشة الدفع في SuperPOS: المبلغ المطلوب، المبلغ المستلم والباقي للزبون" },
        { id: "carnet", label: "دفتر الديون", alt: "دفتر الديون في SuperPOS: الزبائن وأرصدتهم، وتفاصيل زبون" },
        { id: "cafe", label: "مضبوط لمقهى", alt: "SuperPOS مضبوط لمقهى للعرض: المشروبات والحلويات" },
      ],
      cafeAlt: "SuperPOS مضبوط لمقهى، على صندوق لمسي عند المنضدة، أمام واجهة الحلويات",
      cafeNote: "الصندوق نفسه، مضبوط لـ LEMMA، مقهى مُتخيَّل. شاشة حقيقية أعيد إنجازها بدقة عالية، وصورة توضيحية.",
      proof: "شاشات حقيقية من SuperPOS، أعيد إنجازها بدقة عالية · بيانات للعرض.",
      cta: "اطلب عرضاً تجريبياً لـ SuperPOS",
      wa: "السلام عليكم Broda Dev، أريد عرضاً تجريبياً لبرنامج SuperPOS.",
    },
    gstock: {
      name: "G-Stock",
      what: "مخزون المطعم وتسييره.",
      where: "قيد الاستعمال في مطعم Lamssat، بتلمسان.",
      features: [
        { t: "المشتريات", d: "فواتير المورّدين، منتجاً بمنتج، وما تبقّى للدفع." },
        { t: "الإخراج نحو المطبخ", d: "ما يخرج من المخزون، يوماً بيوم." },
        { t: "المخزون والتنبيهات", d: "حالة المخزون، والمنتجات الواجب طلبها قبل نفادها." },
        { t: "جدول العمال", d: "من يعمل، ومتى، وكم ساعة." },
        { t: "الإحصائيات والحصيلة", d: "المداخيل، المشتريات، الأعباء ونتيجة الشهر." },
      ],
      screens: [
        { id: "tableau-de-bord", label: "لوحة التحكم", alt: "لوحة تحكم G-Stock: المشتريات، الإخراجات، حالة المخزون والمنتجات الواجب طلبها" },
        { id: "facture-achat", label: "فاتورة شراء", alt: "إدخال فاتورة مورّد في G-Stock: المنتجات، الكميات، الأسعار والباقي للدفع" },
        { id: "etat-du-stock", label: "حالة المخزون", alt: "حالة المخزون في G-Stock: المنتجات، الأصناف، الكميات، العتبات والقيمة" },
        { id: "alertes", label: "التنبيهات", alt: "تنبيهات المخزون في G-Stock: منتجات نفدت أو تحت العتبة، مع مورّدها" },
        { id: "planning-personnel", label: "الجدول", alt: "جدول العمال في G-Stock: أوقات الأسبوع وساعات كل عامل" },
        { id: "statistiques", label: "الإحصائيات", alt: "إحصائيات G-Stock: المداخيل، تكلفة الإخراجات، الهامش ونتيجة الشهر" },
        { id: "bilan", label: "الحصيلة", alt: "حصيلة الشهر في G-Stock: المداخيل، الهامش، الأعباء والنتيجة، يوماً بيوم" },
      ],
      proof: "شاشات حقيقية من مطعم Lamssat Tlemcen، الذي وافق على ذكر اسمه · أرقام للعرض.",
      cta: "اطلب عرضاً تجريبياً لـ G-Stock",
      wa: "السلام عليكم Broda Dev، أريد عرضاً تجريبياً لبرنامج G-Stock.",
    },
    budget: {
      name: "Budget Employé",
      what: "العمال، الحضور والأجور.",
      features: [
        { t: "الحضور", d: "حاضر، غائب أو في عطلة، يوماً بيوم." },
        { t: "الأجور", d: "باليوم أو بالأسبوع أو بالشهر، حسب كل عامل." },
        { t: "التسبيقات", d: "تُخصم تلقائياً من أجرة الشهر." },
        { t: "المصاريف والتقارير", d: "مصاريف الشهر وتطوّر كتلة الأجور." },
      ],
      screens: [
        { id: "dashboard", label: "لوحة التحكم", alt: "لوحة تحكم Budget Employé: العمال، الحاضرون، كتلة الأجور، أجور الشهر والتسبيقات" },
        { id: "presences", label: "الحضور", alt: "حضور الأسبوع في Budget Employé: حاضر، غائب أو في عطلة لكل عامل" },
        { id: "salaires", label: "أجور الشهر", alt: "أجور الشهر في Budget Employé: الأيام، المستحقّ، التسبيقات والمبلغ الواجب دفعه لكل عامل" },
        { id: "avances", label: "التسبيقات", alt: "التسبيقات والمكافآت والاقتطاعات في Budget Employé، حسب التاريخ والعامل" },
      ],
      proof: "شاشات عرض من Budget Employé.",
      cta: "اطلب عرضاً تجريبياً لـ Budget\u00a0Employé",
      wa: "السلام عليكم Broda Dev، أريد عرضاً تجريبياً لبرنامج Budget Employé.",
    },
    steps: {
      title: "من الطلب إلى أول عملية بيع.",
      items: [
        { t: "نشاطك", d: "ما تبيعه، وكيف تستلم الدفع." },
        { t: "الضبط", d: "المنتجات، الأصناف، المستخدمون والصلاحيات." },
        { t: "التثبيت", d: "على حواسيبك، مع أجهزتك، بعد التحقّق منها." },
        { t: "التدريب", d: "لك ولفريقك." },
      ],
    },
    faq: {
      title: "أسئلة متكرّرة.",
      items: [
        { q: "هل يعمل الصندوق بدون إنترنت؟", a: "نعم. SuperPOS يعمل بالكامل بدون اتصال." },
        { q: "هل يلزم حاسوب حديث؟", a: "لا. SuperPOS يبقى سريعاً حتى على حاسوب قديم." },
        { q: "وماذا عن المطعم أو المقهى؟", a: "نكيّف الصندوق حسب طريقة خدمتك. ولمخزون المطعم، هناك G-Stock." },
        { q: "هل طابعتي وقارئ الرمز الشريطي متوافقان؟", a: "أخبرنا بأجهزتك: نتحقّق منها قبل التثبيت." },
        { q: "هل التدريب مشمول؟", a: "نعم، التدريب جزء من التثبيت." },
        { q: "هل يمكنكم الانطلاق من برنامج موجود؟", a: "نعم. SuperPOS و G-Stock قاعدة تتكيّف مع مهنتك." },
      ],
    },
  },

  realisations: {
    title: "أعمالنا.",
    lead: "أمثلة ملموسة، مصنوعة كما لزبون حقيقي. العلامات مُتخيَّلة للعرض؛ أما G-Stock فيعمل فعلاً في مطعم Lamssat.",
    filtersLabel: "تصفية الأعمال",
    filters: { all: "الكل", demos: "نماذج مباشرة", logiciels: "البرامج", sites: "المواقع والمتاجر", publicite: "الإعلانات", logos: "الشعارات" },
    tags: { real: "حقيقي", example: "مثال", live: "نموذج مباشر" },
    open: "افتح النموذج",
    more: "اعرف المزيد",
    items: {
      zniqaProduct: {
        title: "ZNIQA، صفحة منتج",
        line: "متجر ملابس شارع: صور، مقاس، لون، واستمارة الطلب مع 58 ولاية.",
        alt: "صفحة منتج ZNIQA على الحاسوب: صور، السعر بالدينار واستمارة الطلب",
      },
      zniqaLanding: {
        title: "ZNIQA، صفحة هبوط",
        line: "صفحة لعرض واحد، مصنوعة للهاتف، وزر الطلب ظاهر دائماً.",
        alt: "صفحة هبوط للعرض لتيشيرت ZNIQA على الهاتف",
      },
      nouara: {
        title: "NOUARA، حقيبة يد",
        line: "حقيبة جلدية بثلاثة ألوان: صور، مقاسات، والطلب بالدفع عند الاستلام.",
        alt: "صفحة منتج NOUARA على الحاسوب: الحقيبة بلون الكاميل، سعرها واستمارة الطلب",
      },
      gstock: {
        title: "G-Stock عند Lamssat",
        line: "مخزون مطعم Lamssat بتلمسان: المشتريات، الإخراجات، التنبيهات والجدول. شاشة حقيقية، أرقام للعرض.",
        alt: "لوحة تحكم G-Stock في مطعم Lamssat Tlemcen",
      },
      superpos: {
        title: "SuperPOS عند المنضدة",
        line: "صندوق بقالة، مع طابعة التذاكر وقارئ الرمز الشريطي.",
        alt: "SuperPOS على صندوق لمسي عند منضدة بقالة",
      },
      superposCafe: {
        title: "SuperPOS لمقهى",
        line: "الصندوق نفسه، مضبوط بقائمة LEMMA، مقهى مُتخيَّل.",
        alt: "SuperPOS مضبوط لمقهى، عند المنضدة، أمام واجهة الحلويات",
      },
      hanoutSite: {
        title: "HANOUT 13، موقع تعريفي",
        line: "موقع بقالة الحي: التخفيضات، التوصيل، والطلب عبر واتساب.",
        alt: "موقع تعريفي للعرض لبقالة HANOUT 13",
      },
      shopify: {
        title: "ZNIQA على Shopify",
        line: "طلبيات المتجر مجمّعة في فضاء Shopify، في انتظار تأكيدها بالهاتف.",
        alt: "فضاء Shopify لمتجر المثال ZNIQA: قائمة الطلبيات",
      },
      campagne: {
        title: "حملة ZNIQA",
        line: "المنتج نفسه على فيسبوك وإنستغرام وتيك توك، وكل صورة بمقاس منصتها.",
        alt: "ثلاثة إعلانات للعرض لعلامة ZNIQA على فيسبوك وإنستغرام وتيك توك",
      },
      tableau: {
        title: "تقرير الحملة",
        line: "المصروف، الطلبيات وتكلفة كل طلبية، بالدينار. أرقام للعرض.",
        alt: "لوحة إعلانات للعرض: المصروف، الطلبيات في اليوم وحسب المنصة",
      },
      logos: {
        title: "أربعة شعارات",
        line: "مقهى، محل حقائب، بقالة وعلامة ملابس شارع، كلٌّ بألوانه.",
      },
      enseigne: {
        title: "HANOUT 13، اللافتة",
        line: "الشعار مرسوم فوق الباب، بالفرنسية والعربية.",
        alt: "لافتة HANOUT 13 فوق باب البقالة",
      },
    },
    note: "العلامات ZNIQA و NOUARA و HANOUT 13 و LEMMA مُتخيَّلة للعرض. صورها مولَّدة بـ Canva وأرقامها أمثلة.",
  },

  contact: {
    where: {
      title: "كيفان، تلمسان.",
      line: "من هنا تعمل Broda Dev، لتجّار الجزائر كلها.",
      hours: "الأسهل: رسالة واتساب، بسطرين عن مشروعك.",
    },
  },
};

export const PAGES = { fr, ar };
