import { useState, useEffect} from 'react'
import { RepositoryItem } from './RepositoryItem'
import { Container } from './style'

const apiRickMortCharacter = "https://rickandmortyapi.com/api/character"

interface Repository{
        id:string,
        image:string,
        name: string,
        status: string,
        species: string,
        gender: string, 
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch(apiRickMortCharacter)
        .then(response => response.json())
        .then(data => setRepositories(data.results))
    }, [])

    return (
        <Container>
            <ul>
                {repositories.map(repository => {
                    return  <RepositoryItem key={repository.id}  repository={repository}/>
                })}
            </ul>
        </Container>
    )
}