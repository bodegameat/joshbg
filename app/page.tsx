import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm Josh.
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            I'm a Brooklyn-based <span className="font-semibold text-gray-900">Creative Director & Performance Strategist</span> that helps high-growth companies scale digital channels while staying true to their brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/work">See the Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
              <Link href="/contact">Let's Connect</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Performance-Driven</h3>
              <p className="text-gray-600">
                Strategic approach to creative that prioritizes measurable results and ROI.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Brand Integrity</h3>
              <p className="text-gray-600">
                Scaling channels without compromising your brand's unique voice and identity.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">Growth-Focused</h3>
              <p className="text-gray-600">
                Helping high-growth companies accelerate their digital presence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
