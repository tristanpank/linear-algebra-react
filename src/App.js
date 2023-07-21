import Matrix from "./components/Matrix";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [currMatrix, setCurrMatrix] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);
  const [triggerRender, setTriggerRender] = useState(true);
  return (
    <div>
      <Input currMatrix={currMatrix} setCurrMatrix={setCurrMatrix} setTriggerRender={setTriggerRender} triggerRender={triggerRender} />
      <Matrix key={currMatrix} currMatrix={currMatrix} triggerRender={triggerRender} />
    </div>
  );
}

export default App;
