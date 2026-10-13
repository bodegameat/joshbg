import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
};

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <div className="portfolio-intro">
        <h1>Work</h1>
        <p>Performance creative across fintech, CPG, and DTC — selected campaigns.</p>
      </div>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="portfolio-card"
          >
            <Image
              src={project.cover}
              alt={project.title}
              width={1400}
              height={1050}
              sizes="(max-width: 767px) 100vw, 50vw"
            />
            <div className="meta">
              <strong>{project.title}</strong>
              <span>{project.role ?? project.headline ?? "Selected work"}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
