import { motion } from "framer-motion";

const SpaceFooter = () => {
  return (
    <footer className="relative py-16 px-4 border-t border-border/20">
      <div className="container mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-sm italic mb-4"
        >
          "The cosmos is within us. We are made of star-stuff." — Carl Sagan
        </motion.p>
        <p className="text-muted-foreground/50 text-xs font-display tracking-widest uppercase">
          © {new Date().getFullYear()} Yashraj Pavaskar · Built with curiosity
        </p>
      </div>
    </footer>
  );
};

export default SpaceFooter;
