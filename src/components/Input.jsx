import rref from "../linearAlgebraFunctions/rref";
import { useEffect, useState } from "react";

export default function Input({currMatrix, setCurrMatrix}) {
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
        }}></input>
        row.push(col);
      }
      tempMatrix.push(<div>{row}</div>);
    }
    setInputMatrix(tempMatrix);
  }, [rows, cols]);

  const handleSubmit = async () => {
    setCurrMatrix(valueMatrix);
  }

  return(
    <form>
      <label>Row number</label>
      <input type="number" onChange={(e) => (e.target.value > 0) ? setRows(e.target.value) : setRows(0)}></input>
      <label>Col number</label>
      <input type="number" onChange={(e) => (e.target.value > 0) ? setCols(e.target.value) : setCols(0)}></input>
      <div>{inputMatrix}</div>
      <button type="submit">Submit</button>
    </form>
  )
}