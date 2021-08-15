const StatsTab = ({ stats }) => {
  console.log("Render StatsTab")
  return (
    <ul>
      {
        stats.map(elem => {
          return <li key={elem.stat.name}>{elem.stat.name}: {elem.base_stat}</li>
        })
      }
    </ul>
  )
}

export default StatsTab
