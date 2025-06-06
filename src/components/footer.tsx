// import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Github, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const socialMedia = [
    {
      id: 1,
      icon: <Github />,
      link: "https://github.com/TiagoCoder2022",
    },
    {
      id: 2,
      icon: <Instagram />,
      link: "https://www.instagram.com/_tiagoalves/",
    },
    {
      id: 3,
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/tiago-dev/",
    },
    {
      id: 4,
      icon: <Twitter />,
      link: "https://x.com/TiagoCoder2022",
    },
    {
      id: 5,
      icon: <Mail />,
      link: "mailto:tiagodev.alves@gmail.com",
    },
  ];
  return (
    <footer className="mx-auto max-w-screen-xl px-5 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center mt-16">
        <p className="md:text-base text-sm text-text-secondary font-light">
          © 2025 Tiago Alves. All rights reserved.
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-6 md:mt-0">
          {socialMedia.map((social) => (
            <a
              key={social.id}
              href={social.link}
              className="w-10 h-10 flex justify-center items-center text-text-secondary backdrop-blur-lg saturate-180 bg-opacity-75 bg-zinc-900 rounded-lg border hover:text-text-primary border-white/10 hover:bg-white/10 transition-all"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
