import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './Compnent/Context.jsx'
// import Navbar from './Compnent/Navbar.jsx'
// import Slick from './Compnent/Slick.jsx'
// import Home from './Compnent/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
   
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
