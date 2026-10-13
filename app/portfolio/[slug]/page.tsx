import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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

function gridClass(videos: ProjectVideo[]) {
  if (videos.length === 0) return "work-grid-landscape";
  const avg =
    videos.reduce((sum, v) => sum + v.aspect, 0) / Math.max(videos.length, 1);
  if (avg < 0.95) return "work-grid-vertical";
  if (avg <= 1.15) return "work-grid-square";
  return "work-grid-landscape";
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const videoGrid = gridClass(project.videos);
  const galleryGrid =
    project.gallery.length > 2 ? "work-grid-square" : "work-grid-landscape";

  return (
    <main className="project-page">
      <div className="project-layout">
        <aside className="project-rail">
          {project.role && <p className="role">{project.role}</p>}
          <h1>{project.title}</h1>
          {project.headline && project.headline !== "Selected work" && (
            <p className="headline">{project.headline}</p>
          )}
          {project.summary && <p className="summary">{project.summary}</p>}
          {project.focus && project.focus.length > 0 && (
            <div className="focus-tags">
              {project.focus.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
          <nav className="project-nav" aria-label="Project pagination">
            <Link href="/portfolio">← All work</Link>
            {prev && <Link href={`/portfolio/${prev.slug}`}>Prev: {prev.title}</Link>}
            {next && <Link href={`/portfolio/${next.slug}`}>Next: {next.title}</Link>}
          </nav>
        </aside>

        <div className="project-stage">
          {project.videos.length > 0 && (
            <div className={`work-grid ${videoGrid}`}>
              {project.videos.map((video, index) => (
                <div key={`${video.src}-${index}`} className="work-item">
                  <VideoEmbed
                    src={video.src}
                    type={video.type}
                    aspect={video.aspect}
                    title={`${project.title} ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          )}

          {project.gallery.length > 0 && (
            <div className={`work-grid ${galleryGrid}`}>
              {project.gallery.map((src) => (
                <div key={src} className="work-item">
                  <Image
                    src={src}
                    alt=""
                    width={1200}
                    height={1200}
                    sizes="(max-width: 900px) 100vw, 40vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
