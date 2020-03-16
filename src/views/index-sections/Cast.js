import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import CastImg from "./CastImg"
// core components

const dividerStyle = {
    marginTop:"-6vh"
}
function Cast() {
  return (
    <>
      <div
        className="section"
        background-color="#d09c59"
        id="cast-section"
      >
        <Container>
            <Row className="justify-content-md-center">
                <Col className="text-center" lg="12" md="12">
                          <h1 className="title">Cast</h1>
                          <img width="300px" src={require('assets/img/divider.png')} style={dividerStyle}></img>
                </Col>
            </Row>
            <br></br>      
            <br></br>      
            <br></br>      
            <br></br>      
                  
            <Row className="justify-content-md-center">
                <Col className="text-center" lg="12" md="12">
                    <h1 className="title">Princeton</h1>
                </Col>
            </Row>
            <br></br>      
            <br></br>      
            <Row className="justify-content-md-center">
                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                    <CastImg src="양희승.jpg" />
                    <br></br>
                    <br></br>
                    <h3 claaName="description">양희승</h3>      
                </Col>
                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                    <CastImg src="황두현.jpg"/>
                    <br></br>
                    <br></br>
                    <h3>황두현</h3>      
                </Col>
            </Row>
                  
        </Container>
      </div>
    </>
  );
}

export default Cast;
