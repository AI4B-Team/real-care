import { useEffect } from "react";

export const useFadeUp = () => {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".fade-up");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};
