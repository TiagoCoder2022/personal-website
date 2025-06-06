// import { FaLocationArrow } from "react-icons/fa";
import { Navigation } from "lucide-react";
import MagicButton from "./ui/magic-button";

const Contact = () => {
  return (
    <div
      className="flex flex-col justify-center rounded-2xl w-full py-10 lg:py-16 max-w-screen-xl mx-auto px-5 bg-bg-800"
      id="contact"
    >
      <div className="flex justify-center flex-col items-center">
        <div className="py-2 px-4 rounded-full bg-bg-600 flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-sky-500"></span>
          </span>

          <p className="text-sm">Available for work</p>
        </div>
        <h2 className="text-3xl lg:text-5xl max-w-md font-semibold text-center my-5 text-text-primary">
          Let&apos;s create <span className="text-[#0070f3]">your</span> next
          big idea.
        </h2>

        <a href="mailto:tiagonewalves@hotmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<Navigation />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
