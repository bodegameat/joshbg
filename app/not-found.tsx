import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Button asChild size="lg">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
