import { Metadata } from "next";

export const metadata: Metadata = {
  title: "לקוחותינו",
  description: "מה הלקוחות שלנו אומרים - חוות דעת ותגובות על סטודיו תמונה",
};

const testimonials = [
  {
    name: "מיכל כ.",
    text: "קניתי קיר גלריה לסלון ואני פשוט מאוהבת! השירות היה מדהים והתוצאה עלתה על כל הציפיות.",
    location: "תל אביב",
  },
  {
    name: "רוני ש.",
    text: "הזמנתי זוג תמונות לחדר השינה. האיכות מעולה והמשלוח הגיע מהר. ממליצה בחום!",
    location: "רעננה",
  },
  {
    name: "אילנה ד.",
    text: "פסל הקיר שקניתי הפך את הסלון שלנו למשהו מיוחד. כל האורחים שואלים מאיפה זה.",
    location: "הרצליה",
  },
  {
    name: "יוסי מ.",
    text: "שעון קיר מדהים! עיצוב ייחודי ואיכות גבוהה. בהחלט שווה כל שקל.",
    location: "ראשון לציון",
  },
  {
    name: "נועה ל.",
    text: "קניתי תמונות לחדר הילדים ולסלון. השירות האישי עזר לי לבחור בדיוק מה שמתאים.",
    location: "פתח תקווה",
  },
  {
    name: "דני ח.",
    text: "הייעוץ היה מקצועי ומדויק. התוצאה - קיר שנראה כאילו מעצב פנים תכנן אותו.",
    location: "חיפה",
  },
];

export default function CustomersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-4">
          לקוחותינו
        </h1>
        <div className="w-16 h-0.5 bg-brand-green mx-auto mb-4" />
        <p className="text-brand-gray max-w-lg mx-auto">
          אנחנו גאים בלקוחות שלנו ובשמחה שאנחנו מביאים לבתיהם
        </p>
      </div>

      {/* Testimonials grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-brand-light rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            {/* Quote icon */}
            <svg
              className="w-8 h-8 text-brand-green/30 mb-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
            </svg>

            <p className="text-brand-dark leading-relaxed mb-4">
              {testimonial.text}
            </p>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center">
                <span className="text-brand-green text-sm font-bold">
                  {testimonial.name[0]}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-brand-dark">
                  {testimonial.name}
                </p>
                <p className="text-xs text-brand-gray">
                  {testimonial.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
