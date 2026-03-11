import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss how I can help.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.a
              href="mailto:aliharis.gh@gmail.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border 
                         hover:border-primary/50 transition-all duration-300 card-glow
                         flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4
                              group-hover:bg-primary/20 transition-colors duration-300">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm break-all">
                aliharis.gh@gmail.com
              </p>
            </motion.a>

            <motion.a
              href="tel:+923131687232"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group p-6 rounded-xl bg-card border border-border 
                         hover:border-primary/50 transition-all duration-300 card-glow
                         flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4
                              group-hover:bg-primary/20 transition-colors duration-300">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm">
                +92 313 168 7232
              </p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group p-6 rounded-xl bg-card border border-border 
                         hover:border-primary/50 transition-all duration-300 card-glow
                         flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4
                              group-hover:bg-primary/20 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">
                Pakistan
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href="mailto:aliharis.gh@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground 
                         font-semibold hover:bg-primary/90 transition-all duration-300 
                         shadow-[0_0_30px_hsl(187_85%_53%/0.3)] hover:shadow-[0_0_40px_hsl(187_85%_53%/0.5)]"
            >
              <Send className="w-5 h-5" />
              Send Me a Message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
