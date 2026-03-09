import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Card name='Fast-Setting Concrete' description='A type of concrete' />
    <Card name='High-Strength Concrete' description='Another type of concrete' />
    <Card name='All-Purpose Concrete' description='A third type of concrete' />
    <Card name='Sources' description='Home Depot' />
    <Footer />
    <App />
  </StrictMode>
)
