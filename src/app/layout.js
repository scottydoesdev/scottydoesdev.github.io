import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'David Scott - Experienced Software Engineer and Tester',
  description: 'The personal website of David Scott, professional test automation engineer, software engineer, and project management nerd.',
  favicon: '/favicon.ico'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-200 dark:bg-black text-black dark:text-white`}>{children}</body>
    </html>
  )
}
