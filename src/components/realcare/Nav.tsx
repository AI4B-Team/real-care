const Nav = () => (
  <nav className="bg-background border-b border-warm-100 flex items-center justify-between px-5 md:px-12 h-16 sticky top-0 z-50 shadow-[0_1px_0_hsl(var(--warm-100))]">
    <a href="#" className="font-display text-2xl font-black tracking-wide text-warm-800 no-underline">
      Real<span className="text-red">Care</span>
    </a>
    <div className="hidden md:flex items-center gap-1">
      <a href="#men" className="text-[0.82rem] font-semibold text-warm-800 px-3.5 py-1.5 rounded-md hover:bg-red/[0.07] hover:text-red transition-colors">Men</a>
      <a href="#women" className="text-[0.82rem] font-semibold text-warm-800 px-3.5 py-1.5 rounded-md hover:bg-red/[0.07] hover:text-red transition-colors">Women</a>
      <div className="w-px h-[18px] bg-warm-200 mx-1" />
      <a href="#health-check" className="text-[0.82rem] font-medium text-warm-600 px-3.5 py-1.5 rounded-md hover:bg-warm-50 hover:text-warm-800 transition-colors">Health Check</a>
      <a href="#how" className="text-[0.82rem] font-medium text-warm-600 px-3.5 py-1.5 rounded-md hover:bg-warm-50 hover:text-warm-800 transition-colors">How It Works</a>
      <a href="#" className="text-[0.82rem] font-medium text-warm-600 px-3.5 py-1.5 rounded-md hover:bg-warm-50 hover:text-warm-800 transition-colors">Our Doctors</a>
      <a href="#" className="text-[0.82rem] font-medium text-warm-600 px-3.5 py-1.5 rounded-md hover:bg-warm-50 hover:text-warm-800 transition-colors">Pricing</a>
    </div>
    <div className="flex items-center gap-2">
      <a href="#" className="hidden sm:inline-block text-[0.8rem] font-medium text-warm-600 px-3.5 py-2">Log In</a>
      <a href="#health-check" className="bg-red hover:bg-red-dark text-primary-foreground text-[0.8rem] font-semibold px-5 py-2.5 rounded-md transition-colors">
        Get Started →
      </a>
    </div>
  </nav>
);

export default Nav;
