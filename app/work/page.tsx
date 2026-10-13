import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Work() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Your Lean, Mean,<br />Ad Machine
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Faster, more affordable, better performance. We've rebuilt the entire creative-production process from the ground up using a performance marketing lens so that brands get the assets they need, when they need it.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Creative is now the #1 Driver of Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In a post iOS 14 world, performance marketing has evolved. Creative is no longer just supporting performance—it's driving it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Performance Creative Production</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Built for the modern marketing landscape where creative excellence meets measurable results.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Data-Driven Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every creative decision backed by performance insights and optimized for maximum impact.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Rapid Iteration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fast turnaround times without sacrificing quality. Get the assets you need when you need them.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Brand Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Scale your channels while maintaining the brand integrity that sets you apart.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Full-Stack Creative</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From concept to execution across all digital platforms and formats.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Growth-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Partner with high-growth companies to accelerate their digital presence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Let's Scale Together
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to transform your creative process and drive real performance?
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
