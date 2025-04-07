"use client"

import type React from "react"

import { Inter } from "next/font/google"
import "../styles/globals.css";
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <nav className="top-nav">
          <div className="container-fluid">
            <div className="nav-container">
              <a href="#hero" className="logo">
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4F46E5" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="0.8" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Base shape - octagon representing computation nodes */}
                  <path
                    d="M16 4L24.5 8L28 16L24.5 24L16 28L7.5 24L4 16L7.5 8L16 4Z"
                    fill="#111827"
                    stroke="url(#techGradient)"
                    strokeWidth="1.5"
                  />

                  {/* Central node */}
                  <circle cx="16" cy="16" r="3" fill="url(#techGradient)" filter="url(#glow)" />

                  {/* Connection lines representing computation/data flow */}
                  <path d="M16 13V7" stroke="url(#techGradient)" strokeWidth="1" strokeDasharray="1 1" />
                  <path d="M16 25V19" stroke="url(#techGradient)" strokeWidth="1" strokeDasharray="1 1" />
                  <path d="M13 16H7" stroke="url(#techGradient)" strokeWidth="1" strokeDasharray="1 1" />
                  <path d="M25 16H19" stroke="url(#techGradient)" strokeWidth="1" strokeDasharray="1 1" />

                  {/* Orbital elements suggesting physics/plasma */}
                  <ellipse
                    cx="16"
                    cy="16"
                    rx="8"
                    ry="3"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.6"
                    fill="none"
                    transform="rotate(45 16 16)"
                  />
                  <ellipse
                    cx="16"
                    cy="16"
                    rx="8"
                    ry="3"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeOpacity="0.6"
                    fill="none"
                    transform="rotate(-45 16 16)"
                  />
                </svg>
              </a>

              <ul className="nav-links">
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#bio">Short Bio</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#publications">Publications</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#news">News</a>
                </li>
                <li>
                  <a href="mailto:n.shukla@cineca.it">Contact</a>
                </li>
              </ul>
              <button className="mobile-toggle">
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Panel */}
          <div className="mobile-nav-panel">
            <button className="close-btn">
              <i className="fas fa-times"></i>
            </button>
            <ul className="mobile-nav-links">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#bio">Short Bio</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#publications">Publications</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="mailto:n.shukla@cineca.it">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {children}

        <footer className="bg-light py-4 mt-5">
          <div className="container text-center">
            <p>© {new Date().getFullYear()} Nitin Shukla. All rights reserved.</p>
          </div>
        </footer>

        <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="afterInteractive" />
        <Script src="/scripts/main.js" strategy="afterInteractive" />
        <Script src="/scripts/chart-init.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}

