const MovesTab = ({ moves }) => {
  console.log("Render MovesTab")
  return (
    <ul>
      {
        moves.map(elem => {
          return <li key={elem.move.name}>{elem.move.name}</li>
        })
      }
    </ul>
  )
}

export default MovesTab
