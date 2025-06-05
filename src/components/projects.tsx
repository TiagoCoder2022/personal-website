"use client"

import { useState } from "react";
import Link from "next/link";
import ProjectCard from "./project-card";
import { projects } from "@/app/data";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-screen-xl mx-auto py-12 md:py-36 px-5" id="projects">
      <div className="flex justify-center flex-col items-center pb-10">
        <h1 className="text-4xl max-w-2xl font-bold text-center">
          Featured <span className="text-[#0070f3]">Projects</span>
        </h1>
        <p className="text-base md:text-lg text-white/80 my-5 text-center max-w-2xl">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance,and user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {projects.map((project, index) => (
          <Link href={`/projects/${project.slug}`} key={project.id}>
            <ProjectCard
              imgCover={project.imgCover}
              title={project.title}
              subtitle={project.subtitle}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
