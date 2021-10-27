import { useState } from 'react'
import { useQuery } from '@apollo/client'
import GET_POKEMONS from '../../queries/pokemonsQuery'
import { MyPokemonContext } from '../../contexts/MyPokemonContext'
import { Card, Button, Image } from "react-bootstrap"
import { DefaultPagination } from '../../components/Paginations'
import { LinkContainer } from 'react-router-bootstrap'
import "./PokemonListPage.css"
import { restyleName } from '../../restyles'
import { BiInfoCircle } from 'react-icons/bi'

const PokemonListPage = () => {
  console.log("Render PokemonListPage")
  const [state, setState] = useState({
    offset: 0,
    currPage: 1,
  })
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { limit: 10, offset: state.offset }
  })
  if (loading) return "Loading ..."
  if (error) return "Error ..."
  const lastPage = Math.ceil(data.pokemons.count / 10)
  const handlePrevPage = () => {
    setState({
      offset: data.pokemons.prevOffset,
      currPage: state.currPage - 1
    })
  }
  const handleNextPage = () => {
    setState({
      offset: data.pokemons.nextOffset,
      currPage: state.currPage + 1
    })
  }
  return (
    <MyPokemonContext.Consumer>
      {(context) => {
        const getId = (url) => {
          const url_components = url.split("/")
          return parseInt(url_components[url_components.length - 2])
        }
        const countOwned = (id) => {
          return context.myPokemon.filter(pokemon => pokemon.id === id).length
        }
        const pokemons = data.pokemons.results.map(pokemon => {
          const id = getId(pokemon.url)
          return { id: id, name: pokemon.name, owned: countOwned(id) }
        })
        return (
          <>
            <div className="plp-flex-container">
              {
                pokemons.map(pokemon => {
                  return <div key={pokemon.id} className="plp-flex-item">
                    <Card className="plp-card">
                      <Card.Body style={{ display: "flex", justifyContent: "flex-start" }}>
                        <Image style={{ marginRight: "1rem", height: "96px", width: "96px" }} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png" className="plp-image" />
                        <div>
                          <span style={{ marginRight: "0.5rem" }}>{restyleName(pokemon.name)}</span><br />
                          <span className="plp-subtitle">You own {pokemon.owned}</span>
                        </div>
                      </Card.Body>
                      <Card.Footer className="d-grid gap-2">
                        <LinkContainer to={`/phincon_pokedex/pokemondetail/${pokemon.name}`}>
                          <Button size="sm" variant="primary">
                            <div className="plp-button-content">
                              More Info
                              <BiInfoCircle size={15} />
                            </div>
                          </Button>
                        </LinkContainer>
                      </Card.Footer>
                    </Card>
                  </div>
                })
              }
            </div>
            <DefaultPagination
              handlePrevPage={state.offset !== 0 ? handlePrevPage : null}
              handleNextPage={state.offset !== Math.floor(data.pokemons.count / 10) * 10 ? handleNextPage : null}
              currPage={state.currPage}
              lastPage={lastPage}
            />
          </>
        )
      }}
    </MyPokemonContext.Consumer>
  )
}

export default PokemonListPage
