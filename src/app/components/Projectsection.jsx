"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
const DATA = [
  {
    name: "project1",
    description: "desc for p1",
    ref: "/",
    img: "/public/images/python.png",
    key: 1,
  },
  {
    name: "project2",
    description: "desc for p2",
    ref: "/",
    img: "/public/images/python.png",
    key: 2,
  },
  {
    name: "project3",
    description: "desc for p3",
    ref: "/",
    img: "/public/images/python.png",
    key: 3,
  },
];
const Projectsection = () => {
  return (
    <div className="flex flex-col justify-center place-items-center">
      <div className="header">
        <span className="header-text">Projects</span>
      </div>
      <ProjectCard
        name="project1"
        desc="blahblahblah"
        href="/"
        img="/images/python.png"
      />
      <div></div>
    </div>
  );
};

export default Projectsection;
