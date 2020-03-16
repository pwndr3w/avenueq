import React from "react";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";


import CastImg from "./CastImg";

function CastDetail(props) {
    return (
        <>
            <Row className="justify-content-md-center">
                <Col className="text-center" lg="12" md="12">
                    <h1 className="title">{props.castName}Princeton</h1>
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
        </>
    );
}

export default CastImg;