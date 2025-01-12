const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container">
        <div className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()}. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
