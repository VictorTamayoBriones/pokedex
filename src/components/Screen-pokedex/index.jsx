import { useEffect, useState } from "react"
import { Container, Screen } from "./style"

export const ScreenPokedex = () =>{

    const [showText, setShowText]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setShowText(false);
        }, 2500)
    }, [])

    return(
        <Container>
            <Screen showText={ showText } >
                <h1>My Pokédex</h1>
            </Screen>
        </Container>
    )
}