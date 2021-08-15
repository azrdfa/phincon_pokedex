import React, { Component, createContext } from 'react'

export const MyPokemonContext = createContext()

class MyPokemonContextProvider extends Component {
  state = {
    myPokemon: [
      { id: 1, name: "Bulbasaur", nickname: "a"},
      { id: 1, name: "Bulbasaur", nickname: "b"},
      { id: 2, name: "Ivysaur", nickname: "c"}
    ]
  }
  addPokemon = (pokemon) => {
    this.setState({
      myPokemon: [...this.state.myPokemon, pokemon],
    })
  }
  removePokemon = (nickname) => {
    this.setState({
      myPokemon: this.state.myPokemon.filter(pokemon => pokemon.nickname !== nickname)
    })
  } 
  render() {
    return (
      <MyPokemonContext.Provider value={{
        ...this.state, 
        addPokemon: this.addPokemon,
        removePokemon: this.removePokemon
      }}>
        {this.props.children}
      </MyPokemonContext.Provider>
    )
  }
}

export default MyPokemonContextProvider
