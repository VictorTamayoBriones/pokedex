import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CurrentPokemonProvider } from './context/currentPokemon'
import { InitialTextProvider } from './context/InitialText'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InitialTextProvider>
      <CurrentPokemonProvider>
        <App />
      </CurrentPokemonProvider>
    </InitialTextProvider>
  </React.StrictMode>
)
