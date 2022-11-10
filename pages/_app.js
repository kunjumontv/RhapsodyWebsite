import '../public/assets/css/app.2afad0c.bundle.css'
import "../public/assets/css/swiper-custom.css";
import '../styles/globals.css'
import Footer from './components/Footer';
import NavBar from './components/NavBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NavBar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  
  )
}

export default MyApp
