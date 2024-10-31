
import React from 'react'
import { useState } from 'react'

const App = () => {
  const [Counter,setCounter]= useState(0)
  const increase = ()=>{
    setCounter(Counter+1)
  }
  const decrease = ()=>{
    setCounter(Counter-1)
  }
  return (
    <div>
      <button onClick={increase} >increase</button>
      <h1>{Counter}</h1>
      <button onClick={decrease} >increase</button>
    </div>
  )
}

export default App

