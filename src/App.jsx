import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Facts from './Facts.jsx'
import Shop from './Shop.jsx'
import Home from './Home.jsx'
import Google from './firething.jsx'

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Google />
      <Nav setPage={setPage} />
      {page === "home" && <Home />}
      {page === "facts" && <Facts />}
      {page === "shop" && <Shop />}
      <Footer />
    </>
  )
}

export default App