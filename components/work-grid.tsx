import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";

/** Tile shapes for an imperfect, agency-style mosaic */
const TILE_SHAPES = [
  "wide",
  "tall",
  "square",
  "wide",
  "portrait",
  "square",
  "tall",
  "wide",
  "portrait",
  "square",
] as const;

export function WorkGrid() {
  return (
    <div className="work-index-grid">
      {projects.map((project, index) => {
        const shape = TILE_SHAPES[index % TILE_SHAPES.length];
        return (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className={`work-index-card tile-${shape}`}
          >
            <Image
              src={project.cover}
              alt={project.title}
              width={1400}
              height={900}
              sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 40vw"
            />
            <span className="work-index-label">{project.title}</span>
          </Link>
        );
      })}
    </div>
  );
}
