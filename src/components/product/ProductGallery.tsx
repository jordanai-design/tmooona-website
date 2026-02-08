"use client";

import { useState } from "react";
import { ProductImage } from "@/types";

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentImage = images[selectedIndex];

  return (
    <div>
      {/* Main image */}
      <div className="aspect-square bg-brand-light rounded-lg overflow-hidden mb-4">
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-light to-brand-border">
          <span className="text-brand-gray text-2xl font-heading">
            {productName}
          </span>
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                index === selectedIndex
                  ? "border-brand-green"
                  : "border-brand-border hover:border-brand-gray"
              }`}
            >
              <div className="w-full h-full bg-gradient-to-br from-brand-light to-brand-border flex items-center justify-center">
                <span className="text-brand-gray text-[8px]">
                  {index + 1}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
