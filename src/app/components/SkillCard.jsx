import Image from "next/image";
import React from "react";

const SkillCard = ({ image, name }) => {
  return (
    <div
      className={`flex flex-col skillCard h-40 w-60 justify-center text-xl mb-6`}
    >
      <Image width={75} height={75} src={image}></Image>
      {name}
    </div>
  );
};

export default SkillCard;
