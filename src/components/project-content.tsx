'use client';

import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Badge from './ui/badge';


interface ProjectContentProps {
  title: string;
  subtitle: string;
  imgSrc: string;
  features: string[];
  tags: string[];
  links: {
    title: string;
    url: string;
  }[];
  description: string;  
  slug: string;
  date: string;
}

export default function ProjectContent({
  title,  
  imgSrc,
  tags,
  links,
  description, 
  features,
  date
}: ProjectContentProps) {
  return (      
    <div className="flex flex-col gap-4 p-0 ">     
      <div className="w-full rounded-lg">
        <div className="relative h-[460px] w-full rounded-lg shadow-sm">
          <Image
            src={imgSrc}
            alt={title}
            fill
            sizes="100%"
            className="object-cover md:rounded-xl"
          />
        </div>
      </div>      
      
      <div className="flex w-full flex-row shadow-sm mt-5 gap-8">        
        <div className="">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold text-gray-100">{title}</h1>
            <span className="text-gray-400">{date}</span>
          </div>
          <article className="prose prose-purple prose-invert mt-6 max-w-none">
            <p className="text-lg text-gray-300">{description}</p>
          </article>

          <div className="mt-3">
            <h2 className="text-2xl font-bold">Features</h2>
            <ul className="mt-2">
              {features.map((feat, index) => (
                <li key={index}>{feat}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="h-fit lg:sticky lg:top-8">
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
                  <Badge
                    key={tag}                   
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>    
  );
}