"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    const radius = 100;
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
      const { currentTarget, clientX, clientY } = e;
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${
                visible ? radius + "px" : "0px"
              } circle at ${mouseX}px ${mouseY}px,
              #3b82f6,
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-lg p-[2px] transition duration-300"
      >
        <textarea
          className={cn(
            `flex min-h-[100px] w-full rounded-md border border-white/15 bg-bg-900 px-3 py-2 text-sm placeholder:text-neutral-400
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]
             disabled:cursor-not-allowed disabled:opacity-50
             text-white dark:placeholder-text-text-secondary dark:shadow-[0px_0px_1px_1px_#404040] resize-none`,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);

TextArea.displayName = "TextArea";

export { TextArea };
