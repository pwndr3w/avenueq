import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function About() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">Avenue Q</h2>
              <h5 className="description">
              AVENUE Q는 로버트 로페즈와 제프 막스가 제작한 인형극 뮤지컬이지만 러뷰지컬에서 인형을 모조리 사람으로 바꿔 새로운 매력을 담은 작품이다!!
              </h5>
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-5">
            <Col lg="4" md="4" sm="12" className="mb-5">
              <i className="fas fa-4x fa-theater-masks "></i>
              <h3 className="title">Black Comedy</h3>
              <h5 className="description mt-3">
                '누구나'가지고 있지만, '누구에게도' 들키고 싶지 않은 은밀한 고민과 인간 본성을 패기 있게 들춘다!<br></br>
                청년실업, 직장문제, 정치, 연애에서 동성애 문제까지 성역없이 시원하게 긁어내는 풍자의 품격<br></br>
                당황스러울 만큼 거침없고 직설적으로 날리는 통쾌한 대사!<br></br>
                격식과 품위를 지키고 살아야 하는 현대인들의 뭉친 감정을 제대로 폭발시킨다!
              </h5>
            </Col>
            <Col lg="4" md="4" sm="12" className="mb-5">
              <i className="fas fa-4x fa-trophy "></i>
              <h3 className="title">Awards</h3>
              <h5 className="description">
                2003년에 오프브로드웨이에서 초연한 후 바로 브로드웨이로 옮겨졌고, 2004년에는 그 《위키드》를 제치고 토니상 3개부문을 수상!<br></br> 
                이후 2009년까지 장기공연한 후 오프브로드웨이로 옮겨져 현재까지 공연되고 있다. 한국에서는 2013년 8월부터 동년 10월까지 샤롯데씨어터에서 내한공연을 치렀다.
              </h5>
            </Col>
            <Col lg="4" md="4" sm="12" className="mb-5">
              <i className="fas fa-4x fa-heartbeat "></i>
              <h3 className="title">Touching</h3>
              <h5 className="description">
                애비뉴 큐의 캐릭터들과 그들의 문제는 다른 누구도 아닌 바로 우리들의 이야기!<br></br>
                열심히 일하는데 통장 잔고 바닥인 당신, 말 못할 고민에 속앓이 하는 당신!<br></br>
                야동에 빠진 철없는 오빠나 남친이 있는 당신, 늙은 여우같은 직장상사를 둔 당신!<br></br>
                일에는 프로 연애에는 아마추어인 당신!<br></br>
                《애비뉴 큐》가 고단한 일상에 돌직구를 날리며 커다란 위로와 힐링을 선물한다!
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About;
