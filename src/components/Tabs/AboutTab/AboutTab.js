import { Row, Col } from 'react-bootstrap'
import { restyleHeight, restyleWeight, restyleAbilities } from '../../../restyles'
import "./AboutTab.css"

const AboutTab = ({ height, weight, abilities }) => {
  console.log("Render AboutTab")
  return (
    <div className="container">
      <Row className="item">
        <Col className="label">Height</Col>
        <Col xs={8}>{restyleHeight(height)}</Col>
      </Row>
      <Row className="item">
        <Col className="label">Weight</Col>
        <Col xs={8}>{restyleWeight(weight)}</Col>
      </Row>
      <Row className="item">
        <Col className="label">Abilities</Col>
        <Col xs={8}>{restyleAbilities(abilities)}</Col>
      </Row>
    </div>
  )
}

export default AboutTab