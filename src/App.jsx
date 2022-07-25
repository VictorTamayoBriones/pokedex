import { BodyPokedex } from "./components/BodyPokedex"
import { DetailsPokemon } from "./components/DetailsPokemon"
import { HeaderPokedex } from "./components/HeaderPokedex"
import { Main } from "./styled-components/Main"
import { Pokedex } from "./styled-components/Pokedex"

function App() {
  return (
    <Main>
      <Pokedex>
        <HeaderPokedex/>
        <BodyPokedex/>
        <DetailsPokemon/>
      </Pokedex>
    </Main>
  )
}

export default App
