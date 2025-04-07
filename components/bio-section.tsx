export default function BioSection() {
  return (
    <section id="bio" className="section bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="title-text text-4xl font-bold mb-2">Short Bio</h2>
          <p className="tagline text-xl">Education and Professional Experience</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="timeline-modern">
              <div className="timeline-modern-item relative pl-8 pb-8 border-l-2 border-gray-200">
                <div className="timeline-modern-item-dot absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-blue-600"></div>
                <div className="timeline-modern-period font-semibold text-blue-600 mb-1">2013 - 2019</div>
                <div className="timeline-modern-title text-lg font-bold mb-1">Ph.D. in Plasma Physics</div>
                <div className="timeline-modern-description text-gray-600">
                  At{" "}
                  <a
                    href="https://tecnico.ulisboa.pt/pt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Instituto Superior Técnico (IST), Lisbon Portugal
                  </a>
                  <br />
                  Investigated small-scale magnetic field generation, Weibel Instability, and HPC simulation frameworks
                </div>
              </div>
              <div className="timeline-modern-item relative pl-8 pb-8 border-l-2 border-gray-200">
                <div className="timeline-modern-item-dot absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-blue-600"></div>
                <div className="timeline-modern-period font-semibold text-blue-600 mb-1">2008 - 2010</div>
                <div className="timeline-modern-title text-lg font-bold mb-1">M.Sc. in Physics Engineering</div>
                <div className="timeline-modern-description text-gray-600">
                  At{" "}
                  <a
                    href="https://tecnico.ulisboa.pt/pt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Instituto Superior Técnico (IST), Lisbon Portugal
                  </a>
                  <br />
                  Focused on plasma physics, computational physics, and nanotechnology
                </div>
              </div>
              <div className="timeline-modern-item relative pl-8 border-l-2 border-gray-200">
                <div className="timeline-modern-item-dot absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-blue-600"></div>
                <div className="timeline-modern-period font-semibold text-blue-600 mb-1">2005 - 2007</div>
                <div className="timeline-modern-title text-lg font-bold mb-1">B.Sc. in Physics</div>
                <div className="timeline-modern-description text-gray-600">
                  At Kashi Naresh College, Gyanpur, U.P. India
                  <br />
                  Studied fundamental physics and mathematical methods
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Professional Experience</h3>
            <div className="timeline-modern">
              <div className="timeline-modern-item relative pl-8 pb-8 border-l-2 border-gray-200">
                <div className="timeline-modern-item-dot absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-blue-600"></div>
                <div className="timeline-modern-period font-semibold text-blue-600 mb-1">2023 - Present</div>
                <div className="timeline-modern-title text-lg font-bold mb-1">HPC Application Engineer</div>
                <div className="timeline-modern-description text-gray-600">
                  Leading HPC initiatives at{" "}
                  <a
                    href="https://www.cineca.it/it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    CINECA, Bologna Italy
                  </a>{" "}
                  <br />
                  specializing in GPU acceleration and exascale-ready astrophysical codes with the{" "}
                  <a
                    href="https://www.space-coe.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    SPACE Center of Excellence
                  </a>
                </div>
              </div>
              <div className="timeline-modern-item relative pl-8 pb-8 border-l-2 border-gray-200">
                <div className="timeline-modern-item-dot absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-blue-600"></div>
                <div className="timeline-modern-period font-semibold text-blue-600 mb-1">2020 - 2023</div>
                <div className="timeline-modern-title text-lg font-bold mb-1">Junior HPC Engineer</div>
                <div className="timeline-modern-description text-gray-600">
                  Performance analysis and optimization of EUROFusion codes and developed HPC training materials at{" "}
                  <a
                    href="https://www.cineca.it/it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    CINECA, Bologna Italy
                  </a>
                </div>
              </div>
              <div className="timeline-modern-item relative pl-8 border-l-2 border-gray-200">
                <div className="timeline-modern-item-dot absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-blue-600"></div>
                <div className="timeline-modern-period font-semibold text-blue-600 mb-1">2019 - 2020</div>
                <div className="timeline-modern-title text-lg font-bold mb-1">Researcher Fellow</div>
                <div className="timeline-modern-description text-gray-600">
                  <a
                    href="https://golp.tecnico.ulisboa.pt/wp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Group of Lasers and Plasmas
                  </a>
                  ,{" "}
                  <a
                    href="https://tecnico.ulisboa.pt/pt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Instituto Superior Técnico
                  </a>
                  , Lisbon, Portugal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

