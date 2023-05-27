import '../styles/skeleton.css'
import '../styles/main.scss'
// import { Analytics } from '@vercel/analytics/react';


function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
    // <Analytics />
  )
}
export default App
