export interface Character{
    id:number,
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
        id:number,
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