// JavaScript source code
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function Notice() {
    return (
        <>
            <div
                className="section"
                data-background-color="black"
                id="download-section"
            >
                <Container>
                    <Row className="justify-content-md-center">
                        <Col className="text-center" lg="12" md="12">
                            <h1 className="title">Musical Information</h1>
                            <h4 align="left">극 장&nbsp; :&nbsp; 구로 예술나무씨어터</h4>
                            <h4 align="left">주 최&nbsp; :&nbsp; 러뷰지컬</h4>
                            <h4 align="left">후 원&nbsp; :&nbsp; (주)아라핀, (주)원데이원커뮤니케이션 </h4>
                            <h4 align="left">예매 가격&nbsp; :&nbsp; 10,000원</h4>
                            <h4 align="left">관람 연령&nbsp; :&nbsp; 12세 이상</h4>
                            <h4 align="left">공연 시간&nbsp; :&nbsp; 160분(1막 80분 / 2막 70분 / 인터미션 10분 포함 / 6공)</h4>
                            <h4 align="left">주의 사항</h4>
                            <h5 align="left">&nbsp; 1. &nbsp; 예매시 지정한 좌석에 착석해 주세요 </h5>
                            <h5 align="left">&nbsp; 2. &nbsp; 공연 15분 전까지 입장가능(공연 시작 후 입장 불가 -> 인터미션 입장)</h5>
                            <h5 align="left">&nbsp; 3. &nbsp; 음식물 반입금지. </h5>
                            <h5 align="left">&nbsp; 4. &nbsp; 코로나 예방을 위해 극장 자체 소독중.</h5>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default Notice;