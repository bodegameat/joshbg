"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/content";

const links = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-title" onClick={() => setOpen(false)}>
          {site.name}
        </Link>

        <nav className="site-nav desktop-nav" aria-label="Main">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname.startsWith(item.href) ? "active" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </nav>

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
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={pathname.startsWith(item.href) ? "active" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
