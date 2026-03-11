import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import ShopCard from './ShopCard.jsx'
import Footer from './Footer.jsx'



function Shop() {
  return(
    <>
    <h1>Store</h1>
      <StrictMode>
        <ShopCard name='Shark Plush' description='A soft shark companion! $100' />
      </StrictMode>
    </>
  )
}


export default Shop