// JavaScript source code
import React from "react";

// reactstrap components
import { Container, Row, Col} from "reactstrap";

const textStyle = {
    textindent: "20 px"
}
function Notice() {
    return (
        <>
            <div
                className="section"
                data-background-color="black"
                id="download-section"
            >
              <Container>
                    
                    <Row className="justify-content-center">
                        <Col className="text-center" lg="12" md="12" sm="10" xs="10">
                            <img src={require('assets/img/info_title.png')} ></img>
                        </Col>
                    </Row>
                            <br></br>
                            <br></br>
                            <br></br>
                    <Row className="justify-content-center">
                        <Col className="text-center" lg="12" md="12" sm="12" xs="12">
                            <p><iframe width="100%" height="400vh" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOfeCXl2efDURMdSGWL0KeVA&key=AIzaSyBUxmgTnthFyGHPFv7pkD4wEw11F4kzdNo"></iframe></p>
                        </Col>
                    </Row>
                    
                    <Row className="justify-content-center">
                        <Col className="text-center" lg="12" md="12" sm="12" xs="12">
                            <h4 align="left" style={{lineHeight:'40px'}}>
                                극 장 : 예술나무씨어터<br></br>
                                주 최 : 러뷰지컬<br></br>
                                후 원 : (주)아라핀, (주)원데이원커뮤니케이션<br></br>
                                예매 가격 : 13,000원<br></br>
                                관람 연령 : 15세 이상<br></br>
                                공연 시간 : 150분(1막 80분 / 2막 + 커튼콜 60분 / 인터미션 10분 포함 / 6공)<br></br>
                                <br></br>
                                공연 일정<br></br>
                            </h4>
                            <h5 align="left" style={{lineHeight:'35px'}}>
                                &nbsp;&nbsp;1) 4/25(토) - (A팀)12:00-(B팀)15:30-(AC팀)19:00<br></br>
                                &nbsp;&nbsp;2) 4/26(일) - (B팀)11:30-(A팀)15:00-(BC팀)18:30<br></br>
                            </h5>
                            <h4 align="left">주의 사항</h4>
                            <h5 align="left" style={{lineHeight:'35px'}}>
                                &nbsp; 1) &nbsp; 예매시 지정한 좌석에 착석해 주세요<br></br>
                                &nbsp; 2) &nbsp; 공연 15분 전까지 입장가능(공연 시작 후 입장 불가 -> 인터미션 입장)<br></br>
                                &nbsp; 3) &nbsp; 음식물 반입금지<br></br>
                                &nbsp; 4) &nbsp; 코로나 예방을 위해 극장 자체 소독중
                            </h5>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default Notice;