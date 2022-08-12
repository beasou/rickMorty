import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { CharacterFilter } from "../components/CharacterFilter";
import { Header } from "../components/Header";
import { CharacterList } from "../components/CharacterList";
import { api } from "../services/api";
import { Character } from "../types";

export const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [filterByName, setFilterByName] = useState("");
  const [savedName, setSavedName] = useState("");

  //CARREGAR TODOS OS PERSONAGENS
  useEffect(() => {
    api
      .get("/character?page=" + page.toString())
      .then((response) => console.log(response.data.results));
  }, [page]);

  function increment() {
    setPage(page + 1);
    window.scrollTo(0, 0);
  }

  //FILTRO POR NOME
  useEffect(() => {
    api.get("/character/?name=" + savedName).then((response) => {
      setCharacters(response.data.results);
    });
  }, [handleSaveFilterByName]);

  function handleSaveFilterByName() {
    setSavedName(filterByName);
  }

  return (
    <>
      <Header />
      <hr />
      <CharacterFilter
        handleSaveFilterByName={handleSaveFilterByName}
        setFilterByName={setFilterByName}
        filterByName={filterByName}
        characters={characters}
      />
      <CharacterList characters={characters} />
      <Button increment={increment} />
    </>
  );
};
