import React, { Component } from "react";
// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";          // 맨 윗줄 메뉴바
import TeamPageHeader from "components/Headers/TeamPageHeader.js";
import TeamInfoDetail from "components/Headers/TeamInfoDetail.js";
function TeamAInfo() {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    React.useEffect(() => {
        document.body.classList.add("landing-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0)
        return function cleanup() {
            document.body.classList.remove("landing-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });
    return (
        <>
          <IndexNavbar />
            <div className="wrapper">
                <TeamPageHeader src={["A팀"]}/>
                <Container>
                    <Row className="mt-5 my-5">
                        <Col className="text-center" lg="12" md="12">
                            <img src={require('assets/img/teama_title.png')} ></img>
                        </Col>
                    </Row>
                    <TeamInfoDetail castName="프린스턴" actorType="1" src={["황두현/Duhyun Hwang"]} />
                    <TeamInfoDetail castName="케이트" castType ="2" actorType="1" src={["이신정/Sinjeong Lee", "홍세나/Serena Hong"]} />
                    <TeamInfoDetail castName="브라이언" actorType="1" src={["김연천/Yeoncheon Kim"]} />
                    <TeamInfoDetail castName="이브" castType="2" actorType="1" src={["김보연/Boyeon Kim", "임겨레/Kyeorei Lim"]} />
                    <TeamInfoDetail castName="니키 & 로드" actorType="1" src={["이원종/Wonjong Lee", "김준범/Junbeom Kim"]} />
                    <TeamInfoDetail castName="루시 & 개리 & 트래키" actorType="1" src={["안상현/Sanghyeon An", "김설이/Seolyi Kim", "김무준/Mujun Kim"]} />
                    <TeamInfoDetail castName="베드 베어즈" actorType="1" src={["김재혁/Jaehyeok Kim", "박은영/Eunyoung Park"]} />
                    <TeamInfoDetail actorType="1" src={["김민성/Minsung Kim", "조희령/Heeryeong Jo"]} />
                    <TeamInfoDetail castName="앙상블" actorType="2" src={["윤한솔/Hansol Yun", "이한솜/Hansom Lee", "박국희/Kukhee Park", "이기림/Kirim Lee"]} />
                </Container>
            </div>
        </>
    );
}

export default TeamAInfo;
