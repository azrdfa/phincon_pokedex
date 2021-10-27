import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MyPokemonContextProvider from "./contexts/MyPokemonContext"
import DefaultNavbar from './components/Navbars/DefaultNavbar'
import {
  HomePage,
  PokemonListPage,
  PokemonDetailPage,
  MyPokemonListPage
} from './pages'

const App = () => {
  console.log("Render App")
  return (
    <Router>
      <div>
        <DefaultNavbar />
        <Switch>
          <MyPokemonContextProvider>
            <Route path="/phincon_pokedex" exact component={HomePage} />
            <Route path="/phincon_pokedex/pokemonlist" component={PokemonListPage} />
            <Route path="/phincon_pokedex/pokemondetail/:name" component={PokemonDetailPage} />
            <Route path="/phincon_pokedex/mypokemonlist" component={MyPokemonListPage} />
          </MyPokemonContextProvider>
        </Switch>
      </div>
    </Router>
  )
}

export default App
