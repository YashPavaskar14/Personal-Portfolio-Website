import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import SpaceFooter from "@/components/SpaceFooter";

const Index = () => {
  return (
    <div className="cosmic-gradient min-h-screen">
      <Starfield />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Achievements />
        <Contact />
      </main>
      <SpaceFooter />
    </div>
  );
};

export default Index;
