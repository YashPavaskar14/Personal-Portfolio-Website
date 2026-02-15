import { motion } from "framer-motion";
import { Rocket, Compass, Sparkles } from "lucide-react";

const phases = [
  {
    icon: Rocket,
    title: "The Launch",
    description: "Started my journey into Java Backend Developer driven by curiosity. Every line of code was a new discovery, every bug a puzzle to solve.",
  },
  {
    icon: Compass,
    title: "Navigation",
    description: "Learning to navigate through Spring Boot a Java Framework — building the foundation to explore more complex frontiers.",
  },
  {
    icon: Sparkles,
    title: "Exploration",
    description: "Now diving deep into React, Tailwind CSS, and modern tools — crafting interactive experiences that push creative boundaries.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm a student with  with hands-on experience in building scalable full-stack applications using Java, Spring Boot, React.js, JavaScript, and REST APIs. Designedand implemented multiple end-to-end projects including a Job Portal and Weather Dashboard, focusing on backendarchitecture, API integration, and responsive UI development. Seeking an entry-level software development roleto contribute strong problem-solving and full-stack engineering skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass rounded-2xl p-8 hover:neon-glow transition-shadow duration-500 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <phase.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{phase.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
