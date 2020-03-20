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
                2020 러비스 프로젝트 애비뉴 큐! <br></br>
                인형극이라는 형식으로 브로드웨이에서 큰 반향을 일으키며 토니상 3관왕을 수상한 우수한 작품이다. 국내에서는 아직 한국어로 공연된 적이 없는 '애비뉴 큐!'
                2020년의 한국 버전으로 직접 번안, 각색한 러뷰지컬의 2020 러비스 프로젝트 《애비뉴 큐!》를 통해 취업도 연애도 어렵고, 정체성을 고민하며,
                삶의 목적을 찾아 방황하는2030들의 코끝 찡한 현실을 마주해보자!
              </h5>
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-5">
            <Col lg="6" md="6" sm="12" className="mb-5">
              <i className="fas fa-4x fa-theater-masks "></i>
              <h3 className="title">Black Comedy</h3>
              <h5 className="description mt-3">
                '누구나'가지고 있지만, '누구에게도' 들키고 싶지 않은 은밀한 고민과 인간 본성을 패기 있게 들춘다!
                청년실업, 정치, 연애에서 동성애 이슈까지 성역없이 시원하게 긁어내는 풍자의 품격!
                당황스러울 만큼 거침없고 직설적으로 날리는 통쾌한 대사!
                격식과 품위를 지키고 살아야 하는 현대인들의 뭉친 감정을 제대로 폭발시킨다!
              </h5>
            </Col>
            <Col lg="6" md="6" sm="12" className="mb-5">
              <i className="fas fa-4x fa-heartbeat "></i>
              <h3 className="title">It's YOUR story</h3>
              <h5 className="description">
                애비뉴 큐의 캐릭터들과 그들의 문제는 다른 누구도 아닌 바로 우리들의 이야기!
                열심히 일하는데 통장 잔고 바닥인 당신, 말 못할 고민에 속앓이 하는 당신!
                야동에 빠진 철없는 오빠나 남친이 있는 당신, 꼰대 직장상사를 둔 당신!
                일에는 프로 연애에는 아마추어인 당신!
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
