import React, { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import VisionSection from './components/Vision'
import Lenis from '@studio-freight/lenis'
import Features from './components/Features'
import Qualities from './components/Qualities'
import ChauffeurForm from './components/Form'
import FAQ from './components/Faq'
import Footer from './components/Footer'
<<<<<<< HEAD
=======
import FleetPage from './components/Cars'
>>>>>>> 80db274 (Initial commit)

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // default easing
      smooth: true,
      smoothTouch: false, // disable smooth on touch devices if you want
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div>
      <Navbar />
      <Landing />
<<<<<<< HEAD
=======
      <FleetPage/>
>>>>>>> 80db274 (Initial commit)
      <VisionSection />
      <Features/>
      <Qualities/>
      <ChauffeurForm/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default App
