import { Product } from "@/types";
import productsData from "@/data/products.json";

const products: Product[] = productsData;

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categories.includes(categorySlug));
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );
}

export type SortKey = "default" | "newest" | "price-asc" | "price-desc";

export function sortProducts(items: Product[], sortKey: SortKey): Product[] {
  const sorted = [...items];
  switch (sortKey) {
    case "newest":
      return sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    default:
      return sorted;
  }
}
