// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { BrowserRouter } from "react-router-dom"
import NavBar from "./components/NavBar"

function App() {

  return (
     <div>
      <h1>React Navbar App</h1>
      <BrowserRouter>
      <NavBar/>
      </BrowserRouter>
     </div>
  )
}

export default App
