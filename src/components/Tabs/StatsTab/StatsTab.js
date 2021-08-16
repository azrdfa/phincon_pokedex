import { Row, Col, ProgressBar } from 'react-bootstrap'
import { restyleLabel } from '../../../restyles'
import "./StatsTab.css"

const StatsTab = ({ stats }) => {
  console.log("Render StatsTab")
  return (
    <div className="container">
      {
        stats.map(elem => {
          return <Row key={elem.stat.name} className="item">
            <Col className="label">{restyleLabel(elem.stat.name)}</Col>
            <Col xs={2}>{elem.base_stat}</Col>
            <Col xs={6}><ProgressBar now={elem.base_stat} max={200} /></Col>
          </Row>
        })
      }
    </div>
  )
}

export default StatsTab
