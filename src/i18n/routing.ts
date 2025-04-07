import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ar'],
 
  // Used when no locale matches
  defaultLocale: 'ar',

 pathnames: {
   "/": { en: '/', ar: '/', },
   "/Product": { en: '/Product', ar: '/المنتجات', },
   "/Pages": { en: '/Pages', ar: '/الصفحات', },
   "/Integrations": { en: '/Integrations', ar: '/التكاملات', },
   "/Blog": { en: '/Blog', ar: '/أخر الاخبار', },
   "/Pricing": { en: '/Pricing', ar: '/التسعير', },
}, 

});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);