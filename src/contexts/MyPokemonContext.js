import React, { Component, createContext } from 'react'

export const MyPokemonContext = createContext()

class MyPokemonContextProvider extends Component {
    state = {
        myPokemon: ["Pikcahur", "Raichu"]
    }
    render() {
        return (
            <MyPokemonContext.Provider value={{...this.state}}>
                {this.props.children}
            </MyPokemonContext.Provider>
        )
    }
}

export default MyPokemonContextProvider
