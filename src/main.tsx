import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import HeroSection from './components/Hero.tsx'
import Portfolio from './components/Portfolio.tsx'
import Experience from './components/Experience.tsx'
import Footer from './components/Footer.tsx'
import Certifications from './components/Certifications.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <HeroSection />
    <Experience />
    <Portfolio />
    <Certifications />
    <Footer />
  </StrictMode>,
)
