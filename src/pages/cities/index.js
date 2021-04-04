import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export default class Home extends Component {
  render() {
    return(
      <Container>
        <Card border="primary">
          <Card.Body>
            <Row className="justify-content-md-center">
              <Col xs="12" sm="12" md="3" lg="3" xl="3">
                <Card.Title>Pune</Card.Title>
              </Col>
              <Col xs="12" sm="12" md="3" lg="3" xl="3">
                <Card.Text>AQI</Card.Text>
              </Col>
              <Col xs="12" sm="12" md="3" lg="3" xl="3">
                Sparkline Chart Here
              </Col>
              <Col xs="12" sm="12" md="3" lg="3" xl="3">
                Last Updated On: 12th Jan
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card border="primary">
          <Card.Body>
            <Row className="justify-content-md-center">
              <Col xs="12" sm="12" md="3" lg="3" xl="3">
                <Card.Title>Pune</Card.Title>
              </Col>
              <Col xs="12" sm="12" md="3" lg="3" xl="3">
                <Card.Text>AQI</Card.Text>
              </Col>
              <Col xs="12" sm="12" md="3" lg="3" xl="3">
                Sparkline Chart Here
              </Col>
              <Col xs="12" sm="12" md="3" lg="3" xl="3">
                Last Updated On: 12th Jan
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}
