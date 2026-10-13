import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Page not found</h1>
      <p>We couldn&apos;t find the page you were looking for.</p>
      <Link href="/">Return home</Link>
    </main>
  );
}
