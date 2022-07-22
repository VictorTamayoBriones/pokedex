import { useContext } from "react"
import { Container, Screen } from "./style"
import { InitialTextContext } from "../BodyPokedex/context/InititalText"

export const ScreenPokedex = () =>{

    const {showText}=useContext(InitialTextContext)

    return(
        <Container>
            <Screen showText={ showText } >
                <h1>My Pokédex</h1>
            </Screen>
        </Container>
    )
}