import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import heroImage from "@/assets/hero-data-science.jpg";

const Hero = () => {
  const whatsappNumber = "972501234567"; // החלף עם המספר האמיתי
  const whatsappMessage = encodeURIComponent("היי! אני מעוניין לשמוע עוד על הליווי בפרויקטי AI");
  
  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" dir="rtl">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-accent/5" />
      
      {/* Hero image with overlay */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Data Science Visualization" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
              בונים בינה | להפוך את הידע שלך לפרויקט AI
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-foreground mb-12 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-150">
              שיגרום לך לבלוט ולהוביל בקריירה
            </p>
          </div>

          {/* Problem Section */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-border">
            <h2 className="text-2xl font-bold mb-6 text-center">אם אתם מרגישים ש</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "כולם מסביבכם כבר משתמשים ב-AI בשביל לתכנת, לחקור, וליצור",
                "הידע שלכם - בכל תחום - נשאר תיאורטי בלבד",
                "רעיונות טובים שלכם נתקעים במגירה",
                "אתם תקועים בלופ מתסכל: אין לך ניסיון → אין קבלה לעבודה שתיתן לכם אותו"
              ].map((problem, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-destructive/10 rounded-lg">
                  <X className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-lg">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-xl mb-6 text-muted-foreground">
              אני מזמין אותך למסע אישי וממוקד - שיעזור להפוך את כל אלה, על ידי בניית פרויקט דאטה סיינס אמיתי, יחד איתי, צעד אחר צעד, עד שיש לך תוצר מוחשי ביד
            </p>
            <Button 
              variant="hero"
              size="lg" 
              className="text-xl px-10 py-6 h-auto"
              onClick={openWhatsApp}
            >
              <MessageCircle className="ml-2 h-6 w-6" />
              בוא נדבר בווטסאפ
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;