import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import RandomUserApp from './RandomUserApp'
import './index.css'
import { UserProvider } from './UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <UserProvider>
        <RandomUserApp />
     </UserProvider>
  </React.StrictMode>,
)
