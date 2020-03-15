import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function CompleteExamples() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">Avenue Q</h2>
              <h5 className="description">
              AVENUE Q는 로버트 로페즈와 제프 막스가 제작한 인형극 뮤지컬으로 러뷰지컬에서 인형을 모조리 사람으로 바꿔 새로운 매력을 담은 작품이다.
              </h5>
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-5">
            <Col lg="4" md="4">
              <i className="fas fa-4x fa-theater-masks "></i>
              <h3 className="title">Black Comedy</h3>
              <h5 className="description mt-3">
              인형극이라는 특성상 세사미 스트리트처럼 밝고 즐거운 이야기일 것으로 생각하기 쉬우나, 본작은 오히려 그러한 인형극의 발랄하고 교육적인 이미지를 뒤집어 블랙 유머 구사에 써먹은 풍자극에 가깝다.
              넘버의 가사 곳곳에 비속어가 난무하고 내용 역시 청년기의 남녀관계, 직업과 금전 문제, 포르노, 인종차별 등 각종 성인향 소재에 대한 돌직구로 가득하다.
              </h5>
            </Col>
            <Col lg="4" md="4">
              <i className="fas fa-4x fa-trophy "></i>
              <h3 className="title">Awards</h3>
              <h5 className="description">
                2003년에 오프브로드웨이에서 초연한 후 바로 브로드웨이로 옮겨졌고, 2004년에는 그 《위키드》를 제치고 토니상 3개부문을 수상하였다. 
                이후 2009년까지 장기공연한 후 오프브로드웨이로 옮겨져 현재까지 공연되고 있다. 한국에서는 2013년 8월부터 동년 10월까지 샤롯데씨어터에서 내한공연을 치렀다.
                다만 원어 공연인데다, 작품의 타깃층인 2-30대가 높은 티켓 가격 때문에 관람에 적극적이지 못해 흥행 면에서는 부진했던 것으로 알려졌다.
              </h5>
            </Col>
            <Col lg="4" md="4">
              <i className="fas fa-4x fa-heartbeat "></i>
              <h3 className="title">Touching</h3>
              <h5 className="description">
                애비뉴 큐의 캐릭터들과 그들의 문제는 다른 누구도 아닌 바로 우리들의 이야기!<br></br>
                열심히 일하는데 통장 잔고 바닥인 당신, 말 못할 고민에 속앓이 하는 당신!<br></br>
                야동에 빠진 철없는 오빠나 남친이 있는 당신, 늙은 여우같은 직장상사를 둔 당신!<br></br>
                일에는 프로 연애에는 아마추어인 당신!
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CompleteExamples;
