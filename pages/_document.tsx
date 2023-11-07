// DONE REVIEWING: GITHUB COMMIT ⚠️
import {Head, Html, Main, NextScript} from "next/document"

// IF: You do not want to use Bootstrap
// DELETE: Bootstrap Object - Link - Script
// IF: You do not want to use Tailwind CSS
// DELETE: Every Tailwind CSS classes in Body element

const font = [
  "https://fonts.googleapis.com/css",
  [
    ["family", "IBM+Plex+Sans+Arabic:100,200,300,400,500,600,700"].join("="),
    ["display", "swap"].join("=")
  ].join("&")
].join("?")

const MyDocument = function MyDocument() {
  return (
    <Html lang="ar" dir="rtl" className="scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="stylesheet" href={font} />
      </Head>
      <body className="bg-stone-100 font-ibm-plex-sans-arabic">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
