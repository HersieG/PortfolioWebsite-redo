import React from "react";
import SkillCard from "./SkillCard";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div id="about" className="place-items-center p-16">
      <h1 className="header">
        <span className="border-b-2 border-purple-600">About me</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/*finish hobbies/interest */}
        <p className="text-lg md:text-2xl p-6">
          I am a junior in college majoring in computer science with a strong
          passion for technology and innovation. My goal is to become a full
          stack developer, blending my skills in front-end and back-end
          development to create seamless and impactful digital experiences. I'm
          constantly exploring new technologies, honing my coding abilities, and
          collaborating on projects that challenge and inspire me. Outside of
          academics, I enjoy [insert hobbies/interests] and am always eager to
          connect with like-minded individuals who share a love for programming
          and problem-solving.
        </p>
        <div className="grid grid-cols-3 gap-3  ">
          <SkillCard
            image="/images/python.png"
            name="Python"
            className="col-start-1 row-start-1"
          />
          <SkillCard
            image="/images/java.png"
            name="Java"
            className="col-start-1 row-start-2"
          />
          <SkillCard
            image="/images/cpp.png"
            name="C++"
            className="col-start-2 row-start-1"
          />
          <SkillCard
            image="/images/javascript.png"
            name="Javascript"
            className="col-start-2 row-start-2"
          />
          <SkillCard
            image="/images/html.png"
            name="HTML"
            className="col-start-2 row-start-3"
          />
          <SkillCard
            image="/images/css.png"
            name="CSS"
            className="col-start-3 row-start-1"
          />
          <SkillCard
            image="/images/nextjs.png"
            name="Next.js"
            className="col-start-3 row-start-2"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
