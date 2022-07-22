import { BodyPokedex } from "./components/BodyPokedex"
import { HeaderPokedex } from "./components/HeaderPokedex"
import { Main } from "./styled-components/Main"
import { Pokedex } from "./styled-components/Pokedex"

function App() {
  return (
    <Main>
      <Pokedex>
        <HeaderPokedex/>
        <BodyPokedex/>
      </Pokedex>
    </Main>
  )
}

export default App
