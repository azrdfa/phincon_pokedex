const AboutTab = ({ height, weight, abilities }) => {
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
    </>
  )
}

export default AboutTab
