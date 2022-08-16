import { Character } from "../../types";
import { SelectSpecies } from "./Select";
import { Container, Content } from "./style";

interface FilterProps {
  handleSaveFilterByName: () => void;
  setFilterByName: (event: any) => void;
  filterByName: string;
  characters: Character[];
  setSpecie: (event: any) => void;
  handleSaveFilterBySpecies: () => void;
}

export function CharacterFilter(props: FilterProps) {
  const species: string[] = [];
  props.characters.forEach((character) => {
    if (!species.includes(character.species)) {
      species.push(character.species);
    }
  });

  return (
    <Container>
      <Content>
        <p>
          <input
            type="text"
            value={props.filterByName}
            placeholder="Filter by name..."
            onChange={(event) => props.setFilterByName(event.target.value)}
            onKeyPress={props.handleSaveFilterByName}
          />
        </p>
        <p>
          <select
            name="species"
            id="species"
            defaultValue="0"
            onChange={(event) => props.setSpecie(event.target.value)}
            onClick={props.handleSaveFilterBySpecies}
          >
            <SelectSpecies species={species} />
          </select>
        </p>

        {/* <p>
          <select name="gender" id="gender" defaultValue="0">
            
                <SelectGender
                />

          </select>
        </p>

        <p>
          <select name="status" id="status" defaultValue="0">
            
                <SelectStatus
                 
                />

          </select>
        </p> */}
      </Content>
    </Container>
  );
}
