import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "אלי",
    role: "דאטה סיינטיסט מתחיל",
    story: "הגיע עם ניסיון מועט בכתיבת קוד, אבל עם רעיון חזק שיחד הבאנו עד להקמת סטארטאפ וחשיפה בכלי התקשורת.",
    quote: "היה לי רעיון לאפליקציה שמנבאת סיבת הבכי של התינוק, אבל לא ידעתי איך להפוך אותו למציאות. זכר לא רק עזר לי לבנות את המודל - הוא לימד אותי איך לחשוב כמו data scientist אמיתי. התחלנו מאיסוף נתונים, דרך ניקוי וניתוח, ועד לבניית מודל machine learning מתוחכם. הכי מרשים? שבסוף הליווי יש לי לא רק מוצר עובד, אלא גם הידע והביטחון לפתח פרויקטים נוספים לבד. היום האפליקציה שלי רצה ומשרתת אלפי משתמשים."
  },
  {
    name: "יובל",
    role: "עו\"ד חובבת AI וטכנולוגיות",
    story: "שהפכה בעקבות הליווי לאחראית החדשנות במשרד.",
    quote: "הגעתי לזכר עם רעיון מעורפל על שימוש ב-AI במשרד עורכי הדין. לא ידעתי איך להתחיל או מה בכלל אפשר לעשות. במהלך 6 המפגשים, זכר עזר לי להגדיר בדיוק מה אני רוצה להשיג - אוטומציה של ניתוח חוזים. למדתי איך לבנות מודל NLP שמזהה סעיפים בעייתיים בחוזים, ואיך להציג את זה לשותפים במשרד. התוצאה? היום אני מובילה צוות של 3 מתכנתים ואנחנו מפתחים כלים שחוסכים למשרד מאות שעות עבודה בחודש."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          מה מספרים לקוחות שעברו את הליווי
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          סיפורי הצלחה של אנשים שהפכו את הידע שלהם לפרויקטים אמיתיים
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
              <Quote className="h-10 w-10 text-primary mb-4" />
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{testimonial.name}</h3>
                <p className="text-lg text-accent font-semibold mb-2">{testimonial.role}</p>
                <p className="text-muted-foreground italic">{testimonial.story}</p>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border-r-4 border-primary">
                <p className="text-base leading-relaxed">{testimonial.quote}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30">
            <h3 className="text-2xl font-bold mb-2">ועוד המלצות רבות...</h3>
            <p className="text-muted-foreground">צילומי מסך והמלצות נוספות זמינים לצפייה</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;