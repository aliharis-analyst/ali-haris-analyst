import { motion } from "framer-motion";
import { ArrowDown, BarChart3, Database, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Glowing orbs */}
      <div className="hero-glow top-1/4 left-1/4 animate-pulse-slow" />
      <div className="hero-glow bottom-1/4 right-1/4 animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      {/* Floating icons */}
      <motion.div
        className="absolute top-1/4 left-[15%] text-primary/30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <BarChart3 size={48} />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-[15%] text-primary/30"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Database size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-[20%] text-primary/30"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <TrendingUp size={44} />
      </motion.div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/5"
          >
            <span className="text-primary text-sm font-medium">Data Analyst</span>
          </motion.div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">Muhammad Ali Haris</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Transforming raw data into actionable insights through advanced analytics,
            visualization, and data-driven storytelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold 
                         hover:bg-primary/90 transition-all duration-300 
                         shadow-[0_0_30px_hsl(187_85%_53%/0.3)] hover:shadow-[0_0_40px_hsl(187_85%_53%/0.5)]"
            >
              Get In Touch
            </a>
            <a
              href="#skills"
              className="px-8 py-4 rounded-lg border border-border text-foreground font-semibold
                         hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              View My Skills
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
