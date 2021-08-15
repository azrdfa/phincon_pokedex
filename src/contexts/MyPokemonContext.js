import React, { createContext, useState, useEffect } from 'react'

export const MyPokemonContext = createContext()

const MyPokemonContextProvider = (props) => {
  const [myPokemon, setMyPokemon] = useState([
    { id: 1, name: "Bulbasaur", nickname: "a" },
    { id: 1, name: "Bulbasaur", nickname: "b" },
    { id: 2, name: "Ivysaur", nickname: "c" }
  ])
  const addPokemon = (pokemon) => {
    setMyPokemon([...myPokemon, pokemon])
  }
  const removePokemon = (nickname) => {
    setMyPokemon(
      myPokemon.filter(elem => elem.nickname !== nickname)
    )
  }
  return (
    <MyPokemonContext.Provider value={{
      myPokemon: myPokemon,
      addPokemon: addPokemon,
      removePokemon: removePokemon
    }}>
      {props.children}
    </MyPokemonContext.Provider>
  )
}


export default MyPokemonContextProvider
