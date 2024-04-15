import "./App.css";
import List from "./List";
import Form from "./Form";
import Provider from "./provider";

function App() {
  return (
    <>
      <Provider>
        <Form />
        <List />
      </Provider>
    </>
  );
}

export default App;
