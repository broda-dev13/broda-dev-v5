import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Redirects "/" to the visitor's language (fr by default) and keeps the locale prefix.
export default createMiddleware(routing);

export const config = {
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
