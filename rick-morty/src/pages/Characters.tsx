import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { Form } from "../components/Form"
import { Header } from "../components/Header"
import { CharacterList } from "../components/CharacterList"
import { api } from "../services/api"
import {Character} from "../types"
import {NewCharacterModal} from "../components/NewCharacterModal"
import { CharacterItem } from "../components/CharacterList/CharacterItem"

export const Characters = () => {
    
    const [characters, setCharacters] = useState<Character[]>([])
    const [page, setPage] = useState(1)
    
    useEffect(() => {
        api.get('/character?page='+ page.toString())
        .then(response => setCharacters(response.data.results))
       
    }, [increment]) 

    function increment(){
      setPage(page + 1) 
      window.scrollTo(0,  0);
    }


    return (
        <>
            <Header />
            <hr />
            <Form />
            <CharacterList
              characters={characters}  
            />
            <Button increment={increment}/>
        </>
  )
}