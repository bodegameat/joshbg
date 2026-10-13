import Image from "next/image";
import Link from "next/link";
import { Connect } from "@/components/connect";
import { site } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-copy">
          <h1>{site.bio}</h1>
        </div>
        <div className="home-portrait">
          <Image
            src={site.heroImage}
            alt={site.name}
            width={1080}
            height={1080}
            priority
          />
        </div>
      </section>

      <section className="see-work">
        <Link href="/portfolio">See the Work</Link>
      </section>

      <Connect />
    </>
  );
}
