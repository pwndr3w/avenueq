import React from "react";

// reactstrap components
import { Container, Row, Col} from "reactstrap";
import { isMobile } from "react-device-detect";

// core components

function LovusicalSummary() {
  return (
    <>
      <div
        className=""
        data-background-color="black"
      >
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center" lg="12" md="12" style={{color:'white', fontSize:"1vw"}}>
            <h5 className="mt-2 mb-2" style={{fontSize:isMobile?"3.2em":""}}>
                러뷰지컬/러비스 프로젝트는 아마추어 뮤지컬극단 러뷰지컬에서 {isMobile?<br></br>:""}시작된 나눔이 있는 뮤지컬 프로젝트입니다.<br></br>                                
                후원금을 통해 공연을 만들고 수익금을 어려운 이웃에게 기부하는 {isMobile?<br></br>:""}저희의 특별한 무대에 초대합니다.
            </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default LovusicalSummary;
