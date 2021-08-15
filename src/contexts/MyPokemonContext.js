import React, { createContext, useState, useEffect } from 'react'

export const MyPokemonContext = createContext()

const MyPokemonContextProvider = (props) => {
  const [myPokemon, setMyPokemon] = useState(() => {
    const localMyPokemon = localStorage.getItem("myPokemon")
    return localMyPokemon ? JSON.parse(localMyPokemon) : []
  })
  useEffect(() => {
    localStorage.setItem("myPokemon", JSON.stringify(myPokemon))
  }, [myPokemon])
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
