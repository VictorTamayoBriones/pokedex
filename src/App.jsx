import { HeaderPokedex } from "./components/HeaderPokedex"
import { Main } from "./styled-components/Main"
import { Pokedex } from "./styled-components/Pokedex"

function App() {
  return (
    <Main>
      <Pokedex>
        <HeaderPokedex/>
      </Pokedex>
    </Main>
  )
}

export default App
