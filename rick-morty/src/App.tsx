import { Button } from "./components/Button";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { RepositoryList } from "./components/RepositoryList";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
        <Header />
        <hr />
        <Form />
        <RepositoryList />
        <Button />
        <GlobalStyle />
        
    </>
  );
}
