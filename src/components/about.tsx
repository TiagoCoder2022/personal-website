import Image from 'next/image'
import React from 'react'
import B1 from '../../public/assets/img/b1.svg'
import Badge from "./ui/badge";

const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
  ];
  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "REST API",
  ];
  return (
    <section className="py-20 px-5 max-w-screen-xl mx-auto" id="about">
      <div className="flex flex-wrap gap-3 items-center mb-16 mx-auto max-w-screen-xl">
        <div className="w-8 h-0.5 bg-white"></div>
        <h2 className="text-3xl sm:text-4xl text-[#ABABB5] font-bold">About</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
        <div className="border border-white/15 rounded-xl overflow-hidden hover:-translate-y-1 transition-all">
          <Image
            src={B1}
            alt="Notebook"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="text-center border border-white/15 p-8 rounded-xl overflow-hidden hover:-translate-y-1 transition-all">
          <h2 className="text-5xl tracking-tighter text-center font-medium">
            Bringing Ideas to Life with Code
          </h2>
          <div className="py-8">
            <p className="text-lg text-white/70">
              I&apos;m a Full-Stack Developer specializing in React, Next.js,
              TypeScript, and Node.js. I love crafting high-performance web
              applications, optimizing user experiences, and writing clean,
              maintainable code. Whether it&apos;s building dynamic UIs,
              designing efficient APIs, or improving system architecture,
              I&apos;m always focused on delivering impactful solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Front-end</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Back-end</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 rounded-xl border-white/15 border hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-4">📚 Education</h3>
          <ul className="list-disc list-inside text-base text-white/70 space-y-2">
            <li>
              <strong>Information Tecnology Management</strong> - Universidade
              Paulista (2012 - 2013)
            </li>
            <li>
              Relevant Coursework: Web Development, Data Structures, Algorithms,
              Databases, Software Engineering
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-xl border-white/15 border hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
          <div className="space-y-4 text-base text-white/70">
            <div>
              <h4 className="font-bold">
                Full-Stack developer at Almode (2024 - 2025)
              </h4>
              <p>
                Developed and maintained web applications on a SaaS solution for
                the fashion retail sector, using React.js, TypeScript, Java with
                Spring Boot and PostgreSQL. My responsibilities included
                implementing responsive interfaces, creating and maintaining
                APIs, fixing critical bugs, and optimizing functionalities to
                enhance the user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About
