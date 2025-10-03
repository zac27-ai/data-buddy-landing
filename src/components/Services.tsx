import { Video, MessageSquare, Folder, Award, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const includes = [
  {
    icon: Video,
    title: "6 מפגשים אישיים בזום",
    description: "אחד על אחד איתי (שעה כל מפגש)"
  },
  {
    icon: MessageSquare,
    title: "ליווי צמוד בווטסאפ",
    description: "בין המפגשים לתמיכה מתמדת"
  },
  {
    icon: Folder,
    title: "עבודה פרקטית",
    description: "על פרויקט אישי שלך - בחירה, מחקר, יישום ותוצר סופי"
  },
  {
    icon: Award,
    title: "מצגת + הקלטה",
    description: "מכל מפגש - שישארו שלך כדי שתמיד תוכל לחזור לתוכן"
  }
];

const outcomes = [
  "תוצר סופי מוחשי מהליווי - דשבורד או אפליקציית דמו אמיתית שממחישה בצורה מרשימה את מה שבנית וממש נותנת ערך",
  "הבנה נרחבת בעבודה עם כלי AI חדשניים (Cursor ובמידת הצורך גם: Claude code, חיבורי MCP ושימוש יעיל ב-chatGPT)",
  "ביטחון מלא ביכולת להרים פרויקטי דאטה סיינס מקצה לקצה"
];

const Services = () => {
  return (
    <section id="services" className="py-24" dir="rtl">
      <div className="container mx-auto px-4">
        {/* What's Included */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              אז מה כולל המסע?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {includes.map((item, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 bg-card"
              >
                <div className="mb-4 w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* What You Get */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            ובסופו, מה נשאר איתך?
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-8">
            הכי חשוב, מעבר לידע ולניסיון הפרקטי:
          </p>
          
          <div className="space-y-4">
            {outcomes.map((outcome, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-xl border hover:border-accent/50 transition-all duration-300"
              >
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;