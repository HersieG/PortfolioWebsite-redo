"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

const DATA = [
  {
    name: "Todo list",
    description:
      "A full-stack collaborative to-do list app featuring Google OAuth authentication via NextAuth.js, real-time " +
      "task sharing powered by WebSockets, and a relational database built " +
      "with Prisma to manage tasks, groups, and shared access.",
    gitUrl: "https://github.com/HersieG/ToDo-list-web-app",
    imgUrl: "/images/todoList.png",
    key: 1,
  },
  {
    name: "Number Guessing Game",
    description:
      "A simple and fun browser-based game built with HTML, CSS, and JavaScript. " +
      'The computer randomly picks a number and challenges you to guess it, giving you "too high" or "too low" hints ' +
      "after each attempt until you find the answer. No installs or frameworks needed — just open it in your browser and play.",
    gitUrl: "https://github.com/HersieG/Number-Guessing-Game",
    websiteURL: "https://number-guessing-game-rust-chi.vercel.app/",
    imgUrl: "/images/numberGuessing.png",
    key: 2,
  },
  {
    name: "LockedIn",
    description:
      "LockIn is a LinkedIn-inspired networking platform built for computer science students. " +
      "Upload your resume and let our AI recommend personalized job listings, help you tackle LeetCode problems, " +
      "and prep you for technical interviews — all in one place. Built with the MERN stack, LockIn gives CS students the " +
      "tools they need to break into the tech industry.",
    gitUrl: "https://github.com/arisal11/LockedIn",
    imgUrl: "/images/lockIn.png",
    key: 3,
  },
  {
    name: "Sandwhich Maker API",
    description:
      "A lightweight REST API built with FastAPI and Uvicorn in Python that handles " +
      "sandwich and customer management. Supports creating, reading, updating, and deleting both sandwiches " +
      "and customers through clean and simple endpoints. FastAPI's automatic documentation makes it easy to test " +
      "and explore the API straight from the browser — a great example of building a fast and modern backend with Python.",
    gitUrl: "https://github.com/cpericli/Group-1/tree/main",
    imgUrl: "/images/sandwhichAPI.png",
    key: 4,
  },
  {
    name: "React Blog App",
    description:
      "A responsive blog application built with React that fetches and displays posts from a REST API. " +
      "Features client-side authentication using localStorage with protected commenting — only logged in users " +
      "can leave comments. Demonstrates core React concepts including hooks, state management, and conditional rendering.",
    gitUrl: "https://github.com/HersieG/react-blog-app",
    websiteURL: "https://react-blog-app-self.vercel.app/",
    imgUrl: "/images/blogApp.png",
    key: 5,
  },
];

const ProjectSection = () => {
  return (
    <div id="projects" className="px-6 sm:px-10 xl:px-16 py-12">
      <h1 className="header flex justify-center shadow-l mb-10">
        <span className="header-text">Projects</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {DATA.map((project) => (
          <ProjectCard
            key={project.key}
            title={project.name}
            description={project.description}
            websiteURL={project.websiteURL}
            gitUrl={project.gitUrl}
            imgUrl={project.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
