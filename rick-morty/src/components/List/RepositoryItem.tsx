import img from '../../assets/morty-talking.svg'

export function RepositoryItem(){
    return(
        <li>
            <img src={img} alt="" />
            <h1>Nome</h1>
            <p>Descrição</p>
        </li>
    )
}