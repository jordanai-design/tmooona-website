import { Metadata } from "next";

export const metadata: Metadata = {
  title: "הבתים שלכם",
  description: "גלריית תמונות מבתים של לקוחותינו - ראו איך המוצרים שלנו נראים בבתים אמיתיים",
};

const galleryImages = [
  { id: 1, caption: "סלון מעוצב עם קיר גלריה" },
  { id: 2, caption: "חדר שינה עם זוג תמונות" },
  { id: 3, caption: "פינת אוכל עם פסל קיר" },
  { id: 4, caption: "מבואה עם שעון מעוצב" },
  { id: 5, caption: "חדר ילדים צבעוני" },
  { id: 6, caption: "סלון מודרני עם תמונות אבסטרקט" },
  { id: 7, caption: "חדר עבודה ביתי" },
  { id: 8, caption: "פינת קריאה עם אמנות קיר" },
];

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-4">
          הבתים שלכם
        </h1>
        <div className="w-16 h-0.5 bg-brand-green mx-auto mb-4" />
        <p className="text-brand-gray max-w-lg mx-auto">
          ראו איך המוצרים שלנו נראים בבתים של לקוחותינו. השראה אמיתית מחללים
          אמיתיים.
        </p>
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="group relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-brand-light to-brand-border"
          >
            {/* Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-brand-gray font-heading text-center px-4">
                {image.caption}
              </span>
            </div>

            {/* Hover overlay with caption */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
              <p className="p-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
