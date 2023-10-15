"use client"

import SelfieLayout from './selfie-layout'
import Footer from './footer'
import ThemeToggle from './theme-toggle'
import { ThemeProvider } from './theme-context'
import Separator from './separator'

export default function Home() {
  return (
    <ThemeProvider>
      <main>
        <SelfieLayout imageUrl="/main-image.jpeg"/>
        
        <Footer />
      </main>
    </ThemeProvider>
  )
}
