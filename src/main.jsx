// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'           // importa o Tailwind v4 (@import "tailwindcss")
import LandingIpanema from './App.jsx'   // seu componente do canvas

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandingIpanema />
  </React.StrictMode>
)
