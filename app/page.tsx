import { Connect } from "@/components/connect";
import { WorkGrid } from "@/components/work-grid";
import { site } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="agency-hero">
        <div className="agency-hero-inner">
          <h1 className="brand rise">{site.name}</h1>
          <p className="line rise rise-delay-1">{site.line}</p>
          <a href="#work" className="scroll-hint rise rise-delay-2">
            Scroll for work
          </a>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="work-section-head">
          <h2>Work</h2>
          <p>{site.role}</p>
        </div>
        <WorkGrid />
      </section>

      <Connect />
    </>
  );
}
