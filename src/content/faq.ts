// The questions visitors ask before writing, shown before the contact on the
// home and on /contact. Every answer is the owner's to confirm: `confirmed`
// stays false until he approves its wording, and an unconfirmed answer is
// never published (production shows confirmed items only; development shows
// the drafts, marked "À CONFIRMER", for review). French is the reference.
// The eight answers below were confirmed as written by the owner on
// 2026-09-26; a new or reworded answer starts again at `confirmed: false`.

const fr = {
  title: "Questions fréquentes",
  draft: "À CONFIRMER",
  items: [
    {
      q: "Comment se passe le paiement ?",
      a: "En espèces, par virement CCP ou par BaridiMob.",
      confirmed: true,
    },
    {
      q: "Combien de temps prend chaque service ?",
      a: "Cela dépend du projet : vous recevez un délai précis avec le devis, avant de vous engager.",
      confirmed: true,
    },
    {
      q: "À qui appartiennent le site et le nom de domaine ?",
      a: "À vous. Le nom de domaine est enregistré à votre nom, et le site vous appartient.",
      confirmed: true,
    },
    {
      q: "Que se passe-t-il après la livraison ?",
      a: "On vous montre comment tout utiliser, et on reste joignable sur WhatsApp. Avec l'hébergement & maintenance, votre site reste en ligne et à jour chaque mois.",
      confirmed: true,
    },
    {
      q: "Le logiciel de caisse marche-t-il sans internet ?",
      a: "Oui. POS-MINI MARKET fonctionne entièrement hors ligne, et reste rapide même sur un vieux PC.",
      confirmed: true,
    },
    {
      q: "La formation est-elle incluse ?",
      a: "Oui. La formation de votre équipe est incluse avec les logiciels et les caisses.",
      confirmed: true,
    },
    {
      q: "Puis-je voir une démo avant de décider ?",
      a: "Oui. Les boutiques d'exemple ZNIQA et NOUARA sont en ligne sur ce site, et POS-MINI MARKET s'essaie gratuitement pendant 30 jours.",
      confirmed: true,
    },
    {
      q: "Travaillez-vous en dehors de Tlemcen ?",
      a: "Oui, pour toute l'Algérie : sites, boutiques, publicité et logos se font à distance. Pour l'installation d'une caisse hors de Tlemcen, écrivez-nous.",
      confirmed: true,
    },
  ],
};

// The Arabic says the same thing as the French, in the words used here
// (rewritten 2026-09-27 at the owner's request; the facts he confirmed on
// 2026-09-26 are unchanged).
const ar: typeof fr = {
  title: "أسئلة شائعة",
  draft: "للتأكيد",
  items: [
    {
      q: "كيف أدفع؟",
      a: "نقداً، أو بتحويل إلى حساب CCP، أو عبر BaridiMob.",
      confirmed: true,
    },
    {
      q: "كم يستغرق العمل؟",
      a: "حسب المشروع: نعطيك المدة بالضبط مع عرض السعر، قبل أن تلتزم بأي شيء.",
      confirmed: true,
    },
    {
      q: "لمن يكون الموقع واسمه (الدومين)؟",
      a: "لك أنت. اسم الموقع يُسجَّل باسمك، والموقع ملكك.",
      confirmed: true,
    },
    {
      q: "وماذا بعد التسليم؟",
      a: "نشرح لك كيف تستعمل كل شيء، ونبقى معك على واتساب. ومع خدمة الاستضافة والصيانة، يبقى موقعك يعمل ويُحدَّث كل شهر.",
      confirmed: true,
    },
    {
      q: "هل يعمل برنامج صندوق الدفع بدون إنترنت؟",
      a: "نعم. POS-MINI MARKET يعمل كاملاً بدون اتصال، ويبقى سريعاً حتى على حاسوب قديم.",
      confirmed: true,
    },
    {
      q: "هل التكوين مشمول؟",
      a: "نعم. تكوين فريقك مشمول مع البرامج وأجهزة صندوق الدفع.",
      confirmed: true,
    },
    {
      q: "هل يمكنني أن أجرّب قبل أن أقرّر؟",
      a: "نعم. متجرا المثال ZNIQA و NOUARA تجرّبهما مباشرة على هذا الموقع، و POS-MINI MARKET تجرّبه مجاناً لمدة 30 يوماً.",
      confirmed: true,
    },
    {
      q: "هل تعملون خارج تلمسان؟",
      a: "نعم، مع كل الجزائر: المواقع والمتاجر والإشهار والشعارات ننجزها عن بُعد. ولتركيب صندوق دفع خارج تلمسان، راسلنا.",
      confirmed: true,
    },
  ],
};

export const FAQ = { fr, ar };
