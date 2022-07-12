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
                <div className='characterDetails'>
                    <img src={props.character.image} alt="Imagem" />
                    <h1>{props.character.name}</h1>
                </div>
                <div className='characterInformations'>

                    <div className='informations'>
                        <h2>Informations</h2>
                        <ul>
                            <li>
                                <h3>Gender</h3>
                                <p>{props.character.gender}</p>
                            </li>
                            <li>
                                <h3>Status</h3>
                                <p>{props.character.status}</p>
                            </li>
                            <li>
                                <h3>Specie</h3>
                                <p>{props.character.species}</p>
                            </li>
                            <li>
                                <h3>Origin</h3>
                                <p>{props.character.origin.name}</p>
                            </li>
                            <li>
                              <h3>Location</h3>
                              <p>{props.character.location.name}</p>
                            </li>
                        </ul>
                    </div>
                    <div className='episodes'>
                        <h2>Episodes</h2>
                        <ul>
                            <li>
                                <h3>episodio nome</h3>
                                <p>{}</p>

                            </li>
                        </ul>
                        
                    </div>
                </div>
                
            </Modal>
        </li>
    )
}