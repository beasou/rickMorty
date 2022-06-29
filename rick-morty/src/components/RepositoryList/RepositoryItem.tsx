interface RepositoryItemProps{
    repository:{
        id:string,
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
            <h2>{props.repository.name}</h2>
            <p>{props.repository.status}</p>
            <p>{props.repository.species}</p>
            <p>{props.repository.gender}</p>
        </li>
    )
}