import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { InitialTextProvider } from './components/BodyPokedex/context/InititalText'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InitialTextProvider>
      <App />
    </InitialTextProvider>
  </React.StrictMode>
)
