import { useState } from 'react'
import { useQuery } from '@apollo/client'
import GET_POKEMONS from '../../queries/pokemonsQuery'
import { MyPokemonContext } from '../../contexts/MyPokemonContext'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import DefaultPagination from '../../components/Paginations/DefaultPagination'
import './PokemonListPage.css'
import { LinkContainer } from 'react-router-bootstrap'

const PokemonListPage = () => {
  console.log("Render PokemonListPage")
  const [state, setState] = useState({
    offset: 0,
    currPage: 1
  })
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { limit: 10, offset: state.offset }
  })
  if (loading) return "Loading ..."
  if (error) return "Error ..."
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
        const capitalizeFirstLetter = (string) => {
          return string.charAt(0).toUpperCase() + string.slice(1);
        }
        const pokemons = data.pokemons.results.map(pokemon => {
          const id = getId(pokemon.url)
          return { id: id, name: capitalizeFirstLetter(pokemon.name), owned: countOwned(id) }
        })
        return (
          <>
            {
              pokemons.map(pokemon => {
                return <Card key={pokemon.id} className={"card"}>
                  <Card.Body className={"body"}>
                    <div>
                      <Card.Title>{pokemon.name}</Card.Title>
                      <Card.Subtitle>Own {pokemon.owned}</Card.Subtitle>
                    </div>
                    <LinkContainer to={`/pokemondetail/${pokemon.id}`}>
                      <Button variant="primary">Detail</Button>
                    </LinkContainer>
                  </Card.Body>
                </Card>
              })
            }
            <DefaultPagination
              handlePrevPage={state.offset !== 0 ? handlePrevPage : null}
              handleNextPage={state.offset !== Math.floor(data.pokemons.count / 10) * 10 ? handleNextPage : null}
              currPage={state.currPage}
              className={"pagination"}
            />
          </>
        )
      }}
    </MyPokemonContext.Consumer>
  )
}

export default PokemonListPage
