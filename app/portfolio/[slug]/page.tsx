import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectInfo } from "@/components/project-info";
import { VideoEmbed } from "@/components/video-embed";
import {
  getAdjacentProjects,
  getProject,
  projects,
  type ProjectVideo,
} from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title };
}

function chunkByAspect(videos: ProjectVideo[]) {
  const landscape = videos.filter((v) => v.aspect > 1.2);
  const rest = videos.filter((v) => v.aspect <= 1.2);
  return { landscape, rest };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const { landscape, rest } = chunkByAspect(project.videos);
  const hero = landscape[0] ?? rest[0];
  const remainingVideos = hero
    ? [...landscape, ...rest].filter((v) => v.src !== hero.src)
    : [];

  const verticalish = remainingVideos.filter((v) => v.aspect <= 1.05);
  const wide = remainingVideos.filter((v) => v.aspect > 1.05);

  return (
    <main className="project-page">
      <ProjectInfo project={project} />

      <div className="project-media">
        {hero && (
          <div className="media-hero media-cell">
            <VideoEmbed
              src={hero.src}
              type={hero.type}
              aspect={hero.aspect}
              title={`${project.title} hero`}
            />
          </div>
        )}

        {wide.map((video, index) => (
          <div key={`wide-${video.src}`} className="media-row media-row-1">
            <div className="media-cell">
              <VideoEmbed
                src={video.src}
                type={video.type}
                aspect={video.aspect}
                title={`${project.title} ${index + 2}`}
              />
            </div>
          </div>
        ))}

        {verticalish.length > 0 && (
          <div
            className={`media-row ${
              verticalish.length >= 3
                ? "media-row-3"
                : verticalish.length === 2
                  ? "media-row-2"
                  : "media-row-1"
            }`}
          >
            {verticalish.map((video, index) => (
              <div key={video.src} className="media-cell">
                <VideoEmbed
                  src={video.src}
                  type={video.type}
                  aspect={video.aspect}
                  title={`${project.title} clip ${index + 1}`}
                />
              </div>
            ))}
          </div>
        )}

        {project.gallery.length > 0 && (
          <div
            className={`media-row ${
              project.gallery.length >= 3
                ? "media-row-3"
                : project.gallery.length === 2
                  ? "media-row-2"
                  : "media-row-1"
            }`}
          >
            {project.gallery.map((src) => (
              <div key={src} className="media-cell">
                <Image
                  src={src}
                  alt=""
                  width={1200}
                  height={1200}
                  sizes="(max-width: 800px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <nav className="project-next" aria-label="Project pagination">
        <div>
          {prev ? (
            <Link href={`/portfolio/${prev.slug}`}>← {prev.title}</Link>
          ) : (
            <Link href="/portfolio">← Work</Link>
          )}
        </div>
        <div>
          {next ? (
            <Link href={`/portfolio/${next.slug}`}>{next.title} →</Link>
          ) : null}
        </div>
      </nav>
    </main>
  );
}
