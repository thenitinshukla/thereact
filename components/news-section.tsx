"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Search, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"

interface NewsItem {
  date: string
  description: string
  categories: string[]
  tags: string[]
  link: string
}

export default function NewsSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)
  const [visibleItems, setVisibleItems] = useState<NewsItem[]>([])
  const [allItems, setAllItems] = useState<NewsItem[]>([])

  // News data
  const newsItems: NewsItem[] = [
    {
      date: "22/01/2025",
      description:
        'Delivered a talk on "GPU Optimization Strategies for Astrophysical Simulations" at the annual SuperComputing Europe conference in Barcelona.',
      categories: ["conference"],
      tags: ["conference"],
      link: "https://www.hipeac.net/2025/barcelona/#/program/sessions/8207/",
    },
    {
      date: "28/10/2024",
      description:
        "The EPICURE GPU Hackathon at CINECA: Delivered a lecture on CUDA, covering topics from basic to advanced levels, and mentored participants.",
      categories: ["hackathon"],
      tags: ["GPU Hackathon"],
      link: "https://epicure-hpc.eu/2024/09/19/nvidia-gpu-hackathon/",
    },
    {
      date: "01/07/2024",
      description:
        "Designed and successfully delivered a comprehensive two-week course (July 1-12) focused on High-Performance Computing (HPC).",
      categories: ["hpc-summer-school-24", "others"],
      tags: ["CINECA HPC Summer School", "others"],
      link: "https://eventi.cineca.it/sites/eventi/files/agendacinecasummer2024_0.pdf",
    },
    {
      date: "19/06/2024",
      description:
        "International workshop on 'The 2nd CINI Summer School on High Performance Computing and Emerging Technologies' with over 80 participants from around the world.",
      categories: ["others"],
      tags: ["Conference"],
      link: "https://www.hipeac.net/2025/barcelona/#/program/sessions/8207/",
    },
    {
      date: "28/10/2025",
      description:
        'Delivered a talk on "Plasma Physics Towards the ExaScale Era" at the annual SuperComputing Europe conference in Munich.',
      categories: ["conference"],
      tags: ["conference"],
      link: "https://www.hipeac.net/2024/munich/#/program/sessions/8110/",
    },
    {
      date: "26/01/2025",
      description:
        'Delivered a talk on "Unleashing the Power of Multiple GPUs for ECsim Using OpenACC" at the annual PASC conference in Davos.',
      categories: ["conference"],
      tags: ["conference"],
      link: "https://pasc23.pasc-conference.org/presentation/?id=msa217&sess=sess154",
    },
    {
      date: "25/11/2020",
      description: "Best scientific visualisation ARCHER2 HPC Image and Video Competition",
      categories: ["achievements"],
      tags: ["achievements"],
      link: "https://www.archer2.ac.uk/news/2020/11/25/image-competition-2020-results.html",
    },
    {
      date: "20/01/2019",
      description:
        "HPC-Europa3 project 500,000 CPUhours on ARCHER + £2,000 to visit Lancaster University (Lancaster, UK)",
      categories: ["achievements"],
      tags: ["achievements"],
      link: "https://www.archer2.ac.uk/news/2020/11/25/image-competition-2020-results.html",
    },
    {
      date: "15/02/2018",
      description:
        "HPC-Europa3 project (2018), 1,250,000 CPUhours on Marconi + e1,500 to visit CINECA (Casalecchio di Reno, Italy)",
      categories: ["achievements"],
      tags: ["achievements"],
      link: "https://www.archer2.ac.uk/news/2020/11/25/image-competition-2020-results.html",
    },
  ]

  // Initial visible items (limited number)
  const initialVisibleCount = 4

  useEffect(() => {
    setAllItems(newsItems)
    updateVisibleItems(activeFilter, searchTerm)
  }, [])

  // Update visible items based on filter and search
  const updateVisibleItems = (filter: string, search: string) => {
    const filtered = newsItems.filter((item) => {
      const matchesFilter = filter === "all" || item.categories.includes(filter)
      const matchesSearch = item.description.toLowerCase().includes(search.toLowerCase())
      return matchesFilter && matchesSearch
    })

    // Show all if expanded, otherwise limit
    setVisibleItems(isExpanded ? filtered : filtered.slice(0, initialVisibleCount))
  }

  // Handle filter change
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    setIsExpanded(false)
    updateVisibleItems(filter, searchTerm)
  }

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    setIsExpanded(false)
    updateVisibleItems(activeFilter, value)
  }

  // Toggle show more/less
  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
    updateVisibleItems(activeFilter, searchTerm)
  }

  // Get total matching items count
  const totalMatchingItems = allItems.filter(
    (item) =>
      (activeFilter === "all" || item.categories.includes(activeFilter)) &&
      item.description.toLowerCase().includes(searchTerm.toLowerCase()),
  ).length

  return (
    <section id="news" className="section py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="title-text text-4xl font-bold mb-2">Recent News</h2>
          <p className="tagline text-xl">Latest activities and achievements</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-4 py-2 rounded-md ${
                activeFilter === "all" ? "bg-gray-200" : "bg-white hover:bg-gray-100"
              }`}
              onClick={() => handleFilterChange("all")}
            >
              View all
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeFilter === "others" ? "bg-gray-200" : "bg-white hover:bg-gray-100"
              }`}
              onClick={() => handleFilterChange("others")}
            >
              Others
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeFilter === "achievements" ? "bg-gray-200" : "bg-white hover:bg-gray-100"
              }`}
              onClick={() => handleFilterChange("achievements")}
            >
              Achievements
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search news..."
              className="pl-10 pr-4 py-2 rounded-md border border-gray-300 w-full md:w-64"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="hidden md:flex bg-gray-50 p-4 border-b">
            <div className="w-32 font-semibold">Date</div>
            <div className="flex-1 font-semibold">Description</div>
          </div>

          <div className="divide-y">
            {visibleItems.map((item, index) => (
              <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-32 font-medium text-gray-600 mb-2 md:mb-0">{item.date}</div>
                  <div className="flex-1">
                    <p className="mb-3">{item.description}</p>
                    <div className="flex flex-wrap justify-between items-center">
                      <div className="flex flex-wrap gap-2 mb-2 md:mb-0">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-100"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                      >
                        Link <ArrowRight className="ml-1" size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {totalMatchingItems > initialVisibleCount && (
          <div className="text-center mt-6">
            <button
              onClick={toggleExpand}
              className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="ml-1" size={16} />
                </>
              ) : (
                <>
                  Show More <ChevronDown className="ml-1" size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

