import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import CastImg from "./CastImg"
// core components

const dividerStyle = {
    marginTop:"-6vh"
}
function CastImgLayout({src}) {
    return (
        <>
            <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                <CastImg src={src} />
                <br></br>
                <br></br>
                <h3 className="description">{src}</h3>      
            </Col>            
        </>
    );
}

function CastDetail(props) {
    return (
        <>
            <Row className="justify-content-center">
                <Col className="text-center" lg="12" md="12">
                    <h1 className="title">{props.castName}</h1>
                </Col>
            </Row>
            <br></br>      
            <br></br>      
            <Row className="justify-content-center">
                {props.src.map(src => (
                    <CastImgLayout src={src}/>  
                ))}
            </Row>

        </>
    );  
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
                  <CastDetail castName="Princeton" src={["황두현","양희승"]}/>
                  <CastDetail castName="Kate" src={["이신정","민다희", "홍세나"]}/>
                  <CastDetail castName="Brian" src={["김연천","양정모"]}/>
                  <CastDetail castName="Christmas Eve" src={["김보연","이유미", "임겨레"]}/>
                  <CastDetail castName="Rod" src={["김준범","박상호"]}/>
                  <CastDetail castName="Nikky" src={["이원종","황지상"]}/>
                  <CastDetail castName="Gary" src={["김설이","김지언"]}/>
                  <CastDetail castName="Lucy" src={["안상현"]}/>
                  <CastDetail castName="Trekky" src={["김무준","유병선"]}/>
                                    
        </Container>
      </div>
    </>
  );
}

export default Cast;
