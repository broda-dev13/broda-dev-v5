// Shop data for the rebuilt SuperPOS screens and the printed tickets beside
// them. All figures are sample data.

// Product names and categories are shop data, entered in French, as on the real screens.
const SUPERETTE_CATEGORIES = [
  "Produits laitiers",
  "Épicerie",
  "Boissons",
  "Confiserie & biscuits",
  "Fruits & légumes",
  "Boulangerie",
  "Hygiène & entretien",
];

export type Line = { name: string; qty: string; unit: string; total: string };

const SUPERETTE_TICKET: Line[] = [
  { name: "Semoule moyenne 1kg", qty: "2", unit: "110,00", total: "220,00" },
  { name: "Tomates fraîches", qty: "0,75 kg", unit: "120,00", total: "90,00" },
  { name: "Pois chiches 1kg", qty: "1", unit: "350,00", total: "350,00" },
  { name: "زيت زيتون 1L", qty: "1", unit: "1 200,00", total: "1 200,00" },
  { name: "Lben 1L", qty: "2", unit: "90,00", total: "180,00" },
  { name: "Dattes Deglet Nour 500g", qty: "1", unit: "450,00", total: "450,00" },
  { name: "Thé vert 250g", qty: "1", unit: "280,00", total: "280,00" },
  { name: "Bonbons assortis (vrac)", qty: "0,5 kg", unit: "600,00", total: "300,00" },
];

const SUPERETTE_PRODUCTS: [string, string, boolean?][] = [
  ["Beurre doux 200g", "390,00", true],
  ["Biscuits au chocolat 100g", "50,00"],
  ["Boisson gazeuse 2L", "150,00"],
  ["Bonbons assortis (vrac)", "600,00"],
  ["Café moulu 250g", "380,00"],
  ["Chocolat au lait 100g", "180,00"],
  ["Concentré de tomate 400g", "150,00"],
  ["Couches bébé taille 4 x44", "1 450,00"],
  ["Couscous fin 1kg", "180,00"],
  ["Dattes Deglet Nour 500g", "450,00"],
  ["Dentifrice 75ml", "220,00"],
  ["Eau de javel 1L", "90,00"],
  ["Eau minérale 0,5L", "25,00"],
  ["Eau minérale 1,5L", "45,00"],
  ["Farine de blé 1kg", "90,00"],
  ["Fromage fondu 8 portions", "220,00"],
  ["Harissa 135g", "120,00"],
  ["Huile de table 1L", "140,00"],
  ["Lben 1L", "90,00"],
  ["Lentilles 1kg", "260,00"],
  ["Pois chiches 1kg", "350,00"],
  ["Riz long 1kg", "170,00"],
  ["Sardines à l'huile 125g", "110,00"],
  ["Savon de Marseille 300g", "95,00"],
  ["Semoule moyenne 1kg", "110,00"],
  ["Shampoing 400ml", "380,00"],
  ["Sucre blanc 1kg", "100,00"],
  ["Thé vert 250g", "280,00"],
  ["Vinaigre 1L", "70,00"],
  ["Yaourt nature x4", "120,00"],
];

// The same checkout configured for a café (LEMMA, an invented brand): only the shop data changes.
const CAFE_CATEGORIES = ["Cafés", "Thés", "Boissons fraîches", "Viennoiseries", "Pâtisseries", "Salé"];

const CAFE_TICKET: Line[] = [
  { name: "Café au lait", qty: "2", unit: "80,00", total: "160,00" },
  { name: "Cappuccino", qty: "1", unit: "150,00", total: "150,00" },
  { name: "Thé à la menthe", qty: "2", unit: "60,00", total: "120,00" },
  { name: "Msemen au miel", qty: "2", unit: "70,00", total: "140,00" },
  { name: "Croissant", qty: "2", unit: "60,00", total: "120,00" },
  { name: "Jus d'orange pressé", qty: "1", unit: "200,00", total: "200,00" },
  { name: "Mille-feuille", qty: "1", unit: "120,00", total: "120,00" },
];

const CAFE_PRODUCTS: [string, string, boolean?][] = [
  ["Baghrir", "40,00"],
  ["Boisson gazeuse 33cl", "80,00"],
  ["Café au lait", "80,00"],
  ["Café crème", "100,00"],
  ["Café serré", "60,00"],
  ["Cappuccino", "150,00"],
  ["Chocolat chaud", "150,00"],
  ["Citronnade maison", "150,00"],
  ["Crêpe au chocolat", "200,00"],
  ["Croissant", "60,00"],
  ["Eau minérale 0,5L", "40,00"],
  ["Espresso double", "100,00"],
  ["Gâteau au chocolat (part)", "180,00"],
  ["Jus d'orange pressé", "200,00"],
  ["Karantika", "50,00"],
  ["Limonade 1L", "120,00"],
  ["Makrout", "40,00"],
  ["Mhajeb", "80,00"],
  ["Mille-feuille", "120,00"],
  ["Msemen", "50,00"],
  ["Msemen au miel", "70,00"],
  ["Nescafé", "70,00"],
  ["Pain au chocolat", "80,00"],
  ["Pizza (part)", "100,00"],
  ["Qalb el louz", "60,00"],
  ["Sandwich thon", "250,00"],
  ["Smoothie banane", "250,00"],
  ["Tarte aux fraises", "150,00", true],
  ["Thé à la menthe", "60,00"],
  ["Thé noir", "50,00"],
];

export type Shop = "superette" | "cafe";

type ShopData = {
  categories: string[];
  ticket: Line[];
  products: [string, string, boolean?][];
  tax: string;
  total: string;
  /** The cash handed over and the change given back, on the payment screen and the ticket. */
  cash: string;
  change: string;
};

export const SHOPS: Record<Shop, ShopData> = {
  superette: { categories: SUPERETTE_CATEGORIES, ticket: SUPERETTE_TICKET, products: SUPERETTE_PRODUCTS, tax: "312,40", total: "3 070,00", cash: "5 000,00", change: "1 930,00" },
  cafe: { categories: CAFE_CATEGORIES, ticket: CAFE_TICKET, products: CAFE_PRODUCTS, tax: "161,26", total: "1 010,00", cash: "2 000,00", change: "990,00" },
};
