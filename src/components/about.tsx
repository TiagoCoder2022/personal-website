import Image from "next/image";
import React from "react";
import B1 from "../../public/assets/img/b1.svg";
import Badge from "./ui/badge";

const About = () => {
  const frontendSkills = [
    "React.js",
    "Next.js",
    "Redux",
    "TailwindCSS",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Shadcn",
    "Styled Components",
  ];
  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "REST API",
    "Drizzle ORM",
    "Prisma ORM",
    "Redis",
    "Java",
    "Spring Boot",
  ];
  return (
    <section className="py-20 px-5 max-w-screen-xl mx-auto" id="about">
      <div className="flex justify-center flex-col items-center pb-10">
        <h1 className="text-4xl max-w-2xl font-bold text-center">
          About <span className="text-[#0070f3]">Me</span>
        </h1>
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
          <h2 className="text-4xl tracking-tighter text-center font-medium">
            Passionate Web Developer
          </h2>
          <div className="py-8">
            <p className="text-base text-text-secondary">
              With 2 years of experience in Web Development, I specialize in
              React, Next.js, Typescript, and Node.js. I love crafting
              high-performance web applications, optimizing user experiences,
              and writing clean, maintainable code. Whether it&apos;s building
              dynamic UIs, designing efficient APIs, or improving system
              architecture, I&apos;m always focused on delivering impactful
              solutions.
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
          <h3 className="text-xl font-bold mb-4 text-text-primary">
            📚 Education
          </h3>
          <ul className="list-disc list-inside text-base text-text-secondary space-y-2">
            <li>
              <strong>Graduation: Information Tecnology Management</strong> -
              Universidade Paulista (2012 - 2013)
            </li>
            <li>
              <strong>Relevant Coursework:</strong> Full-Stack Web Development,
              Data Structures, Algorithms, Databases, Software Engineering
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-xl border-white/15 border hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-4 text-text-primary">
            💼 Work Experience
          </h3>
          <div className="space-y-4 text-base text-text-secondary">
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

export default About;
