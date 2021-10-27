import { useQuery } from '@apollo/client'
import GET_POKEMON from '../../queries/pokemonQuery'
import { CatchButton } from '../../components/Buttons'
import { AboutTab, MovesTab, StatsTab } from '../../components/Tabs'
import {
  Tabs, Tab, Image,
  Badge
} from 'react-bootstrap'
import { restyleId, restyleName } from '../../restyles'
import Loading from "../../components/Loading/Loading"
import "./PokemonDetailPage.css"

const PokemonDetailPage = ({ match }) => {
  console.log("Render PokemonDetailPage")
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: match.params.name }
  })
  if (loading) return <div className="pdp-fullheight-container">
    <Loading />
  </div>
  if (error) return "Error ..."
  return (
    <div className="pdp-container">
      <div className="pdp-identity-container">
        <h2 className="pdp-name">{restyleName(data.pokemon.name)}</h2>
        <h6>{restyleId(data.pokemon.id)}</h6>
      </div>
      <div className="pdp-badge-container">
        {
          data.pokemon.types.map(elem => {
            return <Badge
              bg="primary"
              key={elem.type.name}
              className="pdp-badge"
            >{elem.type.name}</Badge>
          })
        }
      </div>
      <div className="pdp-image-catch-button-container">
        <Image
          src={data.pokemon.sprites.front_default}
          className="pdp-image"
        /><br />
        <CatchButton pokemon={data.pokemon} />
      </div>
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
          <StatsTab stats={data.pokemon.stats} />
        </Tab>
        <Tab eventKey="moves" title="Moves">
          <MovesTab moves={data.pokemon.moves} />
        </Tab>
      </Tabs>
    </div>
  )
}

export default PokemonDetailPage
