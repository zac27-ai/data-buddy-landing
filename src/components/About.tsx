import { GraduationCap, Briefcase, Heart } from "lucide-react";

const About = () => {
  return (
    <section className="py-24" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            מי אני?
          </h2>
          
          <div className="bg-card rounded-2xl p-8 border-2 border-border shadow-xl mb-8">
            <p className="text-xl leading-relaxed mb-6">
              שמי <span className="font-bold text-primary">זכר עדינייב</span>, מייסד ומנטור ראשי ב"בונים בינה".
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="text-lg leading-relaxed">
                  אני בוגר מדעי המחשב, עם ניסיון של מעל עשור בבניית פרויקטי למידה, כולל <span className="font-semibold">6 שנים כ-Data Scientist, ראש צוות ומנהל פיתוחי AI</span> בחברות אוטומציה בהייטק.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-secondary-foreground" />
                </div>
                <p className="text-lg leading-relaxed">
                  היום אני גם מדריך בתכנית הלאומית <span className="font-semibold">"מגשימים AI"</span> שמכשירה בני נוער מהפריפריה לעולמות הדאטה והבינה המלאכותית.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="text-lg leading-relaxed">
                  יש לי תשוקה גדולה לחדשנות, טכנולוגיה והדרכה.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">הסיפור שמאחורי "בונים בינה"</h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                במהלך השנים פגשתי וליוויתי עשרות אנשים - מתלמדים, אנליסטים ואנשי מקצוע - וזיהיתי שוב ושוב את אותו תסכול: <span className="font-semibold">אנשים מבריקים עם ידע נרחב, בכל תחום שהוא, שלא מצליחים לממש אותו ולהתקדם בקריירה</span>: הם תקועים עם עבודה שלא מבטאת את היכולות שלהם, רעיונות שנשארים במגירה, או בלופ האינסופי הזה של "אין לך ניסיון" - אז לא התקבלת לעבודה שתוכל סוף סוף לתת לך אותו.
              </p>
              <p>
                הבנתי שקורסים גנריים או תארים תאורטיים לא פותרים את הבעיה. <span className="font-semibold">למידה אמיתית מתרחשת רק דרך עשייה ויצירה.</span>
              </p>
              <p className="text-xl font-bold text-primary">
                אז הקמתי את 'בונים בינה' - תכנית בליווי אישי, שמותאם בדיוק ליכולות, לקצב ולמטרות שלך. הליווי נבנה כך שהידע שלך הופך לפרקטיקה ולפרויקט אמיתי שמקפיץ אותך שלב. עם ליווי אישי שלי, צעד-אחר-צעד, עד שיש לך תוצר מוחשי אמיתי ביד.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;