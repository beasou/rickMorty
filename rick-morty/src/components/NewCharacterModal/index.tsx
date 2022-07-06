import Modal from 'react-modal'
import {CharacterItemProps} from '../../types'

interface NewCharacterModalProps{
    isOpen: boolean
    onRequestClose: () => void
}

export function NewCharacterModal({isOpen, onRequestClose}: NewCharacterModalProps, props: CharacterItemProps){
    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}>
            <img src={props.character.image} alt="Imagem" />
            <h1>{props.character.name}</h1>
        </Modal>
    )
}