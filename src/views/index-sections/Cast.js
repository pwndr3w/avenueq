import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import CastImg from "./CastImg"
// core components

const dividerStyle = {
    marginTop:"-6vh"
}
function CastImgLayout({ src }) {
    const korean = src.split("/")[0];
    const english = src.split("/")[1];

    return (
        <>
            <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                <CastImg src={korean} />
                <br></br>
                <br></br>
                <h3 className="description font-weight-bold">{korean}</h3>      
                <h6 className="description" style={{position:"relative", top:"-20px"}}>{english}</h6>      
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
                          <img src={require('assets/img/cast_title.png')} ></img>
                          {/* <img width="300px" src={require('assets/img/divider.png')} style={dividerStyle}></img> */}
                </Col>
            </Row>      
            <br></br>      
                  <br></br>      
                  {/* src안에 리스트에는 "이미지파일이름/영어이름"으로 입력 */}
                  <CastDetail castName="Princeton" src={["황두현/Doohyun, Hwang","양희승/Heeseung, Yang"]}/>
                  <CastDetail castName="Kate Monster" src={["이신정/Shinjung, Lee","민다희/Dahee, Min", "홍세나/Serena, Hong"]}/>
                  <CastDetail castName="Brian" src={["김연천","양정모"]}/>
                  <CastDetail castName="Christmas Eve" src={["김보연","이유미", "임겨레"]}/>
                  <CastDetail castName="Rod" src={["김준범","박상호"]}/>
                  <CastDetail castName="Nicky" src={["이원종","황지상"]}/>
                  <CastDetail castName="Gary Coleman" src={["김설이","김지언"]}/>
                  <CastDetail castName="Lucy" src={["안상현/SangHyeon, An"]}/>
                  <CastDetail castName="Trekkie Monster" src={["김무준","유병선"]}/>
                  <CastDetail castName="Bad Idea Bears & Ensemble" src={["김재혁","박은영","김민성","조희령","윤한솔","이한솜","박국희","이기림"]}/>
                                    
        </Container>
      </div>
    </>
  );
}

export default Cast;
