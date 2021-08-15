import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MyPokemonContextProvider from "./contexts/MyPokemonContext"
import DefaultNavbar from './components/Navbars/DefaultNavbar'
import PokemonListPage from "./pages/PokemonListPage/PokemonListPage"
import PokemonDetailPage from "./pages/PokemonDetailPage"
import MyPokemonListPage from "./pages/MyPokemonListPage"

const App = () => {
  console.log("Render App")
  return (
    <Router>
      <div>
        <DefaultNavbar />
        <Switch>
          <MyPokemonContextProvider>
            <Route path="/" exact component={PokemonListPage} />
            <Route path="/pokemondetail/:name" component={PokemonDetailPage} />
            <Route path="/mypokemon" component={MyPokemonListPage} />
          </MyPokemonContextProvider>
        </Switch>
      </div>
    </Router>
  )
}

export default App
