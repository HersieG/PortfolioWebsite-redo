import Image from "next/image";
import Welcome from "./components/Welcome";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-400 to-gray-800">
      <NavBar />
      <Welcome />
      <HeroSection />
    </div>
  );
}
