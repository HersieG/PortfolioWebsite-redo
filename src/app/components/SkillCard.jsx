import Image from "next/image";
import React from "react";

const SkillCard = ({ image, name }) => {
  return (
    <div className="skillCard flex flex-col items-center justify-center w-full aspect-square max-w-40 mx-auto text-sm sm:text-base md:text-lg ">
      <Image width={55} height={55} src={image} alt={name} />
      <span className="mt-2 font-medium">{name}</span>
    </div>
  );
};

export default SkillCard;
