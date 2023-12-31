// DONE REVIEWING: GITHUB COMMIT
import type {AppProps} from "next/app"
import "../styles/globals.css"

const MyApp = function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
