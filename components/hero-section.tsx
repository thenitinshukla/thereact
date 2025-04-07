import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="hero" className="section pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
            <div className="text-block">
              <h1 className="text-5xl font-bold mb-2">Nitin Shukla</h1>
              <h3 className="text-2xl text-gray-700 mb-1">HPC Application Engineer</h3>
              <h6 className="text-gray-500 mb-4">via Magnanelli 2, CINECA Italy</h6>
              <p className="text-lg mb-4">
                Plasma Physicist with a passion for high-performance computing and astrophysical simulations
              </p>
              <div className="mt-4">
                <Link
                  href="/cv/Shukla_CV.pdf"
                  className="inline-flex items-center px-4 py-2 border border-gray-800 rounded text-sm font-medium mr-2"
                  download
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </Link>
              </div>
              <div className="mt-6 flex justify-center lg:justify-start space-x-4">
                <a
                  href="https://github.com/thenitinshukla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nitin-shukla-0670b21a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://x.com/thenitinshukla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
              <Image src="/images/nitin.jpg" alt="Nitin Shukla" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

