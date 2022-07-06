import { useState } from 'react';
import {CharacterItemProps} from '../../types'
import Modal from 'react-modal'


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
                <img src={props.character.image} alt="Imagem" />
                <h2>{props.character.name}</h2>
            </a>
            <Modal 
                isOpen={characterModalOpen} 
                onRequestClose={handleCloseNewCharacterModal}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <img src={props.character.image} alt="Imagem" />
                <h1>{props.character.name}</h1>
                <div className='informations'>
                    <ul>
                        <li>
                            <h2>Gender</h2>
                            <p>{props.character.gender}</p>
                        </li>
                        <li>
                            <h2>Status</h2>
                            <p>{props.character.status}</p>
                        </li>
                        <li>
                            <h2>Specie</h2>
                            <p>{props.character.species}</p>
                        </li>
                        <li>
                            <h2>Origin</h2>
                            
                        </li>
                        <li>
                            <h2>Type</h2>
                            <p>{props.character.type}</p>
                        </li>
                        <li>
                            <h2>Location</h2>
                            
                        </li>
                    </ul>
                </div>
                <div className='episodes'>
                    teste
                </div>
            </Modal>
        </li>
    )
}