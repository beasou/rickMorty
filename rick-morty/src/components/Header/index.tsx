
import logo from '../../assets/rick-and-morty-portal.svg'

export function Header(){
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="imagem" />
            </div>
            <nav>
                <li><h1>Caracters</h1></li>
                <li>Locations</li>
                <li>Episodes</li>
            </nav>
            <hr />
        </header>
    )
}