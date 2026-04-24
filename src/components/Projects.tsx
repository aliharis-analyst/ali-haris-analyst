import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import blinkitImage from "../assets/blinkitSalesAnalysis.webp";
import faostatImage from "../assets/foastat.png";
import roadAccidentImage from "../assets/roadAccidentDashboard.webp";
import customerImage from "../assets/customerBehaviourDashboard.webp";

const projects = [
  {
    title: "Blinkit Sales Analysis",
    description: "This analytics dashboard transforms raw transactional data into a 360-degree view of retail performance, optimizing sales velocity, inventory, and supply chain efficiency. It empowers stakeholders with visual intelligence to benchmark regional growth and align product mix with real-time consumer demand.",
    image: blinkitImage,
    tools: ["Power BI", "SQL", "Excel","Python"],
    category: "Data Visualization",
    liveLink: "https://drive.google.com/file/d/1u6Gnkw-w0xHsU8i_db_gPacFFWQocOGo/view?usp=sharing",
    githubLink: "https://github.com/aliharis-analyst/Dashboards/blob/main/Blinkit.zip",
  },
  {
    title: "FAOSTAT Crops and livestock production",
    description: "An optimized Crops & Livestock dashboard that centralizes field productivity and financial data to drive strategic agricultural investment. It transforms complex yield and capital datasets into actionable executive summaries for real-time, data-driven decision-making.",
    image: faostatImage,
    tools: ["Python", "Pandas","NumPy","Matplotlib","Plotly","Power BI"],
    category: "Machine Learning",
    liveLink: "https://drive.google.com/file/d/16wwZMlM74S2pH2PQBikZGY8P26UfLZXs/view",
    githubLink: "https://github.com/aliharis-analyst/FAOSTAT",
  },
  {
    title: "Income & Expense Analysis",
    description: "This interactive Microsoft Power BI Desktop dashboard provides a clear overview of monthly income, expenses, and total savings using dynamic charts and KPI cards. It highlights spending trends, savings sources, and category-wise expenses for better financial tracking and decision-makin",
    image: IncomeExpenseImage,
    tools: ["Python", "Pandas","NumPy","Matplotlib","Plotly","Power BI"],
    category: "Machine Learning",
    liveLink:"https://drive.google.com/file/d/1sLaTB3Bhzk8K7ExgTJM7Lf3alXXf0S0f/view?usp=drive_link",
  }
  {
    title: "Road Accident Dashboard",
    description: "This dashboard transforms raw accident data into visual intelligence to identify high-risk factors and reduce traffic-related fatalities. By analyzing severity trends and seasonal patterns, it provides the data-driven insights necessary for optimizing emergency response and urban infrastructure decisions.",
    image: roadAccidentImage,
    tools: ["Excel","PostgreSQL" , "Power Query"],
    category: "Financial Analysis",
    liveLink: "https://drive.google.com/file/d/18f3Tz6vG1S_Rv0Z0XA80pYHBXOhRdy4X/view?usp=sharing",
    githubLink: "https://github.com/aliharis-analyst/Dashboards/tree/main/Road%20Accident",
  },
  {
    title: "Customer Behaviour Dashboard",
    description: "This dashboard transforms raw transactional data into deep insights into purchasing patterns, demographics, and customer loyalty trends. It identifies high-value segments and engagement metrics to help businesses optimize their product mix and refine targeted marketing strategies.",
    image: customerImage,
    tools: ["Python", "SQL", "Power BI"],
    category: "Data Engineering",
    liveLink: "https://drive.google.com/file/d/1YQTcGOa_iH5z_zRBpYgF3W2nWZO6e2iD/view?usp=sharing",
    githubLink: "https://github.com/aliharis-analyst/Dashboards/blob/main/Customer_Behavior%20Analysis.zip",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-secondary/30">
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of data analysis projects showcasing my expertise in turning data into insights.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative rounded-xl bg-card border border-border 
                         hover:border-primary/50 transition-all duration-300 card-glow
                         overflow-hidden"
            >
              {/* Project Screenshot */}
              <div className="relative aspect-video overflow-hidden bg-secondary">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <span className="absolute top-3 right-3 text-xs font-medium text-primary bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full border border-border">
                  {project.category}
                </span>
              </div>
              
              <div className="p-6">
                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary 
                               transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-medium text-muted-foreground bg-secondary 
                                 px-3 py-1 rounded-md border border-border"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Interested in seeing more of my work?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 
                       font-medium transition-colors duration-200"
          >
            Let's discuss your project
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

