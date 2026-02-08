export default function NewsletterSignup() {
  return (
    <section className="bg-brand-light py-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-xl font-heading font-bold text-brand-dark mb-2">
          LET&apos;S BE FRIENDS
        </h2>
        <p className="text-brand-gray mb-6">
          הירשמו לניוזלטר שלנו וקבלו עדכונים על מוצרים חדשים ומבצעים
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="כתובת אימייל"
            className="flex-1 px-4 py-3 border border-brand-border rounded-lg text-brand-dark placeholder-brand-gray bg-white"
          />
          <button className="px-6 py-3 bg-brand-dark text-white rounded-lg font-medium hover:bg-brand-green transition-colors">
            הרשמה
          </button>
        </div>
      </div>
    </section>
  );
}
