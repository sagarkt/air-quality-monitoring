import { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {aqiStandards} from '../../../constants';
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';

export default class City extends Component {

  formatAQI(aqi) {
    let aqiStandard = aqiStandards.find(function(aqiStandard) {
      return aqiStandard.min <= aqi && aqiStandard.max > aqi;
    });
    let roundedAQI = Math.round((aqi + Number.EPSILON) * 100) / 100;
    return <span style={{color: aqiStandard.colorCode}}>{roundedAQI}</span>;
  }

  render() {
    return(
      <Container>
        <Card border="primary">
          <Card.Body>
            <Row className="justify-content-md-center">
              <Col xs="6" sm="6" md="2" lg="2" xl="2">
                <Card.Title>{this.props.city.city}</Card.Title>
              </Col>
              <Col xs="6" sm="6" md="2" lg="2" xl="2">
                <Card.Text>AQI: {this.formatAQI(this.props.city.aqi)}</Card.Text>
              </Col>
              <Col xs="12" sm="12" md="4" lg="4" xl="4">
                <Sparklines data={this.props.city.old} limit="30" height="50">
                  <SparklinesLine color="#1c8cdc" />
                  <SparklinesSpots />
                  <SparklinesReferenceLine type="max" />
                </Sparklines>

              </Col>
              <Col xs="12" sm="12" md="4" lg="4" xl="4">
                <Card.Text>
                  Updated {this.props.city.lastUpdatedDate}
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}
