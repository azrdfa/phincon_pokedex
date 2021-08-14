import { MyPokemonContext } from '../contexts/MyPokemonContext'

const MyPokemonPage = () => {
  console.log("Render MyPokemonPage")
    return (
        <MyPokemonContext.Consumer>
          {(context) => {
            console.log(context)
            return (
              <>
                <h1>MyPokemonPage</h1>
              </>
            )
          }}
        </MyPokemonContext.Consumer>
    )
}

export default MyPokemonPage
