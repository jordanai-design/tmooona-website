"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Category } from "@/types";

interface CategoryFilterProps {
  categories: Category[];
  currentCategory: string | null;
}

export default function CategoryFilter({
  categories,
  currentCategory,
}: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleCategoryClick(slug: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) {
      params.set("category", slug);
    } else {
      params.delete("category");
    }
    router.push(`/shop?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => handleCategoryClick(null)}
        className={`px-4 py-2 rounded-full text-sm transition-colors ${
          !currentCategory
            ? "bg-brand-dark text-white"
            : "bg-brand-light text-brand-dark hover:bg-brand-border"
        }`}
      >
        הכל
      </button>
      {categories.map((category) => (
        <button
          key={category.slug}
          onClick={() => handleCategoryClick(category.slug)}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            currentCategory === category.slug
              ? "bg-brand-dark text-white"
              : "bg-brand-light text-brand-dark hover:bg-brand-border"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
