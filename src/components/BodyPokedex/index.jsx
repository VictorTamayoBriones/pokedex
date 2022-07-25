import { Bocina } from '../Bocina';
import { FormSearch } from '../FormSeacrh';
import { ScreenPokedex } from '../Screen-pokedex';
import { BodyContainer, Container } from './style';

export const BodyPokedex = () =>{
    return(
        <BodyContainer>
            <Bocina/>
            <Container>
                <ScreenPokedex/>
                <FormSearch/>
            </Container>
        </BodyContainer>
    )
}