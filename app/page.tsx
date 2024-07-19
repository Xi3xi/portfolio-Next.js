import Grid from "@/components/Grid";
import Intro from "@/components/Intro";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <AuroraBackground className="bg-black-100 overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            {name: 'Home', link: '/', icon: <FaHome />}
          ]}
        />
        <Intro />
        <Grid />
      </div>
    </AuroraBackground>
  );
}
