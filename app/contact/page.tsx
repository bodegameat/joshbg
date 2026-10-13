import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            Let's connect!
          </h1>
          <p className="text-xl text-gray-600">
            Ready to collaborate? Get in touch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Email</h3>
                <a
                  href="mailto:joshuabryantgainer@gmail.com"
                  className="text-blue-600 hover:text-blue-700 hover:underline break-all"
                >
                  joshuabryantgainer@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Phone</h3>
                <a
                  href="tel:+13042796645"
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  (304) 279-6645
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/joshuabg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  linkedin.com/in/joshuabg
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
