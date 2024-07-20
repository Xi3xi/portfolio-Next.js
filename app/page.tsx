import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Intro from "@/components/Intro";
import PreProjects from "@/components/PreProjects";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <AuroraBackground className="overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Intro />
        <Grid />
        <PreProjects />
        <Experience />
        <Footer />
      </div>
    </AuroraBackground>
  );
}
