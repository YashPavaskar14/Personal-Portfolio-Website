import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

type Props = {
  image: string;
};

const AstronautFlipCard = ({ image }: Props) => {
  const [flipped, setFlipped] = useState(false);

  // auto flip once
  useEffect(() => {
    const t1 = setTimeout(() => setFlipped(true), 900);
    const t2 = setTimeout(() => setFlipped(false), 2600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div
      className="relative w-full max-w-lg cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={() => setFlipped((v) => !v)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={image}
            alt="Astronaut"
            className="w-full rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-3xl glass flex flex-col items-center justify-center gap-4 text-muted-foreground px-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary" />
            <span>+91 9511634313</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <span>yashpavaskar123@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Solapur, Maharashtra, India</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AstronautFlipCard;
