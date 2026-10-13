import Image from "next/image";
import Link from "next/link";
import { Connect } from "@/components/connect";
import { site } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-copy">
          <p className="eyebrow rise">{site.role}</p>
          <h1 className="brand rise rise-delay-1">{site.name}</h1>
          <p className="line rise rise-delay-2">{site.line}</p>
          <p className="bio rise rise-delay-2">{site.bio}</p>
          <div className="home-actions rise rise-delay-3">
            <Link href="/portfolio" className="btn-pill btn-solid">
              View work
            </Link>
            <Link href="/contact" className="btn-pill">
              Contact
            </Link>
          </div>
        </div>
        <div className="home-portrait rise rise-delay-1">
          <Image
            src={site.heroImage}
            alt={site.name}
            width={1080}
            height={1080}
            priority
          />
        </div>
      </section>

      <div className="client-strip">
        <p>Selected brands</p>
        <ul>
          {site.clients.map((client) => (
            <li key={client}>{client}</li>
          ))}
        </ul>
      </div>

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
          <h2>See the work</h2>
          <Link href="/portfolio" className="btn-pill btn-pill-light">
            Open portfolio
          </Link>
        </div>
      </section>

      <Connect />
    </>
  );
}
