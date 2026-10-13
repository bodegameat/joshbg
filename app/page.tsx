import Image from "next/image";
import Link from "next/link";
import { Connect } from "@/components/connect";
import { site } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-portrait">
          <Image
            src={site.heroImage}
            alt={site.name}
            width={1080}
            height={1080}
            priority
          />
        </div>
        <div className="home-copy">
          <h1>
            Hi, I&apos;m Josh.
            <br />
            <br />
            I&apos;m a Brooklyn-based
            <span className="accent"> Creative Director &amp; Performance Strategist</span>{" "}
            that helps high-growth companies scale digital channels while staying
            true to their brand.
          </h1>
          <Link href="/portfolio" className="btn-pill">
            View Portfolio
          </Link>
        </div>
      </section>

      <section className="see-work">
        <video
          className="see-work-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/see-the-work-poster.jpg"
        >
          <source src="/videos/portfolio-splash.mp4" type="video/mp4" />
        </video>
        <div className="see-work-overlay">
          <h2>See the Work</h2>
          <Link href="/portfolio" className="btn-pill btn-pill-light">
            Go to Portfolio
          </Link>
        </div>
      </section>

      <Connect />
    </>
  );
}
