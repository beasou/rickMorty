import { useState } from "react";
import { Character, CharacterItemProps } from "../../types";

export function CharacterEpisode(props: CharacterItemProps){
    const [episodes, setEpisodes] = useState<Character[]>([])

    return(
        <li>
            <h3>episodio nome</h3>
            <p>{props.character.episode.slice(1,2)}</p>
        </li>
    )
}