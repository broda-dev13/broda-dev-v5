// The questions visitors ask before writing, shown before the contact on the
// home and on /contact. Every answer is the owner's to confirm: `confirmed`
// stays false until he approves its wording, and an unconfirmed answer is
// never published (production shows confirmed items only; development shows
// the drafts, marked "À CONFIRMER", for review). French is the reference.

const fr = {
  title: "Questions fréquentes",
  draft: "À CONFIRMER",
  items: [
    {
      q: "Comment se passe le paiement ?",
      a: "En espèces, par virement CCP ou par BaridiMob.",
      confirmed: false,
    },
    {
      q: "Combien de temps prend chaque service ?",
      a: "Cela dépend du projet : vous recevez un délai précis avec le devis, avant de vous engager.",
      confirmed: false,
    },
    {
      q: "À qui appartiennent le site et le nom de domaine ?",
      a: "À vous. Le nom de domaine est enregistré à votre nom, et le site vous appartient.",
      confirmed: false,
    },
    {
      q: "Que se passe-t-il après la livraison ?",
      a: "On vous montre comment tout utiliser, et on reste joignable sur WhatsApp. Avec l'hébergement & maintenance, votre site reste en ligne et à jour chaque mois.",
      confirmed: false,
    },
    {
      q: "Le logiciel de caisse marche-t-il sans internet ?",
      a: "Oui. POS-MINI MARKET fonctionne entièrement hors ligne, et reste rapide même sur un vieux PC.",
      confirmed: false,
    },
    {
      q: "La formation est-elle incluse ?",
      a: "Oui. La formation de votre équipe est incluse avec les logiciels et les caisses.",
      confirmed: false,
    },
    {
      q: "Puis-je voir une démo avant de décider ?",
      a: "Oui. Les boutiques d'exemple ZNIQA et NOUARA sont en ligne sur ce site, et POS-MINI MARKET s'essaie gratuitement pendant 30 jours.",
      confirmed: false,
    },
    {
      q: "Travaillez-vous en dehors de Tlemcen ?",
      a: "Oui, pour toute l'Algérie : sites, boutiques, publicité et logos se font à distance. Pour l'installation d'une caisse hors de Tlemcen, écrivez-nous.",
      confirmed: false,
    },
  ],
};

const ar: typeof fr = {
  title: "أسئلة شائعة",
  draft: "للتأكيد",
  items: [
    {
      q: "كيف يتم الدفع؟",
      a: "نقداً، أو بتحويل CCP، أو عبر BaridiMob.",
      confirmed: false,
    },
    {
      q: "كم تستغرق كل خدمة؟",
      a: "حسب المشروع: تستلم مدة دقيقة مع عرض السعر، قبل أن تلتزم.",
      confirmed: false,
    },
    {
      q: "لمن يعود الموقع واسم النطاق؟",
      a: "لك أنت. اسم النطاق مسجّل باسمك، والموقع ملكك.",
      confirmed: false,
    },
    {
      q: "ماذا يحدث بعد التسليم؟",
      a: "نشرح لك طريقة استعمال كل شيء، ونبقى متاحين على واتساب. ومع الاستضافة والصيانة يبقى موقعك شغّالاً ومحدّثاً كل شهر.",
      confirmed: false,
    },
    {
      q: "هل يعمل برنامج الصندوق بدون إنترنت؟",
      a: "نعم. POS-MINI MARKET يعمل بالكامل بدون اتصال، ويبقى سريعاً حتى على حاسوب قديم.",
      confirmed: false,
    },
    {
      q: "هل التكوين مشمول؟",
      a: "نعم. تكوين فريقك مشمول مع البرامج وأنظمة الدفع.",
      confirmed: false,
    },
    {
      q: "هل يمكنني رؤية عرض تجريبي قبل أن أقرّر؟",
      a: "نعم. متجرا المثال ZNIQA و NOUARA متاحان على هذا الموقع، و POS-MINI MARKET تجرّبه مجاناً لمدة 30 يوماً.",
      confirmed: false,
    },
    {
      q: "هل تعملون خارج تلمسان؟",
      a: "نعم، في كل الجزائر: المواقع والمتاجر والإعلانات والشعارات تُنجز عن بُعد. ولتركيب صندوق خارج تلمسان، راسلنا.",
      confirmed: false,
    },
  ],
};

export const FAQ = { fr, ar };
