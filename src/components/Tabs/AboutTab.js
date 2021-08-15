const AboutTab = ({ height, weight, abilities }) => {
  console.log("Render AboutTab")
  return (
    <ul>
      <li>Height: {height}</li>
      <li>Weight: {weight}</li>
      <li>Abilities:</li>
      <ul>
        {
          abilities.map(elem => {
            return <li key={elem.ability.name}>{elem.ability.name}</li>
          })
        }
      </ul>
    </ul>
  )
}

export default AboutTab
