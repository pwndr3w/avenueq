import React from "react";
import CastImg from "./CastImg";
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
import LandingPageHeader from "components/Headers/TeamBInfoHeader.js";

function CastImgLayout({ src }) {
    const korean = src.split("/")[0];
    const charname = src.split("/")[1];

    return (
        <>
            <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                <CastImg src={korean} />
                <br></br>
                <br></br>
                <h3 className="description font-weight-bold">{charname}</h3>
                <p className="category text-info" style={{ position: "relative", top: "-20px" }}>{korean}</p>
            </Col>
        </>
    );
}

function EnsenbleImgLayout({ src }) {
    const korean = src.split("/")[0];
    const charname = src.split("/")[1];

    return (
        <>
            <Col className="text-center">
                <CastImg src={korean} />
                <br></br>
                <br></br>
                <h3 className="description font-weight-bold">{charname}</h3>
                <p className="category text-info" style={{ position: "relative", top: "-20px" }}>{korean}</p>
            </Col>
        </>
    );
}

function CoupleImgLayout({ src }) {
    const korean = src.split("/")[0];
    const charname = src.split("/")[1];

    return (
        <>
            <Col className="text-center">
                <CastImg src={korean} />
                <br></br>
                <br></br>
                <h3 className="description font-weight-bold">{charname}</h3>
                <p className="category text-info" style={{ position: "relative", top: "-20px" }}>{korean}</p>
            </Col>
        </>
    );
}
function CastDetail(props) {
    if (props.actorType == '1') {  // 배역
        return (
            <>
                <Row className="justify-content-center">
                    <Col className="text-center" lg="12" md="12">
                        <h2 className="title">{props.castName}</h2>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <Row className="justify-content-center">
                    {props.src.map(src => (
                        <CastImgLayout src={src} />
                    ))}
                </Row>
            </>
        );
    }
    else if (props.actorType == '2') { //베베
        return (
            <>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <h2 className="title">{props.castName}</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    {props.src.map(src => (
                        <EnsenbleImgLayout src={src} />
                    ))}
                </Row>
            </>
        );
    }
    else if (props.actorType == '3') { //커플
        return (
            <>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <h2 className="title">{props.castName}</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    {props.src.map(src => (
                        <CoupleImgLayout src={src} />
                    ))}
                </Row>
            </>
        );
    }
}

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
                <LandingPageHeader />
                <Row className="justify-content-md-center">
                    <Col className="text-center" lg="6" md="6">
                        <h1 className="title">Team B</h1>
                    </Col>
                </Row>
                <div className="section section-team text-center">
                    <Container>
                        <div className="team">
                            <CastDetail castName="프린스턴 & 케이트" actorType="1" src={["민다희/케이트", "양희승/프린스턴", "홍세나/케이트"]} />
                            <CastDetail actorType="3" src={["프케a/임시라 나중에 이름 및 사진 변경", "프케ac/임시라 나중에 이름 및 사진 변경"]} />

                            <CastDetail castName="이브 & 브라이언" actorType="1" src={["이유미/이 브", "양정모/브라이언", "임겨레/이 브"]} />
                            <CastDetail actorType="3" src={["프케a/임시라 나중에 이름 및 사진 변경", "프케ac/임시라 나중에 이름 및 사진 변경"]} />

                            <CastDetail castName="니키 & 로드" actorType="1" src={["황지상/니 키", "박상호/로 드"]} />
                            <CastDetail actorType="3" src={["프케a/임시라 나중에 이름 및 사진 변경", "프케ac/임시라 나중에 이름 및 사진 변경"]} />

                            <CastDetail castName="루시 & 개리 & 트래키" actorType="1" src={["안상현/루 시", "김지언/개 리", "유병선/트래키"]} />
                            <CastDetail actorType="3" src={["프케a/임시라 나중에 이름 및 사진 변경", "프케ac/임시라 나중에 이름 및 사진 변경", "프케ac/임시라 나중에 이름 및 사진 변경"]} />

                            <CastDetail castName="베드 베어즈" actorType="1" src={["윤한솔/베드 베어즈 남", "이한솜/베드 베어즈 여"]} />
                            <CastDetail castName="베드 베어즈" actorType="1" src={["박국희/베드 베어즈 남", "이기림/베드 베어즈 여"]} />
                            <CastDetail actorType="3" src={["프케a/임시라 나중에 이름 및 사진 변경", "프케ac/임시라 나중에 이름 및 사진 변경"]} />

                            <CastDetail castName="앙상블" actorType="2" src={["김재혁/앙상블", "박은영/앙상블", "김민성/앙상블", "조희령/앙상블"]} />
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default TeamB;

