"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does a project take?",
    a: "It depends on the size. A set of flyers can take a few days. A brand identity or website usually takes a few weeks. I'll give you a clear timeline before we start.",
  },
  {
    q: "How much does it cost?",
    a: "Every project is different, so I give you a fixed quote after we talk.",
  },
  {
    q: "What do I need to prepare?",
    a: "Just tell me about your business, who your customers are, and anything you already have, like a logo, colours or photos. I'll guide you on the rest.",
  },
  {
    q: "Can I ask for changes?",
    a: "Yes. I include rounds of revisions in every project so we can get things right.",
  },
  {
    q: "Can you help my business figure out where to use AI or automations?",
    a: "Yes. Not every business problem needs AI. I can look at your workflow, identify repetitive or information-heavy processes, and recommend where AI or automation could genuinely create value.",
  },
  {
    q: "Do you work with clients remotely or internationally?",
    a: "Yes. I collaborate smoothly with clients anywhere in the world using WhatsApp, email, and video calls.",
  },
  {
    q: "How do we start?",
    a: "Send me a message on WhatsApp or email. Tell me what you need and I'll reply with the next steps.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-border">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-6 text-left gap-4"
            aria-expanded={openIndex === i}
          >
            <span className="text-lg md:text-xl font-medium">{faq.q}</span>
            <ChevronDown
              size={20}
              className={
                "shrink-0 text-muted transition-transform duration-200" +
                (openIndex === i ? " rotate-180" : "")
              }
            />
          </button>
          {openIndex === i && (
            <div className="pb-6 text-muted text-base md:text-lg leading-relaxed max-w-2xl">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
