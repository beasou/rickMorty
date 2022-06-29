import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
        <Header />
        <hr />
        <Form />
        <List />
        <GlobalStyle />
    </>
  );
}
