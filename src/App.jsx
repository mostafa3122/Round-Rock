
import FooterApp from './components/FooterApp/FooterApp'
import About from './features/about/About'
import Contact from './features/contact/Contact'
import Hero from './features/header/Header'
import Services from './features/services/Services'
import Testimonials from './features/testimonials/Testimonials'

function App() {

  return (
    <>
     <Hero />
      <About />
      <Services />
      <Testimonials/>
      <Contact/>
      <FooterApp/>
    </>
  )
}

export default App
