import HeroSection from "@/components/home/HeroSection";
import CategoryGrid from "@/components/home/CategoryGrid";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import ProductGrid from "@/components/shop/ProductGrid";
import { getAllProducts } from "@/lib/products";

export default function Home() {
  const featuredProducts = getAllProducts()
    .filter((p) => p.isFeatured || p.isNew)
    .slice(0, 6);

  return (
    <>
      <HeroSection />

      <CategoryGrid />

      {/* Featured products */}
      {featuredProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-heading font-bold text-brand-dark text-center mb-10">
            מוצרים חדשים
          </h2>
          <ProductGrid products={featuredProducts} />
        </section>
      )}

      <NewsletterSignup />
    </>
  );
}
