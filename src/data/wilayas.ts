// Les 58 wilayas (code, nom français, nom arabe, zone). Les zones et tarifs ne
// servent qu'aux boutiques exemples : tarifs d'exemple, affichés comme tels.
export const WILAYAS: [number, string, string, string][] = [
  [1, 'Adrar', 'أدرار', 'D'], [2, 'Chlef', 'الشلف', 'B'], [3, 'Laghouat', 'الأغواط', 'C'], [4, 'Oum El Bouaghi', 'أم البواقي', 'B'],
  [5, 'Batna', 'باتنة', 'B'], [6, 'Béjaïa', 'بجاية', 'B'], [7, 'Biskra', 'بسكرة', 'C'], [8, 'Béchar', 'بشار', 'D'], [9, 'Blida', 'البليدة', 'A'],
  [10, 'Bouira', 'البويرة', 'B'], [11, 'Tamanrasset', 'تمنراست', 'E'], [12, 'Tébessa', 'تبسة', 'B'], [13, 'Tlemcen', 'تلمسان', 'A'],
  [14, 'Tiaret', 'تيارت', 'B'], [15, 'Tizi Ouzou', 'تيزي وزو', 'B'], [16, 'Alger', 'الجزائر', 'A'], [17, 'Djelfa', 'الجلفة', 'C'],
  [18, 'Jijel', 'جيجل', 'B'], [19, 'Sétif', 'سطيف', 'B'], [20, 'Saïda', 'سعيدة', 'B'], [21, 'Skikda', 'سكيكدة', 'B'],
  [22, 'Sidi Bel Abbès', 'سيدي بلعباس', 'B'], [23, 'Annaba', 'عنابة', 'B'], [24, 'Guelma', 'قالمة', 'B'], [25, 'Constantine', 'قسنطينة', 'B'],
  [26, 'Médéa', 'المدية', 'B'], [27, 'Mostaganem', 'مستغانم', 'B'], [28, "M'Sila", 'المسيلة', 'B'], [29, 'Mascara', 'معسكر', 'B'],
  [30, 'Ouargla', 'ورقلة', 'D'], [31, 'Oran', 'وهران', 'B'], [32, 'El Bayadh', 'البيض', 'C'], [33, 'Illizi', 'إليزي', 'E'],
  [34, 'Bordj Bou Arréridj', 'برج بوعريريج', 'B'], [35, 'Boumerdès', 'بومرداس', 'A'], [36, 'El Tarf', 'الطارف', 'B'], [37, 'Tindouf', 'تندوف', 'D'],
  [38, 'Tissemsilt', 'تيسمسيلت', 'B'], [39, 'El Oued', 'الوادي', 'C'], [40, 'Khenchela', 'خنشلة', 'B'], [41, 'Souk Ahras', 'سوق أهراس', 'B'],
  [42, 'Tipaza', 'تيبازة', 'A'], [43, 'Mila', 'ميلة', 'B'], [44, 'Aïn Defla', 'عين الدفلى', 'B'], [45, 'Naâma', 'النعامة', 'C'],
  [46, 'Aïn Témouchent', 'عين تموشنت', 'B'], [47, 'Ghardaïa', 'غرداية', 'C'], [48, 'Relizane', 'غليزان', 'B'], [49, 'Timimoun', 'تيميمون', 'D'],
  [50, 'Bordj Badji Mokhtar', 'برج باجي مختار', 'E'], [51, 'Ouled Djellal', 'أولاد جلال', 'C'], [52, 'Béni Abbès', 'بني عباس', 'D'],
  [53, 'In Salah', 'عين صالح', 'D'], [54, 'In Guezzam', 'عين قزام', 'E'], [55, 'Touggourt', 'تقرت', 'C'], [56, 'Djanet', 'جانت', 'E'],
  [57, "El M'Ghair", 'المغير', 'C'], [58, 'El Meniaa', 'المنيعة', 'D'],
];

// Tarifs d'exemple, en DA : [bureau / stop-desk, domicile]
export const TARIFS: Record<string, [number, number]> = { A: [400, 700], B: [450, 750], C: [600, 900], D: [800, 1200], E: [1000, 1500] };

export const TARIFS_PAR_WILAYA = Object.fromEntries(WILAYAS.map(([c, , , z]) => [String(c), TARIFS[z]]));
