import React from 'react'
import { useState } from 'react'
import './App.css' // Import the stylesheet

const App = () => {
  const [Counter, setCounter] = useState(0)
  
  const increase = () => {
    setCounter(Counter + 1)
  }
  
  const decrease = () => {
    setCounter(Counter - 1)
  }
  
  return (
    <div className="app-container">
      <button onClick={increase}>Increase</button>
      <h1>{Counter}</h1>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default App

