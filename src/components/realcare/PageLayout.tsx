import { ReactNode, useEffect } from "react";
import Announce from "./Announce";
import Nav from "./Nav";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
  noIndex?: boolean;
  minimalFooter?: boolean;
}

const PageLayout = ({ children, title, description, noIndex, minimalFooter }: Props) => {
  useEffect(() => {
    if (title) document.title = `${title} | Real Care`;
    if (description) {
      let el = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.name = "description"; document.head.appendChild(el); }
      el.content = description;
    }
    if (noIndex) {
      let el = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.name = "robots"; document.head.appendChild(el); }
      el.content = "noindex, nofollow";
    }
    window.scrollTo(0, 0);
    const els = document.querySelectorAll<HTMLElement>(".fade-up");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-visible"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [title]);

  return (
    <div>
      <Announce />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
