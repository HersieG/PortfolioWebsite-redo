import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-bg-700 pb-4 pl-2 flex flex-col justify-center place-items-center gap-4">
      @HersieG
      <div className="flex gap-4">
        <Link href="/">
          <FaLinkedin className=" size-5 sm:size-6 lg:size-[3dvh]" />
        </Link>
        <Link href="/">
          <FaGithub className=" size-5 sm:size-6 lg:size-[3dvh]" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
