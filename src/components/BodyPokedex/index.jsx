import Body from '../../assets/Pokedex-body.svg';
import { FormSearch } from '../FormSeacrh';
import { ScreenPokedex } from '../Screen-pokedex';
import { BodyContainer, Container, SVGBody } from './style';

export const BodyPokedex = () =>{
    return(
        <BodyContainer>
            <SVGBody src={ Body } />
            <Container>
                <ScreenPokedex/>
                <FormSearch/>
            </Container>
        </BodyContainer>
    )
}