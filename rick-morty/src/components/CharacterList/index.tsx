import { CharacterItem } from './CharacterItem'
import { Container } from './style'
import {Character, CharacterModalProps} from '../../types'


interface CharacterListProps{
    characters: Character[];
}

export function CharacterList(props: CharacterListProps,{onOpenNewCharacterModal}: CharacterModalProps){
    return (
            <Container>
                <ul>
                    {props.characters.map(character => {
                        return  <CharacterItem 
                                    key={character.id}  
                                    character={character}
                                />
                                    
                    })}
                </ul>
            </Container>
    )
}