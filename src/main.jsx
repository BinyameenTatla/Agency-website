import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navbar } from './Navbar'
import { Hero } from './Hero'
import { Abouts } from './Abouts'
import { Services } from './Services'
import { Test } from './Test'
import { Contact } from './Contact'
import { Blog } from './Blog'
import { Footer } from './Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Navbar />
    <Hero />
    <Abouts />
    <Services />
    <Test />
    <Contact />
    <Blog />
    <Footer />
   
  </StrictMode>,
)
