import Link from "next/link";
import { getAllCategories } from "@/lib/categories";

export default function CategoryGrid() {
  const categories = getAllCategories().filter((c) => c.slug !== "new-in");

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-heading font-bold text-brand-dark text-center mb-10">
        הקטגוריות שלנו
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/shop?category=${category.slug}`}
            className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-brand-light to-brand-border"
          >
            {/* Placeholder background */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Category name */}
            <div className="absolute inset-0 flex items-end p-4">
              <h3 className="text-white font-medium text-sm sm:text-base group-hover:text-brand-green transition-colors">
                {category.name}
              </h3>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/10 transition-colors duration-300" />
          </Link>
        ))}
      </div>
    </section>
  );
}
