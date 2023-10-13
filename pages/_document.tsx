// DONE REVIEWING: GITHUB COMMIT ⚔️
import {Head, Html, Main, NextScript} from "next/document"

// IF: You do not want to use Bootstrap
// DELETE: Bootstrap Object - Link - Script
// IF: You do not want to use Tailwind CSS
// DELETE: Every Tailwind CSS classes in Body element

const MyDocument = function MyDocument() {
  return (
    <Html lang="ar" dir="rtl" className="scroll-smooth">
      <Head />
      <body className="bg-gray-50 font-brand">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
