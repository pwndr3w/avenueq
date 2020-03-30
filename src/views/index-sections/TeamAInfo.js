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
                <Row className="section section-download">
                    <Col className="text-center" lg="12" md="12">
                        <img src={require('assets/img/teama_title.png')} ></img>
                    </Col>
                </Row>    
                 <div className="section section-team text-center">
                    <Container>
                        <div className="team">
                            <TeamInfoDetail castName="프린스턴 & 케이트" actorType="1" src={["이신정/케이트/Sinjeong Lee", "황두현/프린스턴/Duhyun Hwang", "홍세나/케이트/Serena Hong"]} />                            
                            <TeamInfoDetail castName="이브 & 브라이언" actorType="1" src={["김보연/이 브/Boyeon Kim", "김연천/브라이언/Yeoncheon Kim", "임겨레/이 브/Kyeorei Lim"]} /> 
                            <TeamInfoDetail castName="니키 & 로드" actorType="1" src={["이원종/니 키/Wonjong Lee", "김준범/로 드/Junbeom Kim"]} />  
                            <TeamInfoDetail castName="루시 & 개리 & 트래키" actorType="1" src={["안상현/루 시/Sanghyeon An", "김설이/개 리", "김무준/트래키/Mujun Kim"]} />  
                            <TeamInfoDetail castName="베드 베어즈" actorType="1" src={["김재혁/베드 베어즈 남/Jaehyeok Kim", "박은영/베드 베어즈 여/Eunyoung Park"]} />    
                            <TeamInfoDetail castName="베드 베어즈" actorType="1" src={["김민성/베드 베어즈 남/Minsung Kim", "조희령/베드 베어즈 여"]} />
                            <TeamInfoDetail castName="앙상블" actorType="2" src={["윤한솔/앙상블/Hansol Yun", "이한솜/앙상블/Hansom Lee", "박국희/앙상블/Kukhee Park", "이기림/앙상블/KiRim Lee"]} />    
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default TeamAInfo;

