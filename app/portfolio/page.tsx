import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
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
              width={1200}
              height={1200}
              sizes="(max-width: 767px) 100vw, 50vw"
            />
            <span className="label">{project.title}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
