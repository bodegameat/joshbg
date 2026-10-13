"use client";

import { useState } from "react";
import type { Project } from "@/lib/content";

export function ProjectInfo({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`project-info ${open ? "open" : ""}`}>
      <div className="project-info-bar">
        <a href="/portfolio" className="project-back">
          ← Work
        </a>
        <p className="project-info-title">
          {project.title}
          {project.headline && project.headline !== "Selected work"
            ? ` — ${project.headline}`
            : ""}
        </p>
        <button
          type="button"
          className="project-info-toggle"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Info {open ? "×" : "+"}
        </button>
      </div>

      {open && (
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
      )}
    </div>
  );
}
