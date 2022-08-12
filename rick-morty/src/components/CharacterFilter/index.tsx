import { Character } from "../../types";
import { SelectGender, SelectSpecies, SelectStatus } from "./Select";
import { Container, Content } from "./style";

interface FilterProps {
  handleSaveFilterByName: () => void;
  setFilterByName: (event: any) => void;
  filterByName: string;
  characters: Character[];
}

export function CharacterFilter(props: FilterProps) {
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
          <select name="species" id="species" defaultValue="0">
            {props.characters.map((characterInformationSpecies) => {
              return (
                <SelectSpecies
                  key={characterInformationSpecies.id}
                  characterInformation={characterInformationSpecies}
                />
              );
            })}
          </select>
        </p>

        <p>
          <select name="gender" id="gender" defaultValue="0">
            {props.characters.map((characterInformationGender) => {
              return (
                <SelectGender
                  key={characterInformationGender.id}
                  characterInformation={characterInformationGender}
                />
              );
            })}
          </select>
        </p>

        <p>
          <select name="status" id="status" defaultValue="0">
            {props.characters.map((characterInformationStatus) => {
              return (
                <SelectStatus
                  key={characterInformationStatus.id}
                  characterInformation={characterInformationStatus}
                />
              );
            })}
          </select>
        </p>
      </Content>
    </Container>
  );
}
