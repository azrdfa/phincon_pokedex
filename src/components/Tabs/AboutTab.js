const AboutTab = ({ height, weight, abilities, types }) => {
  console.log("Render AboutTab")
  return (
    <>
      Height: {height} <br />
      Weight: {weight} <br />
      Abilities: <br />
      <ul>
        {
          abilities.map(elem => {
            return <li key={elem.ability.name}>{elem.ability.name}</li>
          })
        }
      </ul>
      Types: <br />
      <ul>
        {
          types.map(elem => {
            return <li key={elem.type.name}>{elem.type.name}</li>
          })
        }
      </ul>
    </>
  )
}

export default AboutTab
