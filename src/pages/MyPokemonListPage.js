import { MyPokemonContext } from '../contexts/MyPokemonContext'

const MyPokemonListPage = () => {
  console.log("Render MyPokemonListPage")
    return (
        <MyPokemonContext.Consumer>
          {(context) => {
            console.log(context)
            return (
              <>
                <h1>MyPokemonListPage</h1>
              </>
            )
          }}
        </MyPokemonContext.Consumer>
    )
}

export default MyPokemonListPage
