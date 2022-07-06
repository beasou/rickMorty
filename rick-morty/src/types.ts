export interface Character{
    id:string,
    image:string,
    name: string,
    status: string,
    species: string,
    gender: string,
    type:string,
    origin:string,
    location:string,

}

export interface CharacterItemProps{
    character:{
        id:string,
        image:string,
        name: string,
        status: string,
        species: string,
        gender: string, 
        type:string,
        origin:string,
        location:string,
    }
   
}

export interface CharacterListProps{
    characters: Character[];
}

export interface CharacterModalProps{
    onOpenNewCharacterModal:() => void
}