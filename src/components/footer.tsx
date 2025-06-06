import { socialMedia } from "@/app/data";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-screen-xl px-5 py-4 md:py-10">
      <div className="flex flex-col md:flex-row justify-between items-center mt-16">
        <p className="md:text-base text-sm text-text-secondary font-light">
          © 2025 Tiago Alves. All rights reserved.
        </p>

        <div className="hidden md:flex items-center gap-6 mt-6 md:mt-0">
          {socialMedia.map((social) => (
            <a
              key={social.id}
              href={social.link}
              className="flex justify-center items-center text-text-secondary hover:text-text-primary transition-all"
              target="_blank"
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
