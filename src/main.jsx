import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { CurrentPokemonProvider } from './components/BodyPokedex/context/CurrentPokemon'
import { InitialTextProvider } from './components/BodyPokedex/context/InititalText'
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
