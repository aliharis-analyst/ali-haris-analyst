import { motion } from "framer-motion";
import { BarChart3, Database, TrendingUp, Code } from "lucide-react";

const iconMap = {
  excel: BarChart3,
  sql: Database,
  powerbi: TrendingUp,
  python: Code,
};

const tools = [
  {
    name: "Excel",
    description: "Advanced formulas, pivot tables, data analysis",
    iconKey: "excel",
    color: "from-green-500/20 to-green-600/10",
  },
  {
    name: "SQL",
    description: "Complex queries, database management, optimization",
    iconKey: "sql",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    name: "Power BI",
    description: "Interactive dashboards, DAX, data modeling",
    iconKey: "powerbi",
    color: "from-yellow-500/20 to-orange-500/10",
  },
  {
    name: "Python",
    description: "Pandas, NumPy, Matplotlib, data automation",
    iconKey: "python",
    color: "from-cyan-500/20 to-blue-500/10",
  },
  {
    name: "DAX",
    description: "Data Analysis Expressions for Power BI",
    iconKey: "powerbi",
    color: "from-red-500/20 to-orange-500/10",
  },
];

const Tools = () => {
  return (
    <section id="tools" className="py-24 relative bg-secondary/30">
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Tech Stack
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Tools & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The powerful tools I use to turn data into insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tools.map((tool, index) => {
            const IconComponent = iconMap[tool.iconKey as keyof typeof iconMap];
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-6 rounded-xl bg-gradient-to-br ${tool.color} 
                            border border-border hover:border-primary/50 
                            transition-all duration-300 overflow-hidden`}
              >
                <div className="absolute top-0 right-0 opacity-20 transform translate-x-2 -translate-y-2
                                group-hover:opacity-30 transition-opacity duration-300 w-24 h-24">
                  {IconComponent && <IconComponent size={96} className="w-full h-full" />}
                </div>
                <div className="relative z-10">
                  <div className="mb-4">
                    {IconComponent && <IconComponent size={40} />}
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">{tool.name}</h3>
                  <p className="text-muted-foreground text-sm">{tool.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tools;
