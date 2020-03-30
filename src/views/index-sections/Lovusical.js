import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function Lovusical() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center" lg="12" md="12">
              <h1 className="title">We Are Lovusical!</h1>
              <h5 className="description">
              열정으로 공연을 준비하고 공연 후원금으로 기부하는 직장인 뮤지컬 동아리 러뷰지컬은 산업계의 여러종사자들의 재능기부를 통해 뮤지컬을 만들고 즐기며,  
                후원금을 통해 어려운 이웃들에게 나눔을 행하는 동호회입니다.  레미제라블 / 맘마미아 / 올슉업 / 빨래 등의 유명뮤지컬을 성공적인 무대를 만들었으며, 
                연기.연출.안무등의 재능있는 멤버들로 구성되어 있습니다.                
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Lovusical;
