import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "שגיאה",
        description: "נא למלא את כל השדות החובה",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to a backend
    toast({
      title: "ההודעה נשלחה בהצלחה!",
      description: "ניצור איתך קשר בהקדם האפשרי",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              בואו נדבר
            </h2>
            <p className="text-xl text-muted-foreground">
              מוזמנים ליצור קשר ונשמח לענות על כל שאלה
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">פרטי התקשרות</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">אימייל</h4>
                      <p className="text-muted-foreground">contact@datascience.co.il</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">טלפון</h4>
                      <p className="text-muted-foreground" dir="ltr">050-123-4567</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
                <h4 className="font-bold text-lg mb-2">התחילו את המסע שלכם</h4>
                <p className="text-muted-foreground leading-relaxed">
                  הצעד הראשון להפיכת הנתונים שלכם לנכס עסקי אסטרטגי מתחיל כאן. נשמח לשמוע על האתגרים והיעדים שלכם.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="שם מלא *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="text-right"
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="אימייל *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="text-right"
                  required
                />
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="טלפון"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="text-right"
                  dir="ltr"
                />
              </div>

              <div>
                <Textarea
                  placeholder="ספרו לנו על הפרויקט *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[150px] text-right"
                  required
                />
              </div>

              <Button 
                type="submit" 
                variant="hero"
                size="lg" 
                className="w-full text-lg"
              >
                שלח הודעה
                <Send className="mr-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;