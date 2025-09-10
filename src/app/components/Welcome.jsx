import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="lg:h-[92dvh] h-[100dvh] text-center place-content-center text-2xl lg:text-6xl space-y-6 ">
      <h1 className="animate-slideInRight">
        Hello, I'm <span className="text-purple-600 font-semibold">Hersie</span>
      </h1>
      <h1 className="animate-slideInLeft">
        I am an aspiring full stack developer.
      </h1>
      <section className="place-self-center flex flex-row gap-4">
        <Link href="/">
          <FaLinkedin className="hover:-translate-y-1 transition-transform duration-[350ms] hover:text-purple-600  size-[6dvh] " />
        </Link>
        <Link href="/">
          <FaGithub className="hover:-translate-y-1 transition-transform duration-[350ms] hover:text-purple-600  size-[6dvh] " />
        </Link>
      </section>
    </div>
  );
};

export default Welcome;
