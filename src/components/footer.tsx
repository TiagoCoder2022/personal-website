import { FaLocationArrow, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import MagicButton from "./ui/magic-button";


const Footer = () => {
  const socialMedia = [
    {
      id: 1,
      icon: <FaGithub/>,
      link: "https://github.com/TiagoCoder2022"
    },
    {
      id: 2,
      icon: <FaInstagram/>,
      link: "https://www.instagram.com/_tiagoalves/"
    },
    {
      id: 3,
      icon: <FaLinkedinIn/>,
      link: "https://www.linkedin.com/in/tiago-dev/"
    },
  ];
  return ( 
    <footer className="flex flex-col justify-center w-full pt-20 pb-10 max-w-screen-xl mx-auto px-5" id="contact">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-4xl max-w-2xl font-bold text-center">Ready to take <span className="text-purple-300">your</span> digitar presence to the next level?</h1>
        <p className="text-lg text-white/80 md:mt-10 my-5 text-center">Let&apos;s work together to build something great. Get in touch with me today.</p>
        <a href="mailto:tiagonewalves@hotmail.com">
          <MagicButton title="Let's get in touch" icon={<FaLocationArrow/>} position="right"/>
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-16">
        <p className="md:text-base text-sm text-white/50 md:font-normal font-light">Copyright © 2025 Tiago Alves</p>

        <div className="flex items-center md:gap-3 gap-6 mt-6 md:mt-0">
          {socialMedia.map((social) => (
            <a key={social.id} href={social.link} className="w-10 h-10 flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-zinc-900 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              {social.icon}
            </a> 
          ))}
        </div>
      </div>
    </footer>
   );
}
 
export default Footer;