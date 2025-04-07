import { Star, Cpu, GitBranch, Atom } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      icon: <Star className="h-6 w-6 text-white" />,
      title: "SPACE CoE",
      period: "2023 - Present",
      description:
        "Leading the development of scalable astrophysical codes optimized for exascale computing systems, pushing the boundaries of computational astrophysics",
    },
    {
      icon: <Cpu className="h-6 w-6 text-white" />,
      title: "GPU Optimization of DESTINE",
      period: "2022 - 2023",
      description:
        "Compiling support of the code RAPS20 by using Spack, Optimisation and performance analysis of the code RAPS20, GPU support to mini application ECWAM",
    },
    {
      icon: <GitBranch className="h-6 w-6 text-white" />,
      title: "CHEESE-1&2",
      period: "2021 - present",
      description:
        "Mentoring activity on performance and portability analysis of XSHELLS and Tandem codes. Adding CUDA support to the code XSHELLS",
    },
    {
      icon: <Atom className="h-6 w-6 text-white" />,
      title: "EUROFusion",
      period: "2020 - 2022",
      description:
        "High level user support to enhance streamline workflow efficiency and performance analysis of EUTERPE, GENE, STARWALL",
    },
  ]

  return (
    <section id="projects" className="section py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="title-text text-4xl font-bold mb-2">Projects</h2>
          <p className="tagline text-xl">Recent work and ongoing initiatives</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                  {project.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold">{project.title}</h4>
                  <span className="text-sm text-gray-500">{project.period}</span>
                </div>
              </div>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

