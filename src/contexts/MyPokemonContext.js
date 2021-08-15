import React, { createContext, useState } from 'react'

export const MyPokemonContext = createContext()

const MyPokemonContextProvider = (props) => {
  const [state, setState] = useState({
    myPokemon: [
      { id: 1, name: "Bulbasaur", nickname: "a" },
      { id: 1, name: "Bulbasaur", nickname: "b" },
      { id: 2, name: "Ivysaur", nickname: "c" }
    ]
  })
  const addPokemon = (pokemon) => {
    setState({
      myPokemon: [...state.myPokemon, pokemon],
    })
  }
  const removePokemon = (nickname) => {
    setState({
      myPokemon: state.myPokemon.filter(pokemon => pokemon.nickname !== nickname)
    })
  }
  return (
    <MyPokemonContext.Provider value={{
      ...state,
      addPokemon: addPokemon,
      removePokemon: removePokemon
    }}>
      { props.children }
    </MyPokemonContext.Provider>
  )
}


export default MyPokemonContextProvider
