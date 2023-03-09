import '@/styles/globals.css'
import { Mulish as BodyFont} from "next/font/google"
import { Unbounded as DisplayFont} from "next/font/google"
import type { AppProps } from 'next/app'
import Head from 'next/head'

const bodyFont = BodyFont({
  subsets: ["latin"],
})

const displayFont = DisplayFont({
  subsets: ["latin"],
  weight: ["700"]
})

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>James Harcourt</title>
      <meta name="description" content="I'm a keen web developer, great problem solver and collaborative team player. I've been known to dabble in other areas of tech, such as game development, machine learning, and more. My passions include music, cooking and art." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph meta tags */}
      <meta property="og:title" content="James Harcourt" />
      <meta property="og:description" content="I'm a keen web developer, great problem solver and collaborative team player. I've been known to dabble in other areas of tech, such as game development, machine learning, and more. My passions include music, cooking and art." />
      <meta property="og:url" content="https://harcourt.dev" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="James Harcourt" />
      <meta name="twitter:description" content="I'm a keen web developer, great problem solver and collaborative team player. I've been known to dabble in other areas of tech, such as game development, machine learning, and more. My passions include music, cooking and art." />
      <meta name="twitter:url" content="https://harcourt.dev" />

      {/* Favicon/Misc */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1e1e1e" />
      <meta name="msapplication-TileColor" content="#1e1e1e" />
      <meta name="theme-color" content="#1e1e1e" />
    </Head>
    <style dangerouslySetInnerHTML={{__html: `:root { --body-font: ${bodyFont.style.fontFamily}; --display-font: ${displayFont.style.fontFamily} }`}} />
    <Component {...pageProps} />
  </>
}
