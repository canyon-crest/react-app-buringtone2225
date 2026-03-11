import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import FactsCard from './FactsCard.jsx'
import Footer from './Footer.jsx'

function Facts() {
  return (
    <>
      <FactsCard />
    </>
)
}
  
  export default Facts