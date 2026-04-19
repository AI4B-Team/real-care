const Positioning = () => (
  <section className="bg-warm-800 px-5 md:px-12 py-14 text-center">
    <div className="max-w-[920px] mx-auto fade-up">
      <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-4">The Honest Alternative</div>
      <p className="font-display font-black text-primary-foreground leading-[1.2] text-[clamp(1.4rem,2.6vw,2.1rem)]">
        Unlike <span className="text-red">Hims</span> and <span className="text-red">Ro</span>, Real Care charges{" "}
        <span className="underline decoration-red decoration-4 underline-offset-4">zero membership fees</span>.
      </p>
      <p className="text-[0.95rem] text-primary-foreground/75 mt-4 leading-[1.7]">
        One price includes your doctor, your prescription, and free shipping to your door.
      </p>
    </div>
  </section>
);

export default Positioning;
