import { motion } from "framer-motion";
import { useState , useMemo  } from "react";
import { useMotionValue, useAnimationFrame , useTransform} from "framer-motion";




const skills = [
  { name: "HTML", color: "hsl(15, 80%, 55%)", description: "Semantic markup & accessibility", category: "frontend" },
  { name: "CSS", color: "hsl(200, 80%, 55%)", description: "Responsive layouts & animations", category: "frontend" },
  { name: "JavaScript", color: "hsl(50, 90%, 55%)", description: "Dynamic interactivity & logic", category: "frontend" },
  { name: "React", color: "hsl(190, 90%, 55%)", description: "Component-based UI architecture", category: "frontend" },
  { name: "Tailwind", color: "hsl(190, 70%, 50%)", description: "Utility-first CSS framework", category: "frontend" },
  { name: "Git", color: "hsl(10, 70%, 50%)", description: "Version control & collaboration", category: "tools" },
  { name: "GitHub", color: "hsl(0, 0%, 70%)", description: "Code hosting & open source", category: "tools" },
  { name: "VS Code", color: "hsl(210, 80%, 55%)", description: "Code editor & extensions", category: "tools" },
  { name: "Spring Boot", color: "hsl(120, 80%, 55%)", description: "Java framework for backend development", category: "backend" },
  { name: "Java", color: "hsl(233, 80%, 55%)", description: "Object-oriented programming language", category: "backend" },
];

const Skills = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);



const orbitAngle = useMotionValue(0);

const mouseX = useMotionValue<number>(0);
const mouseY = useMotionValue<number>(0);


useAnimationFrame((t) => {
  if (!paused) {
    orbitAngle.set(t * 0.00012);
  }
});






  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills Galaxy</span>
          </h2>
          <p className="text-muted-foreground text-lg">Technologies orbiting in my universe</p>
        </motion.div>

        {/* Orbital display */}
        {/* <div className="relative flex justify-center items-center min-h-[400px]"> */}
        <div
          className="relative flex justify-center items-center min-h-[400px]"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.02);
            mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.02);
          }}
        >
          {/* Center sun */}
          <div className="absolute w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center z-10 pulse-glow">
            <span className="font-display text-xs text-primary tracking-wider">DEV</span>
          </div>

          {/* Orbit rings */}
          <div className="absolute w-[280px] h-[280px] rounded-full border border-border/30" />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-border/20" />

        {/* Skills as planets */}
          
        {/* Skills as planets */}


      {skills.map((skill, i) => {
  const baseAngle = (i / skills.length) * Math.PI * 2 - Math.PI / 2;
  const speedFactor = skill.category === "frontend" ? 1 : 0.6;

  const radius = skill.category === "frontend" ? 140 : 210;

  // const x = useTransform(orbitAngle, (a) =>
  //   `calc(50% + ${Math.cos(baseAngle + a) * radius}px - 28px)`
  // );

  // const y = useTransform(orbitAngle, (a) =>
  //   `calc(50% + ${Math.sin(baseAngle + a) * radius}px - 28px)`
  // );

 const x = useTransform(
  [orbitAngle, mouseX],
  ([a, mx]: [number, number]) =>
    `calc(50% + ${Math.cos(baseAngle + a * speedFactor) * radius + mx}px - 28px)`
);

const y = useTransform(
  [orbitAngle, mouseY],
  ([a, my]: [number, number]) =>
    `calc(50% + ${Math.sin(baseAngle + a * speedFactor) * radius + my}px - 28px)`
);



  return (
    <motion.div
      key={skill.name}
      className="absolute cursor-pointer"
      style={{ left: x, top: y }}
      // onMouseEnter={() => setHovered(skill.name)}
      // onMouseLeave={() => setHovered(null)}

      onMouseEnter={() => {
        setHovered(skill.name);
        setPaused(true);
      }}
      onMouseLeave={() => {
        setHovered(null);
        setPaused(false);
      }}

    >
      <motion.div
        whileHover={{ scale: 1.3 }}
        className="w-14 h-14 rounded-full flex items-center justify-center text-xs font-display font-bold relative skill-trail"
        style={{
          backgroundColor: `${skill.color}20`,
          border: `2px solid ${skill.color}60`,
          color: skill.color,
          boxShadow:
            hovered === skill.name
              ? `0 0 20px ${skill.color}40`
              : "none",
        }}
      >
        {skill.name.slice(0, 2).toUpperCase()}
      </motion.div>

      {hovered === skill.name && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full mt-2 left-1/2 -translate-x-1/2 glass rounded-lg p-3 min-w-[160px] z-20 text-center"
        >
          <p className="font-display text-xs font-semibold">
            {skill.name}
          </p>
          <p className="text-[10px] text-muted-foreground mt-1">
            {skill.description}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
})}






        </div>
      </div>
    </section>
  );
};

export default Skills;
