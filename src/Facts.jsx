import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import FactsCard from './FactsCard.jsx'
import Footer from './Footer.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Nav />
      <h1>Information About Sharks</h1>
      <FactsCard name='Species'/>
      <Footer />
      <App />
    </StrictMode>
  )
  