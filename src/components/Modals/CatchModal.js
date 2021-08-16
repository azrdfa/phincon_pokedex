import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { MyPokemonContext } from '../../contexts/MyPokemonContext'
import { useContext, useState } from 'react'

const CatchModal = ({ showModal, catchStatus, closeModal, pokemon }) => {
  console.log("Render CatchModal")
  const { myPokemon, addPokemon } = useContext(MyPokemonContext)
  const [state, setState] = useState({
    nickname: "",
    nicknameStatus: "empty"
  })
  const checkNickname = (event) => {
    const currNickname = event.target.value
    let currNicknameStatus = ""
    if (currNickname.length === 0) {
      currNicknameStatus = "empty"
    } else if (currNickname.length > 0) {
      const isNewNickname = myPokemon.filter(elem => elem.nickname === currNickname).length === 0
      if (isNewNickname) {
        currNicknameStatus = "available"
      } else {
        currNicknameStatus = "not_available"
      }
    }
    setState({
      nickname: currNickname,
      nicknameStatus: currNicknameStatus
    })
  }

  const handleSave = () => {
    addPokemon({
      id: pokemon.id,
      name: pokemon.name,
      nickname: state.nickname,
      sprite: pokemon.sprites.front_default
    })
    closeModal()
    setState({
      nickname: "",
      nicknameStatus: "empty"
    })
  }

  const handleRelease = () => {
    closeModal()
    setState({
      nickname: "",
      nicknameStatus: "empty"
    })
  }

  const successContent = <>
    <Modal.Body>
      <p>Catch success, please give your new pokemon a nickname</p>
      <Form>
        <Form.Group>
          <Form.Label>Nickname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter nickname"
            value={state.nickname}
            onChange={checkNickname}
          />
          {state.nicknameStatus === "empty" ? <Form.Text>Nickname needed</Form.Text> : null}
          {state.nicknameStatus === "not_available" ? <Form.Text>Nickname not available</Form.Text> : null}
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button
        variant="secondary"
        onClick={handleRelease}
      >Release</Button>
      <Button
        variant="primary"
        onClick={handleSave}
        disabled={state.nicknameStatus !== "available"}
      >Save</Button>
    </Modal.Footer>
  </>

  const failedContent = <Modal.Body>
    <p>Catch failed, please try again.</p>
  </Modal.Body>

  return (
    <Modal show={showModal} onHide={handleRelease}>
      <Modal.Header closeButton>
        <Modal.Title>Catch Status</Modal.Title>
      </Modal.Header>
      {catchStatus ? successContent : failedContent}
    </Modal>
  )
}

export default CatchModal
