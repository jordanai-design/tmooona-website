import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/lib/products";
import { getCategoryBySlug } from "@/lib/categories";
import { formatPrice } from "@/lib/utils";
import ProductGallery from "@/components/product/ProductGallery";
import WhatsAppButton from "@/components/product/WhatsAppButton";
import ProductTabs from "@/components/product/ProductTabs";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductCard from "@/components/shop/ProductCard";

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "מוצר לא נמצא" };

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | תמונה`,
      description: product.description,
      locale: "he_IL",
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.categorySlug);
  const allProducts = getAllProducts();
  const relatedProducts = product.relatedSlugs
    ? allProducts.filter((p) => product.relatedSlugs!.includes(p.slug))
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: "בית", href: "/" },
          { label: "חנות", href: "/shop" },
          ...(category
            ? [
                {
                  label: category.name,
                  href: `/shop?category=${category.slug}`,
                },
              ]
            : []),
          { label: product.name },
        ]}
      />

      {/* Product layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image gallery */}
        <ProductGallery images={product.images} productName={product.name} />

        {/* Product info */}
        <div>
          <h1 className="text-3xl font-heading font-bold text-brand-dark mb-2">
            {product.name}
          </h1>

          {category && (
            <p className="text-sm text-brand-sage mb-4">{category.name}</p>
          )}

          {/* Price */}
          <div className="flex items-center gap-3 mb-6">
            {product.salePrice ? (
              <>
                <span className="text-2xl font-bold text-brand-pink">
                  {formatPrice(product.salePrice)}
                </span>
                <span className="text-lg text-brand-gray line-through">
                  {formatPrice(product.price)}
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold text-brand-dark">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-brand-dark leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Size options */}
          {product.sizeOptions && product.sizeOptions.length > 0 && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-brand-dark mb-2">
                גודל
              </label>
              <select className="w-full px-4 py-3 border border-brand-border rounded-lg text-brand-dark bg-white">
                {product.sizeOptions.map((option) => (
                  <option key={option.label} value={option.label}>
                    {option.label} - {formatPrice(option.price)}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* WhatsApp button */}
          <div className="mb-8">
            <WhatsAppButton productName={product.name} />
          </div>

          {/* Tabs */}
          <ProductTabs
            description={product.description}
            dimensions={product.dimensions}
            materials={product.materials}
          />
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-heading font-bold text-brand-dark mb-6">
            מוצרים דומים
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.slice(0, 4).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
