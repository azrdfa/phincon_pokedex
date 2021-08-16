import { MyPokemonContext } from '../../contexts/MyPokemonContext'
import { useContext } from 'react'
import {
  Card, Button, Image,
  Row, Col
} from 'react-bootstrap'
import "./MyPokemonListPage.css"
import { BsFillTrashFill } from 'react-icons/bs'
import { restyleName } from "../../restyles"

const MyPokemonListPage = () => {
  const { myPokemon, removePokemon } = useContext(MyPokemonContext)
  console.log("Render MyPokemonListPage")
  return (
    <>
      <div className="mplp-flex-container">
        {
          myPokemon.map(elem => {
            return <div key={elem.nickname} className="mplp-flex-item">
              <Card className="mplp-card">
                <Card.Body style={{ display: "flex", justifyContent: "flex-start" }}>
                  <Image style={{marginRight: "1rem"}} src={elem.sprite} className="mplp-image" />
                  <div>
                    <span style={{marginRight: "0.5rem"}}>{restyleName(elem.nickname)}</span><br/>
                    <span className="mplp-subtitle">{restyleName(elem.name)}</span>
                  </div>
                </Card.Body>
                <Card.Footer className="d-grid gap-2">
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => { removePokemon(elem.nickname) }}
                  >
                    <div className="mplp-button-content">
                      Release
                      <BsFillTrashFill size={15} />
                    </div>
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          })
        }
      </div>
    </>
  )
}

export default MyPokemonListPage
