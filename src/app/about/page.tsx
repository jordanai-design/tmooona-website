import { Metadata } from "next";

export const metadata: Metadata = {
  title: "מי אנחנו",
  description: "הכירו את סטודיו תמונה - סטודיו בוטיק לעיצוב קירות ואמנות מודרנית לבית",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-4">
          מי אנחנו
        </h1>
        <div className="w-16 h-0.5 bg-brand-green mx-auto" />
      </div>

      {/* Content */}
      <div className="space-y-8 text-brand-dark leading-relaxed">
        <div className="bg-brand-light rounded-xl p-8">
          <h2 className="text-xl font-heading font-bold mb-4 text-brand-green">
            הלבשת קירות - זה מה שאנחנו עושים
          </h2>
          <p>
            אנחנו מאמינים שסגנון הבית משקף מי את/ה. הקירות הם הבד הלבן שלכם,
            ואנחנו כאן כדי לעזור לכם להפוך אותם ליצירת אמנות.
          </p>
        </div>

        <p>
          סטודיו תמונה הוא סטודיו בוטיק לעיצוב קירות, המתמחה בייצור תמונות
          מעוצבות, פסלי קיר, שעונים ואמנות מודרנית לבית. אנו עובדים עם מגוון
          חומרים מודרניים - אלומיניום, אקריליק, פרספקס, עץ ועוד.
        </p>

        <p>
          כל מוצר נבחר בקפידה ומותאם לטרנדים העדכניים ביותר בעולם העיצוב, תוך
          שמירה על איכות גבוהה ותשומת לב לפרטים.
        </p>

        <div className="bg-brand-light rounded-xl p-8">
          <h2 className="text-xl font-heading font-bold mb-4 text-brand-green">
            הפילוסופיה שלנו
          </h2>
          <p className="text-lg italic">
            &ldquo;סגנון הבית משקף מי את/ה&rdquo;
          </p>
          <p className="mt-3">
            אנחנו מלווים אתכם בתהליך בחירת היצירות המתאימות לחלל שלכם, מייעצים
            ומציעים שילובים שיהפכו כל קיר לחוויה עיצובית.
          </p>
        </div>

        {/* Image placeholder */}
        <div className="aspect-video bg-gradient-to-br from-brand-light to-brand-border rounded-xl flex items-center justify-center">
          <span className="text-brand-gray text-lg font-heading">
            תמונת הסטודיו
          </span>
        </div>
      </div>
    </div>
  );
}
