// Chart initialization script
document.addEventListener("DOMContentLoaded", function() {
  // Wait for Chart.js to be fully loaded
  const checkChartLoaded = setInterval(function() {
    if (window.Chart) {
      clearInterval(checkChartLoaded);
      console.log("Chart.js is loaded and ready");
      
      // Initialize any charts that need to be created on page load
      initializePublicationsChart();
    }
  }, 100);
  
  function initializePublicationsChart() {
    const chartElement = document.getElementById("publicationsChart");
    if (!chartElement) return;
    
    // Get data from localStorage if available
    let metricsData;
    try {
      const cachedData = localStorage.getItem("scholarData");
      if (cachedData) {
        metricsData = JSON.parse(cachedData);
      } else {
        // Fallback data if nothing in localStorage
        metricsData = {
          citations: 806,
          hIndex: 15,
          i10Index: 20,
          citationYears: [
            2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 
            2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
          ],
          citationsPerYear: [7, 19, 16, 20, 23, 28, 22, 13, 40, 49, 
                            51, 60, 61, 65, 51, 84, 77, 99, 18],
        };
        
        // Store for future use
        localStorage.setItem("scholarData", JSON.stringify(metricsData));
        localStorage.setItem("lastFetchTime", new Date().getTime().toString());
      }
      
      // Create the chart
      const ctx = chartElement.getContext('2d');
      const chart = new Chart(ctx, {
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
      });
      
      // Store chart instance
      window.citationChart = chart;
    } catch (error) {
      console.error("Error initializing publications chart:", error);
    }
  }
});
