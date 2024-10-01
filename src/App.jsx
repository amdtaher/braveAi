import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Features from './components/Features/Features'
import Ads from './components/Ads/Ads'
import Works from './components/Works/Works'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body className='body'>
        <Header/>
        <About/>
        <Features/>
        <Ads/>
        <Works/>
        <Footer/>
      </body>
    </>
  )
}

export default App
