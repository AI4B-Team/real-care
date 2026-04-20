import { ReactNode } from "react";

interface Props {
  label: string;
  title: string;
  updated: string;
  children: ReactNode;
}

const LegalPage = ({ label, title, updated, children }: Props) => (
  <div className="bg-background">
    {/* Hero */}
    <div className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 py-14">
      <div className="max-w-[860px] mx-auto">
        <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3.5">{label}</div>
        <h1 className="font-display font-black leading-[1.1] text-warm-800 text-[clamp(2rem,4vw,3rem)] mb-3">
          {title}
        </h1>
        <p className="text-[0.82rem] text-warm-400">Last updated: {updated}</p>
      </div>
    </div>
    {/* Content */}
    <div className="px-5 md:px-12 py-14">
      <div className="max-w-[860px] mx-auto prose-legal">
        {children}
      </div>
    </div>
  </div>
);

export const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="font-display font-bold text-warm-800 text-[1.3rem] mt-10 mb-3">{children}</h2>
);

export const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="font-display font-semibold text-warm-800 text-[1.05rem] mt-6 mb-2">{children}</h3>
);

export const P = ({ children }: { children: ReactNode }) => (
  <p className="text-[0.88rem] text-warm-600 leading-[1.8] mb-4">{children}</p>
);

export const UL = ({ children }: { children: ReactNode }) => (
  <ul className="text-[0.88rem] text-warm-600 leading-[1.8] mb-4 pl-5 space-y-1 list-disc">{children}</ul>
);

export const LI = ({ children }: { children: ReactNode }) => <li>{children}</li>;

export default LegalPage;
