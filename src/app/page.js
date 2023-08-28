"use client"

import SelfieLayout from './selfie-layout'
import Footer from './footer'
import ThemeToggle from './theme-toggle'
import { ThemeProvider } from './theme-context'

export default function Home() {
  return (
    <ThemeProvider>
      <main className="bg-white dark:bg-black text-black dark:text-white h-screen">
        <SelfieLayout imageUrl="/main-image.jpeg"/>
        <ThemeToggle />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
