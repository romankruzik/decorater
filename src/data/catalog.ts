import raw from "./catalog.json";

export type Product = {
  id: string;
  path: string;
  shopUrl: string;
  name: string;
  image: string | null;
  priceCzk: number | null;
  isNew: boolean;
  inStock: boolean;
  category: string;
};

export type Category = {
  slug: string;
  path: string;
  title: string;
  description: string;
};

export type HeroFeature = {
  icon: "leaf" | "hands" | "home" | "gift";
  label: string;
};

export type HeroSlide = {
  href: string;
  src: string;
  alt: string;
  kicker?: string;
  title?: string;
  scriptTitle?: string;
  text: string;
  features: HeroFeature[];
  cta: string;
};

export type Catalog = {
  syncedAt: string;
  shopBaseUrl: string;
  categories: Category[];
  products: Product[];
  homepage: {
    heroSlides: HeroSlide[];
    promoBanner: { src: string; alt: string };
    newCollectionProductIds: string[];
  };
};

export const catalog = raw as Catalog;

export function getCategory(slug: string): Category | undefined {
  return catalog.categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return catalog.products.filter((p) => p.category === slug);
}

export function getProductByPath(path: string): Product | undefined {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return catalog.products.find(
    (p) => p.path === normalized || p.path === path.replace(/\/$/, "") + "/",
  );
}

export function formatPrice(czk: number | null): string {
  if (czk == null) return "";
  return `${czk.toLocaleString("cs-CZ")} Kč`;
}

export function normalizeSearch(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function searchCatalog(query: string, limit = 24) {
  const needle = normalizeSearch(query);
  if (!needle) {
    return { products: [] as Product[], categories: [] as Category[] };
  }

  const categories = catalog.categories.filter(
    (category) =>
      normalizeSearch(category.title).includes(needle) ||
      normalizeSearch(category.slug).includes(needle),
  );

  const products = catalog.products
    .filter((product) => {
      const haystack = `${product.name} ${product.category}`;
      return normalizeSearch(haystack).includes(needle);
    })
    .slice(0, limit);

  return { products, categories };
}

export function getHomeNewCollection(): Product[] {
  return catalog.homepage.newCollectionProductIds
    .map((id) => catalog.products.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));
}
