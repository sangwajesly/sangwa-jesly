export const Testimonial = ({ testimony, name, position }) => {
  return (
    <article className="mx-auto w-full max-w-3xl rounded-[2rem] border border-[var(--accent)] bg-[rgba(255,255,255,0.05)] p-10 shadow-[0_25px_80px_rgba(0,0,0,0.25)]">
      <span className="text-[4rem] leading-none text-[var(--accent)]">“</span>
      <p className="mt-6 text-base leading-8 text-[var(--fg)]">{testimony}</p>
      <div className="mt-10 flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] text-2xl font-bold text-white">
          {name.charAt(0)}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="mt-1 text-sm text-[var(--muted)]">{position}</p>
        </div>
      </div>
    </article>
  );
};
