import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="min-h-dvh lg:min-h-[92dvh] flex flex-col items-center justify-center text-center px-6 space-y-6">
      <h1 className="animate-slideInRight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        Hello, I&apos;m{" "}
        <span className="text-purple-600 font-semibold">Hersie</span>
      </h1>
      <h1 className="animate-slideInLeft text-text text-xl sm:text-2xl md:text-4xl lg:text-6xl">
        I am an aspiring full stack developer.
      </h1>
      <section className="flex flex-row justify-center gap-6 pt-2">
        <Link href="https://www.linkedin.com/in/hersie-gonzalez-113a082a8/">
          <FaLinkedin className="hover:-translate-y-1 transition-transform duration-350 hover:text-purple-600 size-10 sm:size-12 lg:size-[6dvh]" />
        </Link>
        <Link href="https://github.com/HersieG">
          <FaGithub className="hover:-translate-y-1 transition-transform duration-350 hover:text-purple-600 size-10 sm:size-12 lg:size-[6dvh]" />
        </Link>
      </section>
      <Link href="/Resume.docx-3.pdf" target="_blank" className="">
        <div className="text-base sm:text-xl md:text-2xl bg-bg-700 p-2 sm:p-3 md:p-4 rounded-2xl border border-border hover:border-purple-600 hover:border-2 transition-all duration-200 text-center w-full">
          {" "}
          Resume
        </div>
      </Link>
    </div>
  );
};

export default Welcome;
