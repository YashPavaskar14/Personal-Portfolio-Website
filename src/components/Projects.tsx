import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "Job Portal Website",
    description: "A responsive job portal website built with React, Tailwind CSS, Spring Boot backend, and PostgreSQL database which allows users to search and apply for jobs, and employers to post job listings and manage applications and AI based resume screening and skill matching.",
    tech: ["React", "Tailwind CSS", "Spring Boot", "Java","PostgreSQL","API","Python"],
    color: "hsl(190, 100%, 50%)",
  },
  {
    name: "Weather Dashboard",
    description: "A responsive weather dashboard built with React, Tailwind CSS, and Spring Boot backend which fetches real-time weather data from an API and displays it in a user-friendly interface.",
    tech: ["ReactJs", "Tailwind CSS","Spring Boot", "Java"],
    color: "hsl(280, 70%, 60%)",
  },
  {
    name: "Chat Application",
    description: "Real-time chat application with messaging and user management features.",
    tech: ["React", "Tailwind CSS", "Spring Boot", "Java","PostgreSQL"],
    color: "hsl(220, 90%, 60%)",
  },
  {
    name: " Predictive Analysis System",
    description: "A predictive analysis system built with Python and machine learning algorithms to analyze data patterns and make future predictions.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    color: "hsl(45, 90%, 55%)",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">Missions I've launched into orbit</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-8 group relative overflow-hidden"
            >
              {/* Glow ring */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[60px]"
                style={{ backgroundColor: `${project.color}30` }}
              />

              <div className="relative z-10">
                {/* Planet icon */}
                <div
                  className="w-12 h-12 rounded-full mb-6"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${project.color}60, ${project.color}20)`,
                    border: `2px solid ${project.color}40`,
                    boxShadow: `0 0 20px ${project.color}20`,
                  }}
                />

                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{project.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-display tracking-wider uppercase px-3 py-1 rounded-full border border-border/50 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href="https://github.com/YashPavaskar14?tab=repositories" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/YashPavaskar14?tab=repositories" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
