import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="font-display text-lg font-bold">
            <span className="text-gradient">Muhammad Ali Haris</span>
          </div>
          
          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} Muhammad Ali Haris. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#skills"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Skills
            </a>
            <a
              href="#tools"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Tools
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
