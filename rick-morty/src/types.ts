export interface Character {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  type: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  episode: string[];
}

export interface CharacterItemProps {
  character: Character;
}

export interface CharacterListProps {
  characters: Character[];
}

export interface CharacterModalProps {
  onOpenNewCharacterModal: () => void;
}
