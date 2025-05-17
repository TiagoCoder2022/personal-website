import { ReactNode } from "react";

interface BadgeProsp {
  children: ReactNode
}

const Badge = ({children}: BadgeProsp) => {
  return ( 
    <span className="border border-purple-700/50 bg-purple-900/30 text-purple-200 py-1 px-3 rounded-full text-sm hover:bg-purple-700 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
      {children}
    </span>
  );
}
 
export default Badge;