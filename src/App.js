import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MyPokemonContextProvider from "./contexts/MyPokemonContext"
import DefaultNavbar from './components/Navbars/DefaultNavbar'
import PokemonListPage from "./pages/PokemonListPage"
import PokemonDetailPage from "./pages/PokemonDetailPage"
import MyPokemonPage from "./pages/MyPokemonPage"

const App = () => {
  console.log("Render App")
  return (
    <Router>
      <div>
        <DefaultNavbar />
        <Switch>
          <MyPokemonContextProvider>
            <Route path="/" exact component={PokemonListPage} />
            <Route path="/pokemondetail/:id" component={PokemonDetailPage} />
            <Route path="/mypokemon" component={MyPokemonPage} />
          </MyPokemonContextProvider>
        </Switch>
      </div>
    </Router>
  )
}

export default App
