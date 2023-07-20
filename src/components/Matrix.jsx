export default function Matrix({currMatrix}) {
  let i = -1;
  const display = currMatrix.map(row => {
    return row.map(col => {
      i++;
      return <div key={i}>{col}</div>
    })
  });

  return (
    <div>{display}</div>
  )
}