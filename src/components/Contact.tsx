import { Button } from "@/components/ui/button";
import { MessageCircle, Target } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "972501234567"; // החלף עם המספר האמיתי
  const whatsappMessage = encodeURIComponent("היי! אני מעוניין לקבוע שיחת אסטרטגיה חינמית");
  
  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Target className="h-16 w-16 mx-auto mb-6 text-primary" />
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🎯 רוצה להתחיל לבנות בינה?
          </h2>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 border-2 border-primary/20 shadow-2xl mb-8">
            <p className="text-xl leading-relaxed mb-6">
              תלמידים שכבר עברו איתי את התהליך הצליחו להתקדם למשרות דאטה, להכניס AI לעבודה הקיימת שלהם, להקים מיזמים שמבוססים על הפרויקטים שיצרו כאן ולהביא ערך אמיתי לאחרים.
            </p>
            
            <p className="text-xl leading-relaxed mb-8">
              הם הפסיקו רק "להבין תיאוריה" או לשמוע על הכלים החדשים - והתחילו להרגיש אקטיביים, יוצרים, ושולטים במנועי ה-AI, במקום להישאר עם זה רק כחלום לעתיד.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">שיחת אסטרטגיה חינמית</h3>
              <p className="text-lg text-muted-foreground">
                קבע, כבר היום, שיחת אסטרטגיה חינמית בזום - נדבר על המטרות שלך ואיך אפשר להפוך אותן למציאות
              </p>
            </div>

            <Button 
              variant="hero"
              size="lg" 
              className="text-xl px-12 py-7 h-auto shadow-2xl hover:shadow-primary/50"
              onClick={openWhatsApp}
            >
              <MessageCircle className="ml-3 h-7 w-7" />
              בוא נדבר בווטסאפ
            </Button>
          </div>

          <p className="text-muted-foreground text-sm">
            * השיחה הראשונה חינמית ללא התחייבות
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;