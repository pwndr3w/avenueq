import React from "react";
import {Container, Row, Col, Button } from "reactstrap";

function CreativeTeam() {
    return (
        <>
        <div className="section section-team text-center">
          <Container>
            <Row className="justify-content-center">
              <Col lg="7" md="7" sm="10" xs="10">
                    <img src={require('assets/img/creative_title.png')} ></img>              
              </Col>
            </Row>
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
                    <h6 className="description">Hani Gwak</h6>
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
                    <h6 className="description">Seri Sun</h6>
                    <p className="category text-info">연출</p>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md="11" lg="11" sm="11" xs="11">
                  <h3 className="title">
                    도움주시는 분들<br></br>
                  </h3>
                  <h4 className="description">
                    양유성 신경수 강수지 전선빈 최웅선 류국현<br></br>
                    김경미 김지유 성중범 손정필 송수현 오정우<br></br> 
                    이상아 장동주 차윤주 최지선 편유리
                  </h4>
                </Col>
              </Row>
            </div>
        
        </Container>
        </div>
        </>
    );
}

export default CreativeTeam;