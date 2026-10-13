"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/content";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onHero = pathname === "/" || pathname === "/contact";

  return (
    <header className={`site-header ${onHero ? "site-header-on-hero" : ""}`}>
      <div className="site-header-inner">
        <nav className="site-nav desktop-nav" aria-label="Main">
          <Link
            href="/portfolio"
            className={pathname.startsWith("/portfolio") ? "active" : undefined}
          >
            Work
          </Link>
        </nav>

        <Link href="/" className="site-title" onClick={() => setOpen(false)}>
          {site.name}
        </Link>

        <div className="site-nav-spacer desktop-nav">
          <Link
            href="/contact"
            className={pathname === "/contact" ? "active" : undefined}
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close Menu" : "Open Menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile">
          <Link
            href="/portfolio"
            onClick={() => setOpen(false)}
            className={pathname.startsWith("/portfolio") ? "active" : undefined}
          >
            Work
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={pathname === "/contact" ? "active" : undefined}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
