import Matrix from "./components/Matrix";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [currMatrix, setCurrMatrix] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);
  return (
    <div>
      <Input currMatrix={currMatrix} setCurrMatrix={setCurrMatrix} />
      <Matrix currMatrix={currMatrix} />
    </div>
  );
}

export default App;
