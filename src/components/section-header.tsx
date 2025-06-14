import { motion, useInView } from "framer-motion";
import BlurText from "./ui/blur-text";
import { useRef } from "react";
 // ajuste o caminho se necessário

type SectionHeaderProps = {
  title: string;
  highlightedWord?: string;
  description?: string;
  className?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  highlightedWord,
  description,
  className = "",
}) => {
  const paragraphRef = useRef(null);
  const isInView = useInView(paragraphRef, { once: true });
  
  const [before, after] = highlightedWord
    ? title.split(new RegExp(`\\b${highlightedWord}\\b`))
    : [title, ""];

  return (
    <div
      className={`flex justify-center flex-col items-center pb-10 ${className}`}
    >
      <BlurText
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl max-w-2xl font-bold text-center"
      >
        {before}
        {highlightedWord && (
          <span className="text-[#0070f3]">{highlightedWord}</span>
        )}
        {after}
      </BlurText>

      {description && (
        <motion.p
          ref={paragraphRef}
          className="text-base text-text-secondary my-5 text-center max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
