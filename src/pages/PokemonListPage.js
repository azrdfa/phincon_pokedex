import { MyPokemonContext } from '../contexts/MyPokemonContext'

const PokemonListPage = () => {
  console.log("Render PokemonListPage")
    return (
        <MyPokemonContext.Consumer>
          {(context) => {
            console.log(context)
            return (
              <>
                <h1>PokemonListPage</h1>
              </>
            )
          }}
        </MyPokemonContext.Consumer>
    )
}

export default PokemonListPage
