import { withBase } from "./paths";

export const site = {
  name: "Decorater",
  tagline: "Ručně vyráběné květinové a mechové dekorace",
  description:
    "Ručně vyráběné flower boxy, květinové a mechové obrazy i Moss Bowl ze stabilizovaných květin a mechu. Originální dekorace a dárky bez zalévání.",
  url: "https://www.decorater.cz",
  logo: "https://cdn.myshoptet.com/usr/www.decorater.cz/user/logos/logo-decorater-transparent-1000.png",
  contact: {
    name: "Decorater – zákaznická péče",
    email: "info@decorater.cz",
    phone: "+420 723 963 777",
    phoneHref: "tel:+420723963777",
    facebook: "https://www.facebook.com/decorater.cz",
    instagram: "https://www.instagram.com/decorater.cz/",
  },
  paymentsImage:
    "https://cdn.myshoptet.com/prj/dist/master/cms/img/common/payment_logos/payments.png",
} as const;

export const mainNav = [
  { href: withBase("flower-box/"), label: "Flower boxy", slug: "flower-box" },
  { href: withBase("kvetinove-obrazy/"), label: "Květinové obrazy", slug: "kvetinove-obrazy" },
  { href: withBase("mechove-obrazy/"), label: "Mechové obrazy", slug: "mechove-obrazy" },
  { href: withBase("moss-bowl/"), label: "Moss Bowl", slug: "moss-bowl" },
  { href: withBase("o-nas/"), label: "O nás" },
  { href: withBase("kontakty/"), label: "Kontakty" },
  { href: withBase("nase-novinky/"), label: "Články" },
] as const;

export const footerInfoLinks = [
  { href: withBase("obchodni-podminky/"), label: "Obchodní podmínky" },
  {
    href: withBase("podminky-ochrany-osobnich-udaju/"),
    label: "Podmínky ochrany osobních údajů",
  },
  { href: withBase("doprava-a-platba/"), label: "Doprava a platba" },
  {
    href: withBase("reklamace-a-vraceni-zbozi/"),
    label: "Reklamace a vrácení zboží",
  },
  { href: withBase("moje-objednavka/"), label: "Moje objednávka" },
] as const;

export function shopUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
