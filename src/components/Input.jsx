import rref from "../linearAlgebraFunctions/rref";
import { useEffect, useState } from "react";

export default function Input({currMatrix, setCurrMatrix, setTriggerRender, triggerRender }) {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [valueMatrix, setValueMatrix] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);
  const [inputMatrix, setInputMatrix] = useState([]);

  useEffect(() => {
    let tempMatrix = [];
    console.log(rows, cols);
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < cols; j++) {
        let col = <input type="number" placeholder="0" onChange={e => {
          let temp = valueMatrix;
          temp[i][j] = Number(e.target.value);
          console.log(e.target.value);
          setValueMatrix(temp);
        }} className={`border border-black text-center`} style={{width: `${1/cols * 100}%`}}></input>
        row.push(col);
        
      }
      tempMatrix.push(<div>{row}</div>);
    }
    setInputMatrix(tempMatrix);
    
    let tempValMatrix = valueMatrix;
    
    if (rows < 0) {
      setRows(0);
      return;
    }

    if (cols < 0) {
      setCols(0);
      return;
    }

    if (rows === 0 || cols === 0) {
      setValueMatrix([[]]);
      return;
    }

    while (rows < tempValMatrix.length) {
      tempValMatrix.pop();
    }

    while (cols < tempValMatrix[0].length) {
      for (let row of tempValMatrix) {
        row.pop();
      }
    }

    while (rows > tempValMatrix.length) {
      let row = [];
      for (let i = 0; i < tempValMatrix[0].length; i++) {
        row.push(0);
      }
      tempValMatrix.push(row);
    }

    while (cols > tempValMatrix[0].length) {
      for (let row of tempValMatrix) {
        row.push(0);
      }
    }

    setValueMatrix(tempValMatrix);

  }, [rows, cols]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let rrefMatrix = JSON.parse(JSON.stringify(valueMatrix));
    await rref(rrefMatrix);
    setCurrMatrix(rrefMatrix);
    console.log(rrefMatrix);
    console.log(valueMatrix);
    setTriggerRender(!triggerRender);
  }

  return(
    <form onSubmit={handleSubmit} className="flex-col justify-center items-center">
      <label className="font-bold">Row number</label>
      <input type="number" onChange={(e) => (e.target.value > 0) ? setRows(e.target.value) : setRows(0)} className="text-right border border-black m-2"></input>
      <label>Col number</label>
      <input type="number" onChange={(e) => (e.target.value > 0) ? setCols(e.target.value) : setCols(0)} className="text-right border border-black m-2"></input>
      <div className="flex-col w-auto">{inputMatrix}</div>
      <button type="submit">Submit</button>
    </form>
  )
}