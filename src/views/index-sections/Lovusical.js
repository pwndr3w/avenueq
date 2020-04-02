import React from "react";

// reactstrap components
import { Container, Row, Col} from "reactstrap";
import { isMobile } from "react-device-detect";

// core components

function Lovusical() {
  return (
    <>
      <div
        className=""
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center mt-5" lg="12" md="12">
              <h1 className="title">We Are Lovusical!</h1>
              <h5 className="description">
                열정으로 공연을 준비하고 공연 후원금으로 기부하는 직장인 뮤지컬 동아리 러뷰지컬은{isMobile ? "" : <br></br>}
                산업계의 여러종사자들의 재능기부를 통해 뮤지컬을 만들고 즐기며,{isMobile ? "" : <br></br>} 
              후원금을 통해 어려운 이웃들에게 나눔을 행하는 동호회입니다. <br></br>
                레미제라블 / 맘마미아 / 올슉업 / 빨래 등의 유명뮤지컬을 성공적인 무대를 만들었으며, {isMobile ? "" : <br></br>}
              연기.연출.안무등의 재능있는 멤버들로 구성되어 있습니다.            
              </h5>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="text-left" lg="12" md="12">
              <h3 className="title">활동 내역</h3>
              <h4 className="font-weight-bold">
                2014년 정기공연 프로젝트<br></br>
              </h4>
              <h5 className="description">
                3월 - 뮤지컬 '지킬 앤 하이드'<br></br>
                <br></br>
              </h5>
              <h4 className="font-weight-bold">
                2015년 주요 활동<br></br>
              </h4>
              <h5 className="description">
                9월 - 한글 박물관 갈라 콘서트 '군.만.두'<br></br>
                10월 - 서울 문화재단 '좋아서-예술동아리' 예술축제 창작극 '봄의 이야기'(최우수 공연상 수상)<br></br>
                <br></br>
              </h5>
              <h4 className="font-weight-bold">
                2016년 정기공연 프로젝트<br></br>
              </h4>
              <h5 className="description">
                6월 - 뮤지컬'올슉업'<br></br>
                9월 - 마스터 클래스<br></br>
                <br></br>
              </h5>
              <h4 className="font-weight-bold">
                2017년 정기공연 프로젝트<br></br>
              </h4>
              <h5 className="description">
                7월 - 정기공연 프로젝트 - 뮤지컬 ‘빨래’ (후원금 기부 : 아동보육시설 새감마을)<br></br>
                11월 - 마스터클래스<br></br>
                <br></br>
              </h5>
              <h4 className="font-weight-bold">
                2018년 정기공연 프로젝트<br></br>
              </h4>
              <h5 className="description">
                8월 - 뮤지컬 ‘맘마미아’ (후원금 기부 : 미혼모시설 새싹들의집)<br></br>
                10월 -울문화재단 동아리 네트워크 gathering 프로그램 ‘레미제라블 갈라콘서트’<br></br>
                11월 - 마스터클래스<br></br>
                <br></br>
              </h5>
              <h4 className="font-weight-bold">
                2019년 정기공연 프로젝트<br></br>
              </h4>
              <h5 className="description">
                3월 - 뮤지컬 ‘레미제라블’ (후원금 기부 : 노숙자시설 로렌조의 집)<br></br>
                5월 - 마스터클래스<br></br>
                10월, 창작 옴니버스극 ‘뮤지컬 읽어주는 사자‘<br></br>
                10월, DDP 생활예술인페어 오프닝 초대공연<br></br>
                11월, 제 2회 AMA(아마추어 뮤지컬 어워드) 미디어상 수상<br></br>
                12월, 성남시 청소년재단 제 5회 청년 뮤지컬 포럼 “새로운 봄, 그래서 청년이다!”초대공연<br></br><br></br>
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Lovusical;
