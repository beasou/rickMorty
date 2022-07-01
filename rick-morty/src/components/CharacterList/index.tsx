import { CharacterItem } from './CharacterItem'
import { Container } from './style'
import {Character} from '../../types'


interface CharacterListProps{
    characters: Character[];
}

export function CharacterList(props: CharacterListProps){


    return (
            <Container>
                <ul>
                    {props.characters.map(repository => {
                        return  <CharacterItem key={repository.id}  repository={repository}/>
                    })}
                </ul>
            </Container>
    )
}