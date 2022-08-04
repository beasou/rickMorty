import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface CharacterEpisodeProps {
  idEpisodes: string[];
}

interface episodes {
  id: number;
  air_date: string;
  created: string;
  episode: string;
  name: string;
  url: string;
}

export function CharacterEpisode(props: CharacterEpisodeProps) {
  const [episodes, setEpisode] = useState<episodes[]>([]);

  useEffect(() => {
    api.get("/episode/" + props.idEpisodes).then((response) => {
      if(Array.isArray(response.data)){
        setEpisode(response.data);
      }else{
        setEpisode([response.data])
      }
        
    });
  }, [])

    return (
        <>
            {episodes.map((episode => {
                return (
                    <li>
                        <h3>{episode.episode}</h3>
                        <p>{episode.name}</p>
                        <p>{episode.air_date}</p>
                    </li>
                )
            })).slice(0,4)}
        </>
    )

}