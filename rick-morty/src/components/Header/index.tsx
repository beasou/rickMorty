
import portal from '../../assets/rick-and-morty-portal.svg'
import rick from '../../assets/logo.svg'
import { Container } from './style'

export function Header(){
    return(
        <Container>
            <div className="logo">
                <img src={portal} alt="imagem" />
                <img src={rick} alt="imagem" />
            </div>
            <nav>
                <a >Caracters</a>
                    <a >Locations</a>
                    <a >Episodes</a>
            </nav>
        </Container>
    )
}