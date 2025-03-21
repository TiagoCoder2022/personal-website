"use client"
import { useState } from "react";
import ProjectCard from "./project-card";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    { imgSrc: "/assets/img/project-1.png", title: "Fsw Store", description: "Full-Stack web application" },
    { imgSrc: "/assets/img/project-2.png", title: "Fsw Foods", description: "Full-Stack web application" },
    { imgSrc: "/assets/img/project-3.png", title: "Fsw Trips", description: "Full-Stack web application" },
    { imgSrc: "/assets/img/project-4.png", title: "Finance AI", description: "Full-Stack web application" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-12 md:py-36 px-5" id="projects">
      <div className="flex flex-wrap gap-3 items-center mb-16">
        <div className="w-8 h-0.5 bg-white"></div>
        <h2 className="text-3xl sm:text-4xl text-[#ABABB5] font-bold">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
            isHovered={hoveredIndex === index}
            isBlurred={hoveredIndex !== null && hoveredIndex !== index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
