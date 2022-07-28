import portal from "../../assets/rick-and-morty-portal.svg";
import rick from "../../assets/logo.svg";
import { Container } from "./style";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <div className="logo">
        <img src={portal} alt="imagem" />
        <img src={rick} alt="imagem" />
      </div>
      <nav>
        <NavLink to={"/"}>Caracters</NavLink>
        <NavLink to={"/locations"}>Locations</NavLink>
        <NavLink to={"/episodes"}>Episodes</NavLink>
      </nav>
    </Container>
  );
}
