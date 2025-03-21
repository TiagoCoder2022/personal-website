import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
  isHovered: boolean;
  isBlurred: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ProjectCard = ({ title, description, imgSrc, isHovered, isBlurred, onMouseEnter, onMouseLeave }: ProjectCardProps) => {
  return (
    <div 
      className="relative flex-1 group overflow-hidden transition-all duration-300"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Aplicando os efeitos SOMENTE na imagem */}
      <div className="overflow-hidden rounded-xl shadow-md">
        <Image 
          src={imgSrc} 
          height={400}  
          width={400} 
          alt="projects"
          className={`w-full h-[300px] md:h-[350px] object-cover transition-all duration-300 ${
            isHovered ? "scale-105" : "scale-100"
          } ${isBlurred ? "blur-sm" : "blur-none"}`}
        />
      </div>

      <div className="flex flex-row justify-between items-center py-10 gap-6 px-5">
        <div className="text-center md:text-left text-white">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        
        <div className="border-2 border-gray-600 rounded-3xl px-6 py-4 text-white hover:text-black hover:bg-white transition-all duration-300">
          <FiArrowRight className="text-lg md:text-xl transform group-hover:-rotate-45 transition-transform duration-300 ease-in-out"/>
        </div>
        
      </div>      
    </div>
  );
};

export default ProjectCard;
