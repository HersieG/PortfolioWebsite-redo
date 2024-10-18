"use client";
import React from "react";
import LinkTab from "./LinkTab";
const LINKS = [
  {
    name: "About Me",
    ref: "/aboutme",
    key: 1,
  },
  {
    name: "Contact",
    ref: "/contact",
    key: 2,
  },
  {
    name: "Projects",
    ref: "/projects",
    key: 3,
  },
];
const NavBar = () => {
  return (
    <>
      <div className="z-40 top-0 sticky bg-black m-0 text-2xl p-4 flex flex-row justify-between h-[8vh] items-center ">
        NavBar
        <div>
          {LINKS.map((link) => (
            <LinkTab key={link.key} link={link.ref} name={link.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
