import img from '../../assets/morty-talking.svg'

interface RepositoryItemProps{
    repository:{
        image:string,
        name: string,
        status: string,
        species: string,
        gender: string,
    }
}

export function RepositoryItem(props: RepositoryItemProps){
    return(
        <li>
            <img src={props.repository.image} alt="Imagem" />
            <h1>{props.repository.name}</h1>
            <p>{props.repository.species}</p>
        </li>
    )
}