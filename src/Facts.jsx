import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState, useEffect } from 'react'
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore"
import { db } from './firebase.js'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import FactsCard from './FactsCard.jsx'
import Footer from './Footer.jsx'
import './Facts.css'

function Facts() {
  const [inputText, setInputText] = useState("")
  const [items, setItems] = useState([])
  const [apiData, setApiData] = useState('')

  const loadItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"))
    const loaded = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    setItems(loaded);
  }

  useEffect(() => {
    loadItems();
  }, [])

  const handleAdd = async () => {
    if (inputText.trim() === "") return
    await addDoc(collection(db, "items"), {
      text: inputText,
      createdAt: serverTimestamp()
    })

    setInputText("")
    loadItems()
  }

  const fetchDogImage = async () => {
    try {
      const response = await
      fetch('https://dog.ceo/api/breeds/image/reandom')
      const data = await response.json()
      setApiData(data.message)
    }
    catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return ( 
    
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto"}}>
      <h2>Shark Species Game</h2>
      <div>
        <input 
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type shark species here"
        />
        <button className="enterButton" onClick={handleAdd}>Enter</button>
      </div>
      <h3>Species Found:</h3>
      {items.length === 0 ? (
        <p>Items appear here</p>
      ) : (
        <ul className = "speciesList">
          {items.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      )
      }

      <button onClick={fetchDogImage}>Fetch Dog Image</button>
      {apiData && <img src={apiData} alt="Random Dog" />}
    </div>
  ) 
}
  
  export default Facts