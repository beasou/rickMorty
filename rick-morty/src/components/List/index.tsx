import { RepositoryItem } from './RepositoryItem'
import { Container } from './style'

export function List(){
    return (
        <Container>
            <ul>
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </Container>
    )
}