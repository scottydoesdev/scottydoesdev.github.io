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
        <ThemeToggle />
        <SelfieLayout imageUrl="/main-image.jpeg"/>
        <Separator />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
