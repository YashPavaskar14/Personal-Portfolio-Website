import { useEffect, useRef, useState } from "react";

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ w: window.innerWidth, h: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setDimensions({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: (e.clientX / window.innerWidth - 0.5) * 2, y: (e.clientY / window.innerHeight - 0.5) * 2 };
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = dimensions.w;
    canvas.height = dimensions.h;

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * dimensions.w,
      y: Math.random() * dimensions.h,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random(),
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      parallax: Math.random() * 0.5 + 0.2,
    }));

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.2) star.twinkleSpeed *= -1;
        star.opacity = Math.max(0.2, Math.min(1, star.opacity));

        const px = star.x + mx * star.parallax * 15;
        const py = star.y + my * star.parallax * 15;

        ctx.beginPath();
        ctx.arc(px, py, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 255, ${star.opacity})`;
        ctx.fill();

        if (star.size > 1.5) {
          ctx.beginPath();
          ctx.arc(px, py, star.size * 3, 0, Math.PI * 2);
          const g = ctx.createRadialGradient(px, py, 0, px, py, star.size * 3);
          g.addColorStop(0, `rgba(100, 200, 255, ${star.opacity * 0.15})`);
          g.addColorStop(1, "transparent");
          ctx.fillStyle = g;
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animId);
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default Starfield;
