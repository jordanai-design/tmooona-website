import Link from "next/link";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { getCategoryBySlug } from "@/lib/categories";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const category = getCategoryBySlug(product.categorySlug);
  const mainImage = product.images.find((img) => img.isMain) || product.images[0];

  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      {/* Image container */}
      <div className="relative aspect-square bg-brand-light rounded-md overflow-hidden mb-3">
        {/* Placeholder colored block */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-light to-brand-border">
          <span className="text-brand-gray text-lg font-heading">
            {product.name}
          </span>
        </div>

        {/* New badge */}
        {product.isNew && (
          <span className="absolute top-3 start-3 bg-brand-green text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        )}

        {/* Category tag */}
        {category && (
          <span className="absolute bottom-3 start-3 bg-white/80 text-brand-dark text-xs px-2 py-1 rounded">
            {category.name}
          </span>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Product info */}
      <h3 className="text-sm font-medium text-brand-dark group-hover:text-brand-green transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center gap-2 mt-1">
        {product.salePrice ? (
          <>
            <span className="text-sm font-bold text-brand-pink">
              {formatPrice(product.salePrice)}
            </span>
            <span className="text-xs text-brand-gray line-through">
              {formatPrice(product.price)}
            </span>
          </>
        ) : (
          <span className="text-sm text-brand-gray">
            {formatPrice(product.price)}
          </span>
        )}
      </div>
    </Link>
  );
}
