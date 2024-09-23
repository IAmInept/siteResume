import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import HeroSection from './components/Hero.tsx'
import Qualifications from './components/Qualifications.tsx'
import Experience from './components/Experience.tsx'
import Footer from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <HeroSection />
    <Qualifications />
    <Experience />
    <Footer />
  </StrictMode>,
)
