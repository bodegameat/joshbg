import type { Project } from "@/lib/content";

export function ProjectInfo({ project }: { project: Project }) {
  const subtitle =
    project.headline && project.headline !== "Selected work"
      ? ` — ${project.headline}`
      : "";

  return (
    <details className="project-info">
      <summary className="project-info-bar">
        <a href="/portfolio" className="project-back">
          ← Work
        </a>
        <span className="project-info-title">
          {project.title}
          {subtitle}
        </span>
        <span className="project-info-toggle">
          Info <span className="project-info-mark" aria-hidden />
        </span>
      </summary>

      <div className="project-info-panel">
        <div>
          <h3>Overview</h3>
          <p>
            {project.summary ??
              "Selected performance creative from this engagement."}
          </p>
        </div>
        <div>
          <h3>Focus</h3>
          <p>
            {(project.focus && project.focus.length > 0
              ? project.focus
              : ["Performance creative"]
            ).join(", ")}
          </p>
        </div>
        <div>
          <h3>Role</h3>
          <p>{project.role ?? "Creative"}</p>
        </div>
      </div>
    </details>
  );
}
