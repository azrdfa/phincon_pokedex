import { MyPokemonContext } from '../contexts/MyPokemonContext'

const PokemonDetailPage = () => {
  console.log("Render PokemonDetailPage")
    return (
        <MyPokemonContext.Consumer>
          {(context) => {
            console.log(context)
            return (
              <>
                <h1>PokemonDetailPage</h1>
              </>
            )
          }}
        </MyPokemonContext.Consumer>
    )
}

export default PokemonDetailPage
