import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[400px] flex items-center justify-center bg-gradient-to-bl from-brand-light via-white to-brand-border overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 start-10 w-64 h-64 rounded-full bg-brand-green/10 blur-3xl" />
      <div className="absolute bottom-10 end-10 w-80 h-80 rounded-full bg-brand-pink/10 blur-3xl" />

      {/* Content */}
      <div className="relative text-center px-4 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-sage mb-4 font-accent">
          TMOOONA Studio
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-brand-dark leading-tight mb-6">
          סגנון הבית
          <br />
          <span className="text-brand-green">משקף מי את/ה</span>
        </h1>
        <p className="text-lg text-brand-gray mb-8 max-w-md mx-auto">
          סטודיו בוטיק לעיצוב קירות - תמונות, פסלי קיר, שעונים ואמנות מודרנית
          לבית
        </p>
        <Link
          href="/shop"
          className="inline-block bg-brand-dark text-white px-8 py-3 rounded-lg font-medium hover:bg-brand-green transition-colors"
        >
          לחנות
        </Link>
      </div>
    </section>
  );
}
