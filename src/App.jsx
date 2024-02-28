import { useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-peach-fuzz">Hola mundo</h1>
      </div>
    </>
  );
}

export default App;
