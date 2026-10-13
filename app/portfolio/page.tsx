import type { Metadata } from "next";
import { WorkGrid } from "@/components/work-grid";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
};

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <section className="work-section">
        <div className="work-section-head">
          <h2>Work</h2>
          <p>{site.role}</p>
        </div>
        <WorkGrid />
      </section>
    </main>
  );
}
