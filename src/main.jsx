import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'
import Facts from './Facts.jsx'
import Shop from './Shop.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
