import Image from "next/image";
import Welcome from "./components/Welcome";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

import Projectsection from "./components/Projectsection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen relative text-text bg-bg-900">
      <NavBar />
      <Welcome />
      <HeroSection />
      <Projectsection />
      <Footer/>
    </div>
  );
}
