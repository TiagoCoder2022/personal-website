import { ReactNode } from "react";

interface MagicButtonProps {
  title: string;
  icon?: ReactNode;
  position?: "left" | "right";
  handlerClick?: () => void;
  otherClasses?: string;
}

const MagicButton = ({
  title,
  icon,
  position,
  handlerClick,
  otherClasses,
}: MagicButtonProps) => {
  return (
    <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] md:w-60">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-bg-900 px-7 py-3 text-base font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
        onClick={handlerClick}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
