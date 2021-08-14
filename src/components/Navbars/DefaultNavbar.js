import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const DefaultNavbar = () => {
  console.log("Render DefaultNavbar")
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Tokopedia Pokedex</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" activeKey="/">
            <LinkContainer to={"/"}>
              <Nav.Link eventKey="/">Pokemon List</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/mypokemon"}>
              <Nav.Link eventKey="/mypokemon">My Pokemon</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default DefaultNavbar