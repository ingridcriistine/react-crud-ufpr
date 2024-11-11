import { useState } from "react";
import Main from "./components/Main/Main";

function App() {

  const [counter, setCounter] = useState(0);

  function incrementarContador() {
    setCounter(counter+1);
  }

  return (
    <>
      <div>
        <h1>Contador: {counter}</h1>
        <button onClick={incrementarContador}>Incrementar</button>
      </div>
      <Main/>
    </>
  );
}

export default App;
