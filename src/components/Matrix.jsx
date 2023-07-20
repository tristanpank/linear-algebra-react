export default function Matrix({currMatrix}) {
  const display = currMatrix.map(row => {
    return row.map(col => {
      return <div>{col}</div>
    })
  });

  return (
    <div>{display}</div>
  )
}