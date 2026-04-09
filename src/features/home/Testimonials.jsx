import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Testimonial } from "../../components/Testimonial";

const testimonials = [
  {
    testimony:
      "Working with Sangwa was an absolute pleasure. He understood our vision perfectly and transformed it into a beautiful, functional product. His attention to detail is unmatched.",
    name: "Michael Torres",
    position: "Product Manager at Innovation Labs",
  },
  {
    testimony:
      "Sangwa delivered exceptional work on our AI-powered platform. His technical expertise and design sensibility are truly impressive. The project was completed ahead of schedule with outstanding quality.",
    name: "Sarah Chen",
    position: "CEO, TechVentures at TechVentures Inc.",
  },
  {
    testimony:
      "The brand identity Sangwa created for us exceeded all expectations. His creative vision combined with technical execution skills make him a rare find in the industry.",
    name: "Emily Rodriguez",
    position: "Marketing Director at CreativeFlow Agency",
  },
];

export const TestimonialsList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  const handlePrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-mono text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
            Testimonials
          </p>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Client feedback that speaks for itself
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
            Real reviews from teams and founders who trusted Sangwa with their
            digital products.
          </p>
        </div>

        <div
          className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[rgba(255,255,255,0.05)] px-4 py-10 shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:px-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex"
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full px-4 py-4 sm:px-6"
              >
                <Testimonial {...testimonial} />
              </div>
            ))}
          </motion.div>

          <button
            onClick={handlePrevious}
            aria-label="Previous testimonial"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.05)] p-3 text-[var(--accent)] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:bg-[var(--accent)] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.05)] p-3 text-[var(--accent)] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:bg-[var(--accent)] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full transition ${
                index === activeIndex
                  ? "bg-[var(--accent)] shadow-[0_0_0_6px_rgba(255,85,0,0.15)]"
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
