import { motion } from "framer-motion";
import AstronautFlipCard from "@/components/AstronautFlipCard";
import astronautImg from "@/assets/astronaut-hero.png";

const textContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
  },
};



const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Nebula glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4"
          >
            Hello Guys !!!
          </motion.p>
          {/* <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
            <span className="gradient-text">Yashraj</span>{" "}
            <span className="text-foreground">Pavaskar</span>
          </h1> */}

          <motion.h1
            variants={textContainer}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-display font-bold mb-4 leading-tight"
          >
            {/* Yashraj */}
            <div className="flex justify-center lg:justify-start">
              {"Yashraj".split("").map((char, index) => (
                <motion.span
                  key={`y-${index}`}
                  variants={letterVariant}
                  className="gradient-text inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Pavaskar */}
            <div className="flex justify-center lg:justify-start">
              {"Pavaskar".split("").map((char, index) => (
                <motion.span
                  key={`p-${index}`}
                  variants={letterVariant}
                  className="text-foreground inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.h1>


          <p className="text-xl md:text-2xl text-muted-foreground font-body mb-2">
            Java Developer | Full-Stack Enthusiast
          </p>
          <p className="text-muted-foreground/70 text-lg mb-8 max-w-md mx-auto lg:mx-0">
            Building scalable applications with Spring Boot and React. Passionate about creating elegant solutions through code and turning ideas into impactful digital experiences.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
              <a
              href="/resume.pdf"
              download="Yashraj_Pavaskar_Resume.pdf"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm tracking-wider uppercase neon-glow hover:scale-105 transition-transform"
            >
              Download CV
            </a>
            <a    
              href="#contact"
              className="px-8 py-3 rounded-lg glass border-primary/30 text-primary font-display text-sm tracking-wider uppercase hover:bg-primary/10 transition-colors"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* Astronaut */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          {/* <div className="float-slow relative">
            <img
              src={astronautImg}
              alt="Astronaut floating in space"
              className="w-full max-w-lg rounded-3xl"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div> */}
          <div className="float-slow relative">
            <AstronautFlipCard image={astronautImg} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/60"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
