import { CharacterList } from '../CharacterList'
import {Content} from './style'

interface ButtonProps{
    increment: () => void
}

export function Button(props: ButtonProps){
   return (
        <Content>
            <button onClick={props.increment}>Loading More..</button>  
        </Content>
   )

}