import type { Metadata } from "next";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <div>
        <h1>Let&apos;s connect!</h1>
        <div className="contact-details">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            {site.linkedinLabel}
          </a>
        </div>
      </div>
    </main>
  );
}
