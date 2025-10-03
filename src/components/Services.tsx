import { Database, Brain, LineChart, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Database,
    title: "ניתוח ועיבוד נתונים",
    description: "איסוף, ניקוי ועיבוד נתונים ממקורות מגוונים להכנתם למידול"
  },
  {
    icon: Brain,
    title: "מודלים חכמים",
    description: "פיתוח מודלי Machine Learning ו-AI מותאמים לצרכים העסקיים שלך"
  },
  {
    icon: LineChart,
    title: "תובנות עסקיות",
    description: "המרת נתונים לתובנות פעילות ודשבורדים אינטראקטיביים"
  },
  {
    icon: Users,
    title: "ליווי וייעוץ",
    description: "ליווי צמוד לאורך כל שלבי הפרויקט - מהרעיון ועד ההטמעה"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            השירותים שלנו
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            פתרונות מקיפים לכל שלבי פרויקט הדאטה סיינס
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 bg-card"
            >
              <div className="mb-4 w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;