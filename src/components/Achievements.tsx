import { motion } from "framer-motion";
import { Award, BookOpen, Trophy, Target } from "lucide-react";

const badges = [
  { icon: BookOpen, title: "Self-Taught Coder", description: "Completed multiple online courses" },
  { icon: Trophy, title: "Project Builder", description: "Built 4+ personal projects" },
  { icon: Target, title: "Consistent Learner", description: "Daily coding practice streak" },
  { icon: Award, title: "Open Source", description: "First contribution to open source" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-24 px-4">
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Mission Badges</span>
          </h2>
          <p className="text-muted-foreground text-lg">Achievements unlocked on my journey</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="glass rounded-2xl p-6 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:neon-glow transition-shadow duration-500 bg-primary/5">
                <badge.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xs font-semibold text-foreground mb-1">{badge.title}</h3>
              <p className="text-[10px] text-muted-foreground">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
