import { CheckCircle2 } from "lucide-react";

const benefits = [
  "ניסיון רב בפרויקטים מורכבים בתעשיות שונות",
  "גישה מעשית ממוקדת תוצאות עסקיות",
  "ליווי אישי והתאמה מלאה לצרכי הארגון",
  "שימוש בכלים וטכנולוגיות מתקדמות ביותר",
  "תקשורת שקופה ודיווח שוטף על התקדמות",
  "הכשרה והעברת ידע לצוות הפנימי"
];

const Benefits = () => {
  return (
    <section className="py-24 bg-muted/30" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              למה לבחור בנו?
            </h2>
            <p className="text-xl text-muted-foreground">
              שילוב של מומחיות טכנית והבנה עסקית עמוקה
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;