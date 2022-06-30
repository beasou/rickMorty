import {Container} from './style'
import {RepositoryList } from '../RepositoryList'


export function Button(){
    return(
        <Container>   
            <button onClick={RepositoryList}>Loading More..</button>  
        </Container>
    )
}

