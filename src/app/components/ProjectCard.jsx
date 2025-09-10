"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ name, desc, href, img }) => {
  return (
    <div className="flex flex-col justify-center place-items-center border border-solid border-white m-6  ">
      <div>
        <Link className="" href={href}>click me</Link>
      </div>
      <Image width={200} height={200} src={img} className="p-6 overflow-auto" />
      <div className="bg-black w-full h-full p-6">
        <h1 className="text-3xl font-semibold">{name}</h1>
        <p className="text-2xl">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
