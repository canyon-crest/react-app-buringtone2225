import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import ShopCard from './ShopCard.jsx'
import Footer from './Footer.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <ShopCard name='Shark Plush' description='A soft shark companion! $100' />
    <Footer />
    <App />
  </StrictMode>
)