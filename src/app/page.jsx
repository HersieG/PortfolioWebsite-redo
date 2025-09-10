import Image from "next/image";
import Welcome from "./components/Welcome";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

import Projectsection from "./components/Projectsection";
export default function Home() {
  return (
    <div className="min-h-screen relative">
      <NavBar />
      <Welcome />
      <HeroSection />
      <Projectsection />
    </div>
  );
}
