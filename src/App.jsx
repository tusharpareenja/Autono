import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import Vision from './components/Vision'
import Services from './components/Services'
import Speed from './components/Speed'
import Factory from './components/Factory'
import Number from './components/Number'
import Partners from './components/Partners'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Vision />
      <Services />
      <Speed />
      <Factory />
      <Number />
      <Partners />
      <Footer />
    </>
  )
}

export default App
