import Image from 'next/image'
import React from 'react'
import B1 from '../../public/assets/img/b1.svg'
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'

const About = () => {
  return (    
    <div className="py-20 px-5">
      <div className="flex flex-wrap gap-3 items-center mb-16 mx-auto max-w-screen-xl">
        <div className="w-8 h-0.5 bg-white"></div>
        <h2 className="text-3xl sm:text-4xl text-[#ABABB5] font-bold">About</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly gap-20 max-w-screen-xl mx-auto">
        <div className="border border-white/15 rounded-xl overflow-hidden">
          <Image src={B1} alt='Notebook' width={400} height={400} className="object-cover w-full h-full"/>
        </div>
        <div className="text-center max-w-lg">
          <h2 className="text-5xl tracking-tighter text-center font-medium">Bringing Ideas to Life with Code</h2>
          <div className="py-8">
            <p className="text-lg text-white/70">
              I'm a Full-Stack Developer specializing in React, Next.js, TypeScript, and Node.js. I love crafting high-performance web applications, optimizing user experiences, and writing clean, maintainable code. Whether it's building dynamic UIs, designing efficient APIs, or improving system architecture, I'm always focused on delivering impactful solutions.
            </p>
            <br/>
            <p className="text-lg text-white/70">
              Passionate about clean code, continuous learning, and transforming ideas into reality, I’m always up for new challenges. Let&apos;s build something amazing together!
            </p>
          </div>
          <div className="flex flex-row gap-8 justify-center">
            <a 
              className="border border-white/50 px-2 py-2 rounded-lg hover:bg-white hover:text-black transform duration-300 cursor-pointer"
              href="https://github.com/TiagoCoder2022"
              target="_blank"
            >
              <FiGithub size={25}/>
            </a>
            <a 
              className="border border-white/50 px-2 py-2 rounded-lg hover:bg-white hover:text-black transform duration-300 cursor-pointer"
              href="https://linkedin.com/in/tiago-dev"
              target="_blank"
            >
              <FiLinkedin size={25}/>
            </a>
            <a 
              className="border border-white/50 px-2 py-2 rounded-lg hover:bg-white hover:text-black transform duration-300 cursor-pointer"
              href="https://instagram.com/_tiagoalves"
              target="_blank"
            >
              <FiInstagram size={25}/>
            </a>
          </div>
        </div>
        
      </div>      
    </div>
  )
}

export default About
