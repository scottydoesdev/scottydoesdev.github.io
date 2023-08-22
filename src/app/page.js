import Image from 'next/image'
import SelfieLayout from './selfieLayout'

export default function Home() {
  return (
    <main>
      <SelfieLayout imageUrl="/main-image.jpeg"/>
    </main>
  )
}
