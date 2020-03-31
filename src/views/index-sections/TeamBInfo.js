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
                  <TeamInfoDetail castName="프린스턴" actorType="1" src={["양희승/프린스턴/Huiseung Yang"]} />
                  <TeamInfoDetail castName="케이트" castType="2" actorType="1" src={["민다희/케이트/Dahee Min", "홍세나/케이트/Serena Hong"]} />
                  <TeamInfoDetail castName="브라이언" actorType="1" src={["양정모/브라이언/Leo Yang"]} />
                  <TeamInfoDetail castName="이브" castType="2" actorType="1" src={["이유미/이 브/Yumi Lee", "임겨레/이 브/Kyeorei Lim"]} />
                  <TeamInfoDetail castName="니키 & 로드" actorType="1" src={["황지상/니 키/Jisang Hwang", "박상호/로 드/Sangho Park"]} />
                  <TeamInfoDetail castName="루시 & 개리 & 트래키" actorType="1" src={["안상현/루 시/Sanghyeon An", "김지언/개 리/Jieon Kim", "유병선/트래키/Byungsun Yu"]} />
                  <TeamInfoDetail castName="베드 베어즈" actorType="1" src={["윤한솔/베드 베어즈 남/Hansol Yun", "이한솜/베드 베어즈 여/Hansom Lee"]} />
                  <TeamInfoDetail actorType="1" src={["박국희/베드 베어즈 남/Kukhee Park", "이기림/베드 베어즈 여/Kirim Lee"]} />
                  <TeamInfoDetail castName="앙상블" actorType="2" src={["김재혁/앙상블/Jaehyeok Kim", "박은영/앙상블/Eunyoung Park", "김민성/앙상블/Minsung Kim", "조희령/앙상블/Heeryeong Jo"]} />
                </Container>
            </div>
        </>
    );
}

export default TeamB;

