export default function Matrix({currMatrix }) {
  let i = -1;
  const display = currMatrix.map(row => {
    return <div className="flex justify-center">{row.map(col => {
      i++;
      return <div key={i} className="m-5 text-center text-lg">{col}</div>
    })}</div>
  });

  return (
    <div>{display}</div>
  )
}