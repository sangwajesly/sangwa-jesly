export const Section = ({ children, className = "", id }) => (
  <section 
    id={id} 
    className={`py-20 md:py-40 border-b border-[var(--border)] overflow-hidden ${className}`}
  >
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      {children}
    </div>
  </section>
);
