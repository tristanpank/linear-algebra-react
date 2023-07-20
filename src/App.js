import Matrix from "./components/Matrix";

function App() {
  let matrix = [
    [1, 0, 0],
    [0, 1, 1],
    [0, 0, 1]
  ]
  return (
    <div>
      <Matrix currMatrix={matrix} />
    </div>
  );
}

export default App;
