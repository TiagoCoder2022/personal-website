"use client";

import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Badge from "./ui/badge";

interface ProjectContentProps {
  title: string;
  subtitle: string;
  imgSrc: string;
  features: {
    title: string;
    description: string;
  }[];
  tags: string[];
  links: {
    title: string;
    url: string;
  }[];
  description: string;
  slug: string;
  date: string;
  overview: string;
}

export default function ProjectContent({
  title,
  imgSrc,
  tags,
  links,
  description,
  features,
  date,
  overview,
}: ProjectContentProps) {
  return (
    <div className="flex flex-col gap-4 pt-28 mx-auto lg:max-w-[1200px]">
      <div className="w-full rounded-lg">
        <div className="relative h-[260px] md:h-[460px] lg:h-[660px] w-full rounded-lg shadow-sm">
          <Image
            src={imgSrc}
            alt={title}
            fill
            sizes="100%"
            className="object-cover object-top rounded-xl"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row shadow-sm mt-8 gap-8">
        <div className="lg:max-w-[700px]">
          <div className="flex justify-between items-center gap-4">
            <h1 className="text-xl md:text-2xl lg:text-5xl font-semibold text-text-primary">
              {title}
            </h1>
            <span className="text-text-secondary text-sm">{date}</span>
          </div>
          <article className="prose prose-purple prose-invert mt-5">
            <p className="text-base text-text-secondary">{description}</p>
          </article>

          <div className="items-center gap-4 my-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-text-primary border-b border-bg-700 pb-2">
              Overview 💻
            </h2>
            <p className="text-base text-text-secondary mt-5">{overview}</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-text-primary border-b border-bg-700 pb-2">
              Features 🚀
            </h2>
            <ul className="mt-5 space-y-3 text-base text-text-secondary">
              {features.map((feat, index) => (
                <li key={index}>
                  <p>
                    <strong className="text-text-primary">{feat.title}</strong>{" "}
                    {feat.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-fit lg:sticky lg:top-8 lg:max-w-[450px]">
          <div className="space-y-8 rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
            {/* Project Links */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-100">
                Project Links
              </h2>
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 transition-colors hover:text-purple-300"
                  >
                    <FaExternalLinkAlt className="h-4 w-4" />
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-100">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
