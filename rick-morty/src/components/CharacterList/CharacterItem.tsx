import { useState } from "react";
import Modal from 'react-modal'

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

Modal.setAppElement('#root')

export function CharacterItem(props: CharacterItemProps){
    const [characterModalOpen, setCharacterModalOpen] = useState(false);

    function handleOpenNewCharacterModal(){
        setCharacterModalOpen(true)
    }
    function handleCloseNewCharacterModal(){
        setCharacterModalOpen(false)
    }
    
    return(
        <li>
            <a href="#" onClick={handleOpenNewCharacterModal}>
                <img src={props.repository.image} alt="Imagem" />
                <h2>{props.repository.name}</h2>
            </a>
            <Modal  
                isOpen={characterModalOpen} 
                onRequestClose={handleCloseNewCharacterModal}
            >
                <img src={props.repository.image} alt="Imagem" />
                <h1>{props.repository.name}</h1>
            </Modal>
        </li>
    )
}