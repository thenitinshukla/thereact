import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import BioSection from "@/components/bio-section"
import ProjectsSection from "@/components/projects-section"
import PublicationsSection from "@/components/publications-section"
import NewsSection from "@/components/news-section"
import { Suspense } from "react"
import dynamic from "next/dynamic"

// Dynamically import BlogSection with suspense
const BlogSection = dynamic(() => import("@/components/blog-section"), {
  ssr: false,
  loading: () => <div className="section py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="title-text text-4xl font-bold mb-2">Blog</h2>
        <p className="tagline text-xl">Loading blog content...</p>
      </div>
    </div>
  </div>
})

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <BioSection />
      <ProjectsSection />
      <PublicationsSection />
      <Suspense fallback={
        <div className="section py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="title-text text-4xl font-bold mb-2">Blog</h2>
              <p className="tagline text-xl">Loading blog content...</p>
            </div>
          </div>
        </div>
      }>
        <BlogSection />
      </Suspense>
      <NewsSection />
    </main>
  )
}

