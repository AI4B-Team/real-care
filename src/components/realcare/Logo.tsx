interface LogoProps {
  href?: string;
  className?: string;
}

const Logo = ({ href = "#", className = "" }: LogoProps) => (
  <a
    href={href}
    className={`no-underline block flex-shrink-0 relative top-[18px] ${className}`}
    aria-label="Real Care home"
  >
    <div className="bg-red w-[140px] p-[7px]">
      <div className="border-[2.5px] border-primary-foreground py-1.5 px-[18px] flex flex-col items-center">
        <span className="font-body text-[2.1rem] font-black text-primary-foreground tracking-[0.05em] leading-none text-center block">
          REAL
        </span>
        <span className="font-body text-[0.52rem] font-bold tracking-[0.3em] text-primary-foreground uppercase text-center block mt-[3px]">
          CARE
        </span>
      </div>
    </div>
  </a>
);

export default Logo;
