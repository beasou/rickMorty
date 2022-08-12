import { Character } from "../../types";

interface SelectProps {
  characterInformation: Character;
}

export function Select(){
  
}

export function SelectSpecies(props: SelectProps) {
  return (
    <>
      <option value="0" hidden>
        Species
      </option>
      <option value="1">{props.characterInformation.species}</option>;
    </>
  );
}

export function SelectGender(props: SelectProps) {
  return (
    <>
      <option value="0" hidden>
        Gender
      </option>
      <option value="1">{props.characterInformation.gender}</option>
    </>
  );
}

export function SelectStatus(props: SelectProps) {
  return (
    <>
      <option value="0" hidden>
        Status
      </option>
      <option value="1">{props.characterInformation.status}</option>
    </>
  );
}
