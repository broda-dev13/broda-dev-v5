import Link from "next/link";
import { enterLocale } from "@/i18n/locale";

// Temporary index while the owner chooses a direction (step 2 of the brief).
export default async function Page({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  enterLocale(locale);
  const links = [
    ["pistes/affiche", "1 · Affiche (agence audacieuse)"],
    ["pistes/nuit", "2 · Nuit (tech premium sombre)"],
    ["pistes/zellige", "3 · Zellige (touche de Tlemcen)"],
    ["demo/zniqa", "Démo · page produit ZNIQA"],
    ["maquettes/superpos", "Maquette · caisse SuperPOS"],
  ];
  return (
    <main style={{ fontFamily: "system-ui", padding: 40, lineHeight: 2 }}>
      <h1 style={{ fontSize: 20 }}>Broda Dev v5 · pistes</h1>
      <ul>
        {links.map(([href, label]) => (
          <li key={href}>
            <Link href={`/${locale}/${href}`}>{label}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
