import { TrendingUp, Users, Zap } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    text: "כי היום כתיבת קוד היא כבר לא מכשול. כלי AI מתכנתים לבד (אפילו בשביל למעלה מ-80% מהמתכנתים המנוסים היום) - מה שנשאר לך הוא היכולת ליזום ולחדש, להבין את הנתונים ולבנות פרויקטים מקצה לקצה."
  },
  {
    icon: TrendingUp,
    text: "כי למרות שמשרות הג'וניורים (=עובדים ללא רקע מעשי) פוחתות, הדרישה לאנשי אוטומציה, ובפרט אנשי דאטה, בכלל מזנקת."
  },
  {
    icon: Users,
    text: "כי למידה גנרית, איטית ותאורטית בלבד כבר לא רלוונטית בעולם שמתחדש במהירות מסחררת כזו"
  }
];

const WhyYouNeedThis = () => {
  return (
    <section className="py-24 bg-muted/30" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          למה אתה חייב את זה לעצמך?
        </h2>

        <div className="max-w-5xl mx-auto space-y-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 p-8 bg-card rounded-xl border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <reason.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <p className="text-lg leading-relaxed">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyYouNeedThis;