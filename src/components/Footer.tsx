const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12 border-t" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            בונים בינה
          </h3>
          <p className="text-muted-foreground mb-2">
            הפוך את הידע שלך לפרויקט AI אמיתי
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} בונים בינה - כל הזכויות שמורות
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;