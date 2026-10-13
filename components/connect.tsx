"use client";

import { useState } from "react";
import { site } from "@/lib/content";

const items = [
  {
    title: "Email",
    content: (
      <a href={`mailto:${site.email}`}>{site.email}</a>
    ),
  },
  {
    title: "Phone",
    content: <a href={site.phoneHref}>{site.phone}</a>,
  },
  {
    title: "LinkedIn",
    content: (
      <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
        {site.linkedin}
      </a>
    ),
  },
];

export function Connect() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="connect-section">
      <h2>Let&apos;s Connect</h2>
      <div className="accordion">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.title} className={`accordion-item ${isOpen ? "open" : ""}`}>
              <button
                type="button"
                className="accordion-trigger"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.title}</span>
                <span className="accordion-icon" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && <div className="accordion-panel">{item.content}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
