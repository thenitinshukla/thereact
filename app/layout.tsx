import type React from "react"
import ClientLayout from "./ClientLayout"

export const metadata = {
  title: "Nitin Shukla - HPC Application Engineer",
  description: "Personal website of Nitin Shukla, HPC Application Engineer and Plasma Physicist",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}

