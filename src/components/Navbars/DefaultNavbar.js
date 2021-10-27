import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const DefaultNavbar = () => {
  console.log("Render DefaultNavbar")
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <LinkContainer to={"/phincon_pokedex"}>
          <Navbar.Brand>Phincon Pokedex</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" activeKey="/phincon_pokedex">
            <LinkContainer to={"/phincon_pokedex/pokemonlist"}>
              <Nav.Link eventKey="/phincon_pokedex/pokemonlist">Pokemon List</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/phincon_pokedex/mypokemonlist"}>
              <Nav.Link eventKey="/mypokemon">My Pokemon</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default DefaultNavbar