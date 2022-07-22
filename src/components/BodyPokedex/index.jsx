import Body from '../../assets/Pokedex-body.svg';
import { ScreenPokedex } from '../Screen-pokedex';
import { BodyContainer, Container, SVGBody } from './style';

export const BodyPokedex = () =>{
    return(
        <BodyContainer>
            <SVGBody src={ Body } />
            <Container>
                <ScreenPokedex/>
            </Container>
        </BodyContainer>
    )
}