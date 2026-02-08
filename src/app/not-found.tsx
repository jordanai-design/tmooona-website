import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-heading font-bold text-brand-dark mb-4">
          404
        </h1>
        <p className="text-xl text-brand-gray mb-8">
          העמוד שחיפשת לא נמצא
        </p>
        <Link
          href="/"
          className="inline-block bg-brand-dark text-white px-8 py-3 rounded-lg font-medium hover:bg-brand-green transition-colors"
        >
          חזרה לדף הבית
        </Link>
      </div>
    </div>
  );
}
