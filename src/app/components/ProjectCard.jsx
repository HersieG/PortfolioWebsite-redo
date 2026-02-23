"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, gitUrl, websiteURL }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-[50px] shadow-l flex flex-col h-full">
      {/* Image */}
      <div className="rounded-t-[50px] overflow-hidden h-52 md:h-60 relative group shrink-0">
        <Image src={imgUrl} alt={title} fill className="object-cover" />
      </div>

      {/* Card body */}
      <div className="text-white rounded-b-[50px] bg-[#181818] py-6 px-6 border-t border-gray-400 flex flex-col grow">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] text-sm md:text-base grow">
          {expanded ? (
            description
          ) : (
            <>
              {description.slice(0, 400)}
              {description.length > 400 && (
                <button
                  onClick={() => setExpanded(true)}
                  className="text-purple-400 hover:text-purple-300 ml-1 font-medium"
                >
                  ...see more
                </button>
              )}
            </>
          )}
          {expanded && (
            <button
              onClick={() => setExpanded(false)}
              className="text-purple-400 hover:text-purple-300 ml-2 font-medium"
            >
              see less
            </button>
          )}
        </p>

        <div className="flex justify-center items-center mt-6 gap-4">
          <div className="bg-bg-600 w-fit p-2 rounded-2xl shadow-m">
            <Link href={gitUrl}>GitHub</Link>
          </div>
          {websiteURL && (
            <div className="bg-bg-600 w-fit p-2 rounded-2xl shadow-m">
              <Link href={websiteURL}>Website</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
