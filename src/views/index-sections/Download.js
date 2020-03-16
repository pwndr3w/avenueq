import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function Download() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="12" md="12">
              <h3 className="title">Synopsis</h3>
              <h5 className="description">
              별나지만 멋진 이웃들이 함께 살아가는곳, Avenue Q!
              <br></br>
              <br></br>

              뉴욕의 번화가와 고급스러운 유행의 중심지에서 가장 멀리 떨어져있는 애비뉴 Q! 지금 막~ 대학을 졸업해 눈이 반짝이는 청년 프린스턴이 이곳으로 이사를 왔군요! 
              그러나 쓸모 없는 영문학과 졸업장과 바닥난 통장잔고로 애비뉴 Q의 생활이 만만치 않네요!
              <br></br>
              <br></br>

              그곳에는 별나고 멋진 이웃들이 살고 있군요. 소울메이트를 찾는 만년 싱글인 유치원 보조교사 케이트, 남자와 섹스에만 관심 있는 금발의 글래머 클럽가수 루시, 
              게이임을 감추고 사는 평범한 직장인 로드, 그에게 빈대 붙어 사는 룸메이트 니키, 코미디언 지망생 브라이언과 약혼녀 크리스마스 이브, 야동에 빠진 트레키 몬스터까지! 
              <br></br>
              <br></br>
              그들이 펼치는 그 유쾌한 이야기 속으로 안내합니다!
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Download;
