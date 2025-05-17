import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const socialMedia = [
    {
      id: 1,
      icon: <FaGithub />,
      link: "https://github.com/TiagoCoder2022",
    },
    {
      id: 2,
      icon: <FaInstagram />,
      link: "https://www.instagram.com/_tiagoalves/",
    },
    {
      id: 3,
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/tiago-dev/",
    },
  ];
  return (
    <footer>
      <div className="flex flex-col md:flex-row justify-between items-center mt-16">
        <p className="md:text-base text-sm text-white/50 md:font-normal font-light">
          Copyright © 2025 Tiago Alves
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-6 md:mt-0">
          {socialMedia.map((social) => (
            <a
              key={social.id}
              href={social.link}
              className="w-10 h-10 flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-zinc-900 rounded-lg border border-white/10 hover:bg-white/10 transition-all"
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
