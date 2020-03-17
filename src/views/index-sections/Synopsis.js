import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function Synopsis() {
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
              <h1 className="title" style={{color:'#fb590a'}}>Synopsis</h1>
              <h3 className="description" style={{color:'#f9a86c'}}>
                별나지만 멋진 이웃들이 함께 살아가는곳, <br></br>Avenue Q!
              </h3>
              <h5 className="description">
              뉴욕의 번화가와 고급스러운 유행의 중심지에서 가장 멀리 떨어져있는 거리, 애비뉴 큐(Avenue Q)에 큰 꿈과 얇은 지갑을 가지고 뉴욕에 온 순진한 대학 졸업생, 프린스턴이 이사를 왔군요! 
              그러나 쓸모 없는 영문학과 졸업장과 바닥난 통장잔고로 애비뉴 Q의 생활이 만만치 않네요!  
              <br></br>
              <br></br>
              이 동네에는 별난 이웃들이 살고 있거든요. 귀여운줄 알았더니 화나면 어마무시한 유치원 보조교사 케이트 몬스터. 
              실직중인 노잼 개그맨 브라이언과 그의 악혼녀이자 탈북자 심리상담사 크리스마스 이브. 게이임을 감추고 사는 평범한 직장인 로드와 그에게 빈대 붙어 사는 게으름뱅이 백수 니키. 
              한땐 잘나갔던 아역스타 개리 콜먼, 매일 마늘을 빻는(?) 트레키 몬스터, 남자와 섹스에만 관심 있는 금발의 글래머 클럽가수 루시까지. 
              프린스턴과 그의 새 이웃들은 일자리, 사랑, 그리고 인생의 목적을 찾으려 애쓰는데요..   
              <br></br>
              <br></br>
              못살지만 유쾌한 동네 애비뉴 큐에서 얽히고 설키며 살아가는 이웃들의 이야기 속으로 여러분을 초대합니다!
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Synopsis;
