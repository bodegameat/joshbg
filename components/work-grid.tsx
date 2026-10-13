import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";

export function WorkGrid() {
  return (
    <div className="work-index-grid">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/portfolio/${project.slug}`}
          className="work-index-card"
        >
          <Image
            src={project.cover}
            alt={project.title}
            width={1400}
            height={900}
            sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
          />
          <span className="work-index-label">{project.title}</span>
        </Link>
      ))}
    </div>
  );
}
