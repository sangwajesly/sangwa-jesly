export const Section = ({ children, className = "", id }) => (
  <section 
    id={id} 
    className={`py-20 md:py-40 border-b border-[var(--border)] overflow-hidden w-full ${className}`}
  >
    <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 w-full">
      {children}
    </div>
  </section>
);
