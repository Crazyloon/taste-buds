import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return <Layout Component={Component} pageProps={pageProps} />
}

export default MyApp
