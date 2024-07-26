import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/GlobajStyles.js'
import Home from './pages/Home'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>,
)
