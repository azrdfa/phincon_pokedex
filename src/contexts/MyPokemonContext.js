import React, { Component, createContext } from 'react'

export const MyPokemonContext = createContext()

class MyPokemonContextProvider extends Component {
  state = {
    myPokemon: [
      { id: 1, name: "Bulbasaur" },
      { id: 1, name: "Bulbasaur" },
      { id: 2, name: "Ivysaur" }
    ]
  }
  render() {
    return (
      <MyPokemonContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </MyPokemonContext.Provider>
    )
  }
}

export default MyPokemonContextProvider
