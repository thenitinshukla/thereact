"use client"

import { useEffect, useState } from "react"
import { ExternalLink } from "lucide-react"

export default function PublicationsSection() {
  const [metricsData, setMetricsData] = useState<{
    citations: number;
    hIndex: number;
    i10Index: number;
    citationYears: number[];
    citationsPerYear: number[];
  }>({
    citations: 0,
    hIndex: 0,
    i10Index: 0,
    citationYears: [],
    citationsPerYear: [],
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data from an API or local storage
    const loadMetricsData = () => {
      // Check if we have cached data
      const cachedData = localStorage.getItem("scholarData")
      const lastFetchTime = localStorage.getItem("lastFetchTime")
      const currentTime = new Date().getTime()

      // Use cached data if less than an hour old
      if (cachedData && lastFetchTime && currentTime - Number(lastFetchTime) < 3600000) {
        setMetricsData(JSON.parse(cachedData))
        setIsLoading(false)
      } else {
        // In a real app, you would fetch from an API here
        // For now, we'll use fallback data
        const fallbackData = {
          citations: 806,
          hIndex: 15,
          i10Index: 20,
          citationYears: [
            2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
            2025,
          ],
          citationsPerYear: [7, 19, 16, 20, 23, 28, 22, 13, 40, 49, 51, 60, 61, 65, 51, 84, 77, 99, 18],
        }

        localStorage.setItem("scholarData", JSON.stringify(fallbackData))
        localStorage.setItem("lastFetchTime", currentTime.toString())
        setMetricsData(fallbackData)
        setIsLoading(false)
      }
    }

    loadMetricsData()
  }, [])

  useEffect(() => {
    // Initialize chart when data is loaded
    if (!isLoading && typeof window !== "undefined" && typeof (window as any).Chart !== 'undefined') {
      const ctx = document.getElementById("publicationsChart") as HTMLCanvasElement
      if (ctx) {
        // Check if chart already exists and destroy it
        const chartInstance = (window as any).citationChart
        if (chartInstance) {
          chartInstance.destroy()
        }

        // Create new chart
        const newChart = new ((window as any).Chart)(ctx, {
          type: "bar",
          data: {
            labels: metricsData.citationYears,
            datasets: [
              {
                label: "Citations per Year",
                data: metricsData.citationsPerYear,
                backgroundColor: "#0071e3",
                borderColor: "#005bb5",
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: "rgba(0, 0, 0, 0.05)",
                },
              },
              x: {
                grid: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                padding: 10,
              },
            },
          },
        })

        // Store chart instance
        ;(window as any).citationChart = newChart
      }
    }
  }, [isLoading, metricsData])

  return (
    <section id="publications" className="section bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="title-text text-4xl font-bold mb-2">Publications</h2>
          <p className="tagline text-xl">Research metrics and impacts</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {isLoading ? "Loading..." : metricsData.citations}
            </div>
            <div className="text-gray-600">Total Citations</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{isLoading ? "Loading..." : metricsData.hIndex}</div>
            <div className="text-gray-600">h-index</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {isLoading ? "Loading..." : metricsData.i10Index}
            </div>
            <div className="text-gray-600">i10-index</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-8 h-[300px]">
          <canvas id="publicationsChart"></canvas>
        </div>

        <div className="text-center">
          <a
            href="https://scholar.google.com/citations?user=Fs_mg34AAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            View Full Profile on Google Scholar
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

