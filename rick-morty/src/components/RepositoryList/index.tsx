import { useState, useEffect} from 'react'
import { RepositoryItem } from './RepositoryItem'
import { Container } from './style'
import { Content } from './styleButton'

const apiRickMortCharacter = "https://rickandmortyapi.com/api/character?page="

interface Repository{
        id:string,
        image:string,
        name: string,
        status: string,
        species: string,
        gender: string, 
}


export function RepositoryList(){
    const [page, setPage] = useState(1)
    function increment(){
        setPage(page + 1) 
        window.scrollTo(0,  0);
    }
    const [repositories, setRepositories] = useState<Repository[]>([])
    useEffect(() => {
        fetch(apiRickMortCharacter + page.toString())
        .then(response => response.json())
        .then(data => setRepositories(data.results))
       
    }, [increment]) 
    
    return (
        <>
            <Container>
                <ul>
                    {repositories.map(repository => {
                        return  <RepositoryItem key={repository.id}  repository={repository}/>
                    })}
                </ul>
            </Container>
            <Content>
                <button onClick={increment}>Loading More..</button>  
            </Content>
        </>

    )
}