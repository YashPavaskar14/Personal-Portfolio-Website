// import { motion } from "framer-motion";
// import { Rocket, Code, Zap, Star } from "lucide-react";

// // const milestones = [
// //   { icon: Rocket, title: "X", description: "SR. Chandak English High School 90.20%", period: "The Beginning" },
// //   { icon: Code, title: "XII", description: "HNCC College of Commerce 80.20%", period: "Foundation" },
// //   { icon: Zap, title: "Bachelor of Computer Applications (BCA)", description: "HNCC College of Computer Applications 7.9 CGPA", period: "Leveling Up" },
// //   { icon: Star, title: "Master of Computer Applications (MCA)", description: "Vellore Institue of Technology Bhopal 7.5 CGPA", period: "Current Mission" },
// // ];

// const milestones = [
//   {
//     icon: Rocket,
//     title: "X",
//     description: "SR. Chandak English High School",
//     cgpa: "90.20%",
//     period: "The Beginning",
//   },
//   {
//     icon: Code,
//     title: "XII",
//     description: "HNCC College of Commerce",
//     cgpa: "80.20%",
//     period: "Foundation",
//   },
//   {
//     icon: Zap,
//     title: "Bachelor of Computer Applications (BCA)",
//     description: "HNCC College of Computer Applications",
//     cgpa: "7.9 CGPA",
//     period: "Leveling Up",
//   },
//   {
//     icon: Star,
//     title: "Master of Computer Applications (MCA)",
//     description: "Vellore Institute of Technology, Bhopal",
//     cgpa: "7.5 CGPA",
//     period: "Current Mission",
//   },
// ];


// const Journey = () => {
//   return (
//     <section id="journey" className="relative py-24 px-4">
//       <div className="container mx-auto max-w-3xl">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
//             <span className="gradient-text">Acadamics</span>
//           </h2>
//           <p className="text-muted-foreground text-lg">My learning journey through the cosmos</p>
//         </motion.div>

//         <div className="relative">
//           {/* Vertical line */}
//           <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />

//           {milestones.map((m, i) => (
//             <motion.div
//               key={m.title}
//               initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.15 }}
//               className={`relative flex items-center mb-12 ${
//                 i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//               }`}
//             >
//               {/* Node */}
//               <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-muted border-2 border-primary/50 flex items-center justify-center z-10 neon-glow">
//                 <m.icon className="w-5 h-5 text-primary" />
//               </div>

//               {/* Card */}
//               <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
//                 <div className="glass rounded-xl p-6">
//                   <span className="text-[10px] font-display tracking-[0.2em] uppercase text-primary/70">{m.period}</span>
//                   <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-2">{m.title}</h3>
//                   {/* <p className="text-sm text-muted-foreground">{m.description}</p> */}
//                   <p className="text-sm text-muted-foreground">
//                       {m.description}
//                     </p>

//                     {m.cgpa && (
//                       <p className="text-xs text-muted-foreground opacity-80 mt-1">
//                         {m.cgpa}
//                       </p>
//                     )}

//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Journey;


import { motion } from "framer-motion";
import { Rocket, Code, Zap, Star } from "lucide-react";

const milestones = [
  {
    icon: Rocket,
    title: "X",
    description: "SR. Chandak English High School",
    cgpa: "90.20%",
    period: "The Beginning",
  },
  {
    icon: Code,
    title: "XII",
    description: "HNCC College of Commerce",
    cgpa: "80.20%",
    period: "Foundation",
  },
  {
    icon: Zap,
    title: "Bachelor of Computer Applications (BCA)",
    description: "HNCC College of Computer Applications",
    cgpa: "7.9 CGPA",
    period: "Leveling Up",
  },
  {
    icon: Star,
    title: "Master of Computer Applications (MCA)",
    description: "Vellore Institute of Technology, Bhopal",
    cgpa: "7.5 CGPA",
    period: "Current Mission",
  },
];

const Journey = () => {
  return (
    <section id="journey" className="relative py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Academics</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My learning journey through the cosmos
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />

          {milestones.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-center mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-muted border-2 border-primary/50 flex items-center justify-center z-10 neon-glow">
                <m.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Card */}
              <div
                className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${
                  i % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <motion.div
                  whileHover={{
                    y: -6,
                    boxShadow: "0 0 30px rgba(0, 200, 255, 0.35)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="glass rounded-xl p-6 border border-border/40 hover:border-primary/60"
                >
                  <span className="text-[10px] font-display tracking-[0.2em] uppercase text-primary/70">
                    {m.period}
                  </span>

                  <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-2">
                    {m.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {m.description}
                  </p>

                  {m.cgpa && (
                    <p className="text-xs text-muted-foreground opacity-80 mt-1">
                      {m.cgpa}
                    </p>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
