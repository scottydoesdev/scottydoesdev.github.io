import Link from 'next/link'

export default function CustomLink({url, text}) {
  return (
    <Link
      className="underline underline-offset-2"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {text}
    </Link>
  )
}