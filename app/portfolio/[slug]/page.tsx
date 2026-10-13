import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAdjacentProjects,
  getProject,
  projects,
} from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <main className="project-page">
      {project.role && (
        <p className="project-meta">
          {project.title} · Role: {project.role}
        </p>
      )}

      <h1>{project.title}</h1>

      {project.headline && project.headline !== project.title && (
        <p className="headline">{project.headline}</p>
      )}

      <div className="project-cover">
        <Image
          src={project.cover}
          alt={project.title}
          width={1600}
          height={1000}
          priority
        />
      </div>

      {project.paragraphs.map((p) => (
        <p key={p.slice(0, 40)} className="body">
          {p}
        </p>
      ))}

      {project.sections?.map((section) => (
        <section key={section.title} className="project-section">
          <h2>{section.title}</h2>
          <p className="body">{section.body}</p>
        </section>
      ))}

      {project.gallery.length > 0 && (
        <div className="project-gallery">
          {project.gallery.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={1080}
              height={1080}
              sizes="(max-width: 767px) 100vw, 33vw"
            />
          ))}
        </div>
      )}

      <nav className="project-nav" aria-label="Project pagination">
        <div>
          {prev ? (
            <Link href={`/portfolio/${prev.slug}`}>← {prev.title}</Link>
          ) : (
            <span />
          )}
        </div>
        <div>
          {next ? (
            <Link href={`/portfolio/${next.slug}`}>{next.title} →</Link>
          ) : (
            <span />
          )}
        </div>
      </nav>
    </main>
  );
}
