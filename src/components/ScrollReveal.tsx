"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    // Respect user motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal, .reveal-group > *").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const elements = document.querySelectorAll(".reveal, .reveal-group > *");
    elements.forEach((el) => {
      // If inside a reveal-group, stagger child appearance
      if (el.parentElement?.classList.contains("reveal-group")) {
        const index = Array.from(el.parentElement.children).indexOf(el);
        (el as HTMLElement).style.transitionDelay = `${Math.min(index * 75, 350)}ms`;
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
