export default function AboutSection() {
  return (
    <section id="about" className="section bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="title-text text-4xl font-bold mb-2">About Me</h2>
          <p className="tagline text-xl">Plasma Physicist and HPC Engineer</p>
        </div>
        <div className="flex justify-center">
          <div className="max-w-3xl">
            <p className="mb-4">
              I'm a computational plasma physicist who works with some of Europe's most powerful supercomputers. I run
              large simulations to understand how magnetic fields are generated from nothing. I focus on phenomena like
              the Weibel Instability and the Biermann Battery, which are relevant in both experimental plasmas generated
              by lasers and in astrophysical scenarios. With my background in plasma physics and advanced computing, I
              aim to expand our understanding of plasma behavior.
            </p>
            <p className="mb-2">As an HPC Application Engineer, I spend my days:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Working with parallel algorithms</li>
              <li>Tweaking codes to run smoothly on GPUs</li>
              <li>Creating guides and resources to help other researchers master parallel computing</li>
            </ul>
            <p className="mb-6">
              My aim is simple: make computing more efficient so researchers can get solid answers quicker. Right now,
              I'm leading the SPACE Center of Excellence at CINECA, where we're upgrading astrophysical codes to handle
              the next big challenges in computing. It's all about finding smarter ways to solve tough problems.
            </p>
            
            <h3 className="text-2xl font-bold mb-3">Research Focus</h3>
            <p className="mb-3">My research spans several interconnected areas in computational physics and high-performance computing:</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-blue-600 mb-2">Plasma Physics</h4>
                <p>Studying the Weibel instability and its role in generating magnetic fields in astrophysical plasmas.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-blue-600 mb-2">GPU Computing</h4>
                <p>Developing optimization techniques for particle-in-cell simulations on GPU architectures.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-blue-600 mb-2">High-Performance Computing</h4>
                <p>Exploring scalable algorithms for exascale computing systems.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-blue-600 mb-2">Computational Methods</h4>
                <p>Creating new numerical approaches for plasma simulations with improved accuracy and efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

