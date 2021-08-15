import { useQuery } from '@apollo/client'
import GET_POKEMON from '../queries/pokemonQuery'
import AboutTab from '../components/Tabs/AboutTab'
import StatsTab from '../components/Tabs/StatsTab'
import MovesTab from '../components/Tabs/MovesTab'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const PokemonDetailPage = ({ match }) => {
  console.log("Render PokemonDetailPage")
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: match.params.name }
  })
  if (loading) return "Loading ..."
  if (error) return "Error ..."
  console.log(data)
  return (
    <>
      <Tabs defaultActiveKey="about">
        <Tab eventKey="about" title="About">
          <AboutTab 
            height={data.pokemon.height}
            weight={data.pokemon.weight}
            abilities={data.pokemon.abilities}
            types={data.pokemon.types}
          />
        </Tab>
        <Tab eventKey="stats" title="Stats">
          <StatsTab stats={data.pokemon.stats}/>
        </Tab>
        <Tab eventKey="moves" title="Moves">
          <MovesTab moves={data.pokemon.moves} />
        </Tab>
      </Tabs>
    </>
  )
}

export default PokemonDetailPage
