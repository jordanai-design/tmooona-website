import { Category } from "@/types";
import categoriesData from "@/data/categories.json";

const categories: Category[] = categoriesData;

export function getAllCategories(): Category[] {
  return categories.sort((a, b) => a.order - b.order);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
