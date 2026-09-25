import { notFound } from "next/navigation";

// Any address under a language that matches no page: hand it to not-found.tsx,
// so the 404 keeps the site's bar, footer and language.
export default function CatchAll() {
  notFound();
}
