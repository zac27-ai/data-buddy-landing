import { Search, Lightbulb, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "הבנת הצורך",
    description: "ניתוח מעמיק של היעדים העסקיים והאתגרים הקיימים"
  },
  {
    icon: Lightbulb,
    title: "תכנון אסטרטגי",
    description: "בניית תוכנית עבודה מפורטת ומתודולוגיה מותאמת"
  },
  {
    icon: Code,
    title: "פיתוח ומידול",
    description: "יישום הפתרון עם כלים וטכנולוגיות מתקדמות"
  },
  {
    icon: Rocket,
    title: "הטמעה ומעקב",
    description: "השקה מבוקרת ומעקב מתמיד אחר ביצועים"
  }
];

const Process = () => {
  return (
    <section className="py-24" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            תהליך העבודה
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            מתודולוגיה מוכחת להצלחת פרויקטי דאטה סיינס
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 right-0 left-0 h-0.5 bg-gradient-to-l from-primary via-secondary to-accent -translate-y-1/2 opacity-20" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="text-center relative group"
              >
                {/* Step number badge */}
                <div className="absolute -top-4 right-1/2 translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground flex items-center justify-center font-bold text-sm z-10">
                  {index + 1}
                </div>

                <div className="bg-card p-8 rounded-2xl border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl mt-4 h-full">
                  <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;