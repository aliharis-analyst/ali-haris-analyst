import { motion } from "framer-motion";
import { Database, BarChart2, GitBranch, Search, Layers, Zap } from "lucide-react";

const skills = [
  {
    icon: Search,
    title: "Data Cleaning",
    description: "Transforming messy, raw data into clean, structured datasets ready for analysis.",
  },
  {
    icon: BarChart2,
    title: "Data Visualization",
    description: "Creating compelling visual stories that make complex data easy to understand.",
  },
  {
    icon: Layers,
    title: "Data Modeling",
    description: "Building robust data models that enable efficient querying and analysis.",
  },
  {
    icon: GitBranch,
    title: "ETL Pipelines",
    description: "Designing Extract, Transform, Load processes for seamless data integration.",
  },
  {
    icon: Database,
    title: "EDA",
    description: "Exploratory Data Analysis to uncover patterns, trends, and insights.",
  },
  {
    icon: Zap,
    title: "Analytics",
    description: "Deriving actionable insights through statistical analysis and interpretation.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
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
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Core <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Specialized skills that drive data-informed decision making and business value.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              className="group p-6 rounded-xl bg-card border border-border 
                         hover:border-primary/50 transition-all duration-300 card-glow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4
                              group-hover:bg-primary/20 transition-colors duration-300">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
