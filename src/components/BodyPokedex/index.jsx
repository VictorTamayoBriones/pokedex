import Body from '../../assets/Pokedex-body.svg';
import { BodyContainer, SVGBody } from './style';

export const BodyPokedex = () =>{
    return(
        <BodyContainer>
            <SVGBody src={ Body } />
        </BodyContainer>
    )
}