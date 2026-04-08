export const Grid = ({ children, className = "" }) => (
  <div className={`grid grid-cols-4 md:grid-cols-12 gap-6 md:gap-10 ${className}`}>
    {children}
  </div>
);
