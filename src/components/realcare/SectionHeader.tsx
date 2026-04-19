import { ReactNode } from "react";

interface Props {
  label: string;
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
  className?: string;
  subClassName?: string;
}

const SectionHeader = ({ label, title, sub, align = "center", className = "", subClassName = "" }: Props) => {
  const isCenter = align === "center";
  return (
    <div className={`${isCenter ? "text-center" : ""} ${className}`}>
      <div className={`inline-flex items-center gap-2 text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3.5 ${isCenter ? "justify-center" : ""}`}>
        {label}
      </div>
      <h2 className="font-display font-black leading-[1.1] text-warm-800 text-[clamp(1.9rem,3.5vw,2.8rem)]">
        {title}
      </h2>
      {sub && (
        <p className={`text-[0.88rem] text-warm-600 leading-[1.75] mt-3 ${subClassName || (isCenter ? "max-w-[460px] mx-auto" : "max-w-[460px]")}`}>
          {sub}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
