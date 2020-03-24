import React from "react";
import {Container, Row, Col, Button } from "reactstrap";

function CreativeTeam() {
    return (
        <>
        <div className="section section-team text-center">
                <Container>
                    <img src={require('assets/img/creative_title.png')} ></img>
                    <br></br>
                    <br></br>
                    <br></br>
            <div className="team">
              <Row className="justify-content-center">
                <Col md="4" lg="4" sm="4" xs="6">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/곽하늬.jpg")}
                    ></img>
                    <h4 className="title">곽하늬</h4>
                    <p className="category text-info">연출</p>
                  </div>
                </Col>
                <Col md="4" lg="4" sm="4" xs="6">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/선세리.jpg")}
                    ></img>
                    <h4 className="title">선세리</h4>
                    <p className="category text-info">연출</p>
                  </div>
                </Col>
              </Row>
            </div>
        
        </Container>
        </div>
        </>
    );
}

export default CreativeTeam;