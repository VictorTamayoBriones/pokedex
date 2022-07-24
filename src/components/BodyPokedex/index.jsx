import { FormSearch } from '../FormSeacrh';
import { ScreenPokedex } from '../Screen-pokedex';
import { BodyContainer, Container } from './style';

export const BodyPokedex = () =>{
    return(
        <BodyContainer>
            <Container>
                <ScreenPokedex/>
                <FormSearch/>
            </Container>
        </BodyContainer>
    )
}