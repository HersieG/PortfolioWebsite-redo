import Image from "next/image";
import React from "react";

const SkillCard = ({ image, name, className }) => {
  return (
    <div
      className={`flex flex-col skillCard ${className} h-20 md:h-60 justify-center text-xl `}
    >
      <Image width={700} height={1000} src={image}></Image>
      {name}
    </div>
  );
};

export default SkillCard;
