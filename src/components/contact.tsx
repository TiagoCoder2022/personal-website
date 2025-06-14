import { Navigation } from "lucide-react";
import MagicButton from "./ui/magic-button";
import { socialMedia } from "@/app/data";
import Link from "next/link";
import BlurText from "./ui/blur-text";
import { clashDisplay } from "@/lib/fonts";

const Contact = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-5 md:pt-14" id="contact">
      <div className="flex flex-col justify-center rounded-3xl w-full py-10 lg:py-12 bg-bg-800 px-6">
        <div className="flex justify-center flex-col items-center">
          <div className="py-2 px-4 rounded-full bg-bg-600 flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-sky-500"></span>
            </span>

            <p className="text-sm">Available for work</p>
          </div>

          <div className="flex justify-center">
            <BlurText
              delay={150}
              animateBy="words"
              direction="top"
              className={`text-4xl lg:text-5xl max-w-md font-semibold text-center my-5 text-text-primary ${clashDisplay.className}`}
            >
              {"Let's create "}
              <span className="text-[#0070f3]">your</span>
              {" next big idea."}
            </BlurText>
          </div>

          <Link href="/contact" className="mt-5">
            <MagicButton
              title="Let's get in touch"
              icon={<Navigation />}
              position="right"
            />
          </Link>
        </div>
        <div className="flex md:hidden items-center justify-center gap-5 mt-8">
          {socialMedia.map((social) => (
            <a
              key={social.id}
              href={social.link}
              className="flex justify-center items-center size-5 text-text-secondary hover:text-text-primary transition-all"
              target="_blank"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
