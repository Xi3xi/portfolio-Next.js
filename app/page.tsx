import Intro from "@/components/Intro";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import Image from "next/image";

export default function Home() {
  return (
    <AuroraBackground className="relative bg-black-100 flex justify-center items-center flex-col 
      overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Intro />
      </div>
    </AuroraBackground>
  );
}
