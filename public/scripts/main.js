document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation handling
  const mobileToggle = document.querySelector(".mobile-toggle")
  const mobileNavPanel = document.querySelector(".mobile-nav-panel")
  const closeBtn = document.querySelector(".close-btn")

  if (mobileToggle && mobileNavPanel && closeBtn) {
    mobileToggle.addEventListener("click", () => {
      mobileNavPanel.classList.add("active")
    })

    closeBtn.addEventListener("click", () => {
      mobileNavPanel.classList.remove("active")
    })

    document.addEventListener("click", (e) => {
      if (!mobileNavPanel.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileNavPanel.classList.remove("active")
      }
    })
  }

  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      if (targetId !== "#") {
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          })
        }
      }
      if (mobileNavPanel && mobileNavPanel.classList.contains("active")) {
        mobileNavPanel.classList.remove("active")
      }
    })
  })

  // Email handling
  const emailLinks = document.querySelectorAll('a[href^="mailto"]')
  emailLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const email = this.getAttribute("href").replace("mailto:", "")
      openEmailEditor(email)
    })
  })

  function openEmailEditor(email) {
    // Try to open the mailto link
    window.location.href = `mailto:${email}`

    // Set a timeout to check if the email client opened (1 second)
    setTimeout(() => {
      if (!document.hidden && !window.location.href.startsWith("mailto:")) {
        // If the email client didn't open, copy the email to clipboard
        navigator.clipboard
          .writeText(email)
          .then(() => {
            alert("Could not open your email app. Email address copied to clipboard: " + email)
          })
          .catch((err) => {
            alert("Failed to copy email. Please manually use: " + email)
          })
      }
    }, 1000)
  }
})

