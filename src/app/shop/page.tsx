import { Suspense } from "react";
import { Metadata } from "next";
import { getAllProducts, getProductsByCategory, sortProducts, SortKey } from "@/lib/products";
import { getAllCategories } from "@/lib/categories";
import ProductGrid from "@/components/shop/ProductGrid";
import CategoryFilter from "@/components/shop/CategoryFilter";
import SortDropdown from "@/components/shop/SortDropdown";

export const metadata: Metadata = {
  title: "חנות",
  description: "גלו את מגוון התמונות, פסלי הקיר, השעונים והאמנות המודרנית שלנו",
};

interface ShopPageProps {
  searchParams: Promise<{ category?: string; sort?: string }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const categories = getAllCategories();
  const currentCategory = params.category || null;
  const currentSort = (params.sort as SortKey) || "default";

  let products = currentCategory
    ? getProductsByCategory(currentCategory)
    : getAllProducts();

  products = sortProducts(products, currentSort);

  const categoryName = currentCategory
    ? categories.find((c) => c.slug === currentCategory)?.name
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-2xl font-heading font-bold text-brand-dark">
          {categoryName || "כל המוצרים"}
        </h1>
        <p className="text-brand-gray mt-1">
          {products.length} מוצרים
        </p>
      </div>

      {/* Filters and sort */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <Suspense fallback={null}>
          <CategoryFilter
            categories={categories}
            currentCategory={currentCategory}
          />
        </Suspense>
        <Suspense fallback={null}>
          <SortDropdown />
        </Suspense>
      </div>

      {/* Product grid */}
      <ProductGrid products={products} />
    </div>
  );
}
