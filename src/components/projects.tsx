"use client"

import { useState } from "react";
import Link from "next/link";
import ProjectCard from "./project-card";
import { projects } from "@/app/data";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-screen-xl mx-auto py-12 md:py-36 px-5" id="projects">
      <div className="flex flex-wrap gap-3 items-center mb-16">
        <div className="w-8 h-0.5 bg-white"></div>
        <h2 className="text-3xl sm:text-4xl text-[#ABABB5] font-bold">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {projects.map((project, index) => (
          <Link href={`/projects/${project.slug}`} key={project.id}>
            <ProjectCard
              imgSrc={project.imgSrc}
              title={project.title}
              subtitle={project.subtitle}
              isHovered={hoveredIndex === index}
              isBlurred={hoveredIndex !== null && hoveredIndex !== index}
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
