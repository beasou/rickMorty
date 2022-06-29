import { useState, useEffect} from 'react'
import { RepositoryItem } from './RepositoryItem'
import { Container } from './style'

const character = "https://rickandmortyapi.com/api/character"

const repository ={
    image:"",
    name: 'blbla',
    status:"ds",
    species:"efe",
    gender: "ef",

}

export function List(){
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch(character)
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return (
        <Container>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </Container>
    )
}