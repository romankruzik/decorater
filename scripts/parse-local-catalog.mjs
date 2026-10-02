/** Parsuje stažené HTML z reference/ (bez síťových požadavků) */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const refDir = join(__dirname, "../../");
const outPath = join(__dirname, "../src/data/catalog.json");
const BASE = "https://www.decorater.cz";

const sources = [
  { file: "source-home.html", defaultCategory: null },
  { file: "source-flower-box.html", defaultCategory: "flower-box" },
];

function decodeHtml(s) {
  return s.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
}

function parseProducts(html, fallbackCategory) {
  const products = [];
  const blocks = html.split('data-testid="productItem"');
  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    const idMatch = block.match(/data-micro-product-id="(\d+)"/);
    const pathMatch = block.match(/<a href="(\/[^"]+)" class="image"/);
    const imgMatch =
      block.match(/data-src="([^"]+)"/) || block.match(/data-micro-image="([^"]+)"/);
    const nameMatch = block.match(/data-testid="productCardName"[^>]*>\s*([^<]+)/);
    const priceMatch = block.match(/data-micro-price="([^"]+)"/);
    const flagMatch = block.match(/class="flag flag-new"/);
    const stockMatch = block.match(/Skladem/);

    if (!idMatch || !pathMatch || !nameMatch) continue;

    const path = pathMatch[1];
    let category = fallbackCategory;
    if (!category) {
      if (path.startsWith("/flower-box/")) category = "flower-box";
      else if (path.startsWith("/moss-bowl/")) category = "moss-bowl";
      else if (path.startsWith("/kvetinove-obrazy/")) category = "kvetinove-obrazy";
      else if (path.startsWith("/mechove-obrazy/")) category = "mechove-obrazy";
      else category = "other";
    }

    products.push({
      id: idMatch[1],
      path,
      shopUrl: `${BASE}${path}`,
      name: decodeHtml(nameMatch[1]),
      image: imgMatch ? imgMatch[1].replace(/&amp;/g, "&") : null,
      priceCzk: priceMatch ? Math.round(parseFloat(priceMatch[1])) : null,
      isNew: Boolean(flagMatch),
      inStock: Boolean(stockMatch),
      category,
    });
  }
  return products;
}

const byId = new Map();
for (const { file, defaultCategory } of sources) {
  const full = join(refDir, file);
  if (!existsSync(full)) {
    console.warn(`Přeskočeno (chybí soubor): ${full}`);
    continue;
  }
  const html = readFileSync(full, "utf8");
  for (const p of parseProducts(html, defaultCategory)) {
    byId.set(p.id, p);
  }
}

const catalog = {
  syncedAt: new Date().toISOString(),
  shopBaseUrl: BASE,
  categories: [
    {
      slug: "flower-box",
      path: "/flower-box/",
      title: "Flower boxy",
      description:
        "Ručně vyráběné flower boxy ze stabilizovaných a sušených květin. Originální dekorace a dárky, které vydrží krásné několik let bez zalévání.",
    },
    {
      slug: "kvetinove-obrazy",
      path: "/kvetinove-obrazy/",
      title: "Květinové obrazy",
      description: "Květinové obrazy ze stabilizovaných květin pro interiér i jako dárek.",
    },
    {
      slug: "mechove-obrazy",
      path: "/mechove-obrazy/",
      title: "Mechové obrazy",
      description: "Ručně vyráběné obrazy ze stabilizovaného mechu a přírodních materiálů.",
    },
    {
      slug: "moss-bowl",
      path: "/moss-bowl/",
      title: "Moss Bowl",
      description: "Originální dekorace Moss Bowl se stabilizovaným mechem.",
    },
  ],
  products: [...byId.values()],
  homepage: {
    heroSlides: [
      {
        href: `${BASE}/flower-box/`,
        src: "https://cdn.myshoptet.com/usr/www.decorater.cz/user/banners/1_(2)-1.png?6a42736c",
        alt: "Ručně vyráběný flower box ze stabilizovaných květin Decorater",
      },
      {
        href: `${BASE}/moss-bowl/`,
        src: "https://cdn.myshoptet.com/usr/www.decorater.cz/user/banners/11-1.png?6a4273a7",
        alt: "Originální dekorace Moss Bowl se stabilizovaným mechem od Decorater",
      },
      {
        href: `${BASE}/mechove-obrazy/`,
        src: "https://cdn.myshoptet.com/usr/www.decorater.cz/user/banners/bez_n__zvu_(1536_x_1024_px)_(1200_x_800_px)_(1).png?6a429540",
        alt: "Ručně vyráběný obraz ze stabilizovaného mechu a rostlin od Decorater",
      },
    ],
    promoBanner: {
      src: "https://cdn.myshoptet.com/usr/www.decorater.cz/user/banners/banner-doprava-orezany.png?6a578702",
      alt: "Informace o dopravě Decorater",
    },
    newCollectionProductIds: ["194", "253", "244", "247"],
  },
};

writeFileSync(outPath, JSON.stringify(catalog, null, 2), "utf8");
console.log(`catalog.json: ${catalog.products.length} produktů`);
