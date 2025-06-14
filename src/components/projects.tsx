"use client"

import { useState } from "react";
import Link from "next/link";
import ProjectCard from "./project-card";
import { projects } from "@/app/data";
import SectionHeader from "./section-header";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-screen-xl mx-auto py-12 md:py-28 px-5" id="projects">
      <SectionHeader
        title="Featured Projects"
        highlightedWord="Projects"
        description="Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience."
      />

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
