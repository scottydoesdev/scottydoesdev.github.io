import { Fira_Code } from 'next/font/google'
import Image from 'next/image'

const fira_code = Fira_Code({ subsets: ['latin'] })

export default function SelfieLayout({ imageUrl }) {
  return (
    <div className="flex items-center justify-between">
      <div className="relative">
        <Image
          src={imageUrl}
          alt="Picture of website owner, David"
          className="max-w-full"
          width={538}
          height={650}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent dark:to-black to-white" />
      </div>
      <div className="items-center">
        <div className={`${fira_code.className} text-2xl md:text-4xl md:pr-12`}>{"hi. i'm david."}</div>
        <a href="mailto:david@scottydoes.dev" className={`${fira_code.className} md:text-2xl`}>{"[contact me]"}</a>
        <div></div>
      </div>
    </div>
  )
}
