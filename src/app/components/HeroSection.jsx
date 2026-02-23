import React from "react";
import SkillCard from "./SkillCard";

const HeroSection = () => {
  return (
    <div id="about" className="p-6 sm:p-10 xl:p-16">
      <h1 className="header flex justify-center shadow-l mb-8">
        <span className="header-text">About me</span>
      </h1>

      {/* Bio */}
      <p className="text-base sm:text-lg md:text-2xl mb-8 text-center xl:text-left max-w-3xl mx-auto">
        I am a junior in college majoring in computer science with a strong
        passion for technology and innovation. My goal is to become a full stack
        developer, blending my skills in front-end and back-end development to
        create seamless and impactful digital experiences. I'm constantly
        exploring new technologies, honing my coding abilities, and
        collaborating on projects that challenge and inspire me. Outside of
        academics, I enjoy playing piano and guitar and playing chess and am
        always eager to connect with like-minded individuals who share a love
        for programming and problem-solving.
      </p>

      {/* Skill Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:flex xl:flex-wrap gap-4 justify-center">
        <SkillCard image="/images/python.png" name="Python" />
        <SkillCard image="/images/java.png" name="Java" />
        <SkillCard image="/images/cpp.png" name="C++" />
        <SkillCard image="/images/javascript.png" name="Javascript" />
        <SkillCard image="/images/html.png" name="HTML" />
        <SkillCard image="/images/css.png" name="CSS" />
        <SkillCard image="/images/nextjs.png" name="Next.js" />
        
      </div>
    </div>
  );
};

export default HeroSection;
