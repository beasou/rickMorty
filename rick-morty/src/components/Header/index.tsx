
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
                <li>
                    <a href="">Caracters</a>
                </li>
                <li>
                    <a href="">Locations</a>
                </li>
                <li>
                    <a href="">Episodes</a>
                </li>
            </nav>
            
        </Container>
    )
}