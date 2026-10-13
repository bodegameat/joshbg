import { site } from "@/lib/content";

const items = [
  {
    title: "Email",
    href: `mailto:${site.email}`,
    label: site.email,
  },
  {
    title: "Phone",
    href: site.phoneHref,
    label: site.phone,
  },
  {
    title: "LinkedIn",
    href: site.linkedin,
    label: site.linkedinLabel,
    external: true,
  },
];

export function Connect() {
  return (
    <section className="connect-section">
      <div className="connect-inner">
        <h2>Let&apos;s connect</h2>
        <div className="accordion">
          {items.map((item, index) => (
            <details
              key={item.title}
              className="accordion-item"
              open={index === 0}
            >
              <summary className="accordion-trigger">
                <span>{item.title}</span>
                <span className="accordion-icon" aria-hidden>
                  +
                </span>
              </summary>
              <div className="accordion-panel">
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </a>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
