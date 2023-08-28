import { Fira_Code } from 'next/font/google'
import CustomLink from './custom-link'

const fira_code = Fira_Code({ subsets: ['latin'] })

export default function Footer() {
  return (
    <div className={`${fira_code.className} absolute bottom-2 w-full flex justify-center items-center text-xs`}>
      <span>
        Created by David Scott using{' '}
        <CustomLink url="https://nextjs.org/" text="NextJS"/>
        {' '}and{' '}
        <CustomLink url="https://tailwindcss.com/" text="Tailwind CSS"/>
        . Hosted on{' '}
        <CustomLink url="https://pages.github.com/" text="GitHub Pages"/>.
      </span>
    </div>
  )
}
