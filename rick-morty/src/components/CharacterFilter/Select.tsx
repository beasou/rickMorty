import { Character } from "../../types";

interface SelectProps {
  species: string[];
}

export function SelectSpecies(props: SelectProps) {
  // console.log(especie)
  return (
    <>
      <option value="0" hidden>
        Species
      </option>
      {props.species.map((specie) => {
        return <option value={specie}>{specie}</option>;
      })}
    </>
  );
}

// export function SelectGender(props: SelectProps) {
//   return (
//     <>
//       <option value="0" hidden>
//         Gender
//       </option>
//       <option value="1">{props.characterInformation.gender}</option>
//     </>
//   );
// }

// export function SelectStatus(props: SelectProps) {
//   return (
//     <>
//       <option value="0" hidden>
//         Status
//       </option>
//       <option value="1">{props.characterInformation.status}</option>
//     </>
//   );
// }
