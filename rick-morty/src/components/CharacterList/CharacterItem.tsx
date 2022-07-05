interface CharacterItemProps{
    repository:{
        id:string,
        image:string,
        name: string,
        status: string,
        species: string,
        gender: string,
    }
}

export function CharacterItem(props: CharacterItemProps){
    return(
        <li>
            <a href="#">
                <img src={props.repository.image} alt="Imagem" />
                <h2>{props.repository.name}</h2>
                <p>{props.repository.species}</p>
                <p>{props.repository.gender}</p>
            </a>
        </li>
    )
}