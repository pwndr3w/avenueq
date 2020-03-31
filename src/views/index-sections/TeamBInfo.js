import React from "react";
// reactstrap components
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";          // 맨 윗줄 메뉴바
import TeamPageHeader from "components/Headers/TeamPageHeader.js";
import TeamInfoDetail from "components/Headers/TeamInfoDetail.js";

function TeamB() {
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
                <TeamPageHeader src={["B팀"]} />
                <Container>
                    <Row className="mt-5 my-5">
                      <Col className="text-center" lg="12" md="12">
                          <img src={require('assets/img/teamb_title.png')} ></img>
                      </Col>
                  </Row>    
                  <TeamInfoDetail castName="프린스턴" actorType="1" src={["양희승/Huiseung Yang"]} />
                  <TeamInfoDetail castName="케이트" castType="2" actorType="1" src={["민다희/Dahee Min", "홍세나/Serena Hong"]} />
                  <TeamInfoDetail castName="브라이언" actorType="1" src={["양정모/Leo Yang"]} />
                  <TeamInfoDetail castName="이브" castType="2" actorType="1" src={["이유미/Yumi Lee", "임겨레/Kyeorei Lim"]} />
                  <TeamInfoDetail castName="니키 & 로드" actorType="1" src={["황지상/Jisang Hwang", "박상호/Sangho Park"]} />
                  <TeamInfoDetail castName="루시 & 개리 & 트래키" actorType="1" src={["안상현/Sanghyeon An", "김지언/Jieon Kim", "유병선/Byungsun Yu"]} />
                  <TeamInfoDetail castName="베드 베어즈" actorType="1" src={["윤한솔/Hansol Yun", "이한솜/Hansom Lee"]} />
                  <TeamInfoDetail actorType="1" src={["박국희/Kukhee Park", "이기림/Kirim Lee"]} />
                  <TeamInfoDetail castName="앙상블" actorType="2" src={["김재혁/Jaehyeok Kim", "박은영/Eunyoung Park", "김민성/Minsung Kim", "조희령/Heeryeong Jo"]} />
                </Container>
            </div>
        </>
    );
}

export default TeamB;

