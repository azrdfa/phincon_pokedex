import { MyPokemonContext } from '../contexts/MyPokemonContext'
import { useContext } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const MyPokemonListPage = () => {
  const {myPokemon, removePokemon} = useContext(MyPokemonContext)
  console.log("Render MyPokemonListPage")
  return (
    <>
      {
        myPokemon.map(elem => {
          return <Card key={elem.nickname} style={{margin: "1rem"}}>
            <Card.Body style={{display: "flex", justifyContent: "space-between"}}>
              <div>
                <Card.Title>Nickname: {elem.nickname}</Card.Title>
                <Card.Subtitle>Pokemon: {elem.name}</Card.Subtitle>
              </div>
              <Button
                variant="secondary"
                onClick={() => {removePokemon(elem.nickname)}}
              >Release</Button>
            </Card.Body>
          </Card>
        })
      }
    </>
  )
}

export default MyPokemonListPage
