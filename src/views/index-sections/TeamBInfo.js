import React from "react";
import Cast from "./Cast";
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

function TeamB() {

    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);

    React.useEffect(() => {
        document.body.classList.add("landing-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
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
                        <h2 className="title">프린스턴 & 케이트</h2>
                        <div className="team">
                            <Row className="justify-content-center">
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="민다희" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">케이트 B</h3>
                                        <p className="category text-info">민다희</p>
                                    </Col>
                                </Col>
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="양희승" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">프린스턴</h3>
                                        <p className="category text-info">양희승</p>
                                    </Col>
                                </Col>
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="홍세나" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">케이트 C</h3>
                                        <p className="category text-info">홍세나</p>
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                    <Container>
                        <div className="team">
                            <Row className="justify-content-center">
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="민다희" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">프린스턴 & 케이트 B</h3>
                                    </Col>
                                </Col>
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="홍세나" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">프린스턴 & 케이트 C</h3>
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                    <Container>
                        <h2 className="title">이브 & 브라이언</h2>
                        <div className="team">
                            <Row className="justify-content-center">
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="이유미" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">이 브 A</h3>
                                        <p className="category text-info">이유미</p>
                                    </Col>
                                </Col>
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="양정모" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">브라이언</h3>
                                        <p className="category text-info">양정모</p>
                                    </Col>
                                </Col>
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="임겨레" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">이 브 C</h3>
                                        <p className="category text-info">임겨레</p>
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                    <Container>
                        <div className="team">
                            <Row className="justify-content-center">
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="이유미" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">이 브B & 브라이언</h3>
                                    </Col>
                                </Col>
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="임겨레" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">이 브C & 브라이언</h3>
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                    <Container>
                        <h2 className="title">니키 & 로드</h2>
                        <div className="team">
                            <Row className="justify-content-center">
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="황지상" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">니 키</h3>
                                        <p className="category text-info">황지상</p>
                                    </Col>
                                </Col>

                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="박상호" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">로 드</h3>
                                        <p className="category text-info">박상호</p>
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                    <Container>
                        <div className="team">
                            <Row className="justify-content-center">
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="황지상" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">니 키 & 로 드</h3>
                                    </Col>
                                </Col>
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="박상호" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">니 키 & 로 드</h3>
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                    <Container>
                        <h2 className="title">루시 & 개리 & 트래키</h2>
                        <div className="team">
                            <Row className="justify-content-center">
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="안상현" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">루 시</h3>
                                        <p className="category text-info">안상현</p>
                                    </Col>
                                </Col>
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="김지언" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">개 리</h3>
                                        <p className="category text-info">김지언</p>
                                    </Col>
                                </Col>
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="유병선" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">트래키</h3>
                                        <p className="category text-info">유병선</p>
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                    <Container>
                        <Row className="justify-content-center">
                            <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                <CastImg src="안상현" />
                                <br></br>
                                <br></br>
                                <Col className="text-center" lg="12" md="12">
                                    <h3 className="title">루 시</h3>
                                </Col>
                            </Col>
                            <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                <CastImg src="김지언" />
                                <br></br>
                                <br></br>
                                <Col className="text-center" lg="12" md="12">
                                    <h3 className="title">개 리</h3>
                                </Col>
                            </Col>
                            <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                <CastImg src="유병선" />
                                <br></br>
                                <br></br>
                                <Col className="text-center" lg="12" md="12">
                                    <h3 className="title">트래키</h3>
                                </Col>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <h2 className="title">베드 베어즈</h2>
                        <div className="team">
                            <Row className="justify-content-center">
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="윤한솔" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">베드 베어즈 남B</h3>
                                        <p className="category text-info">윤한솔</p>
                                    </Col>
                                </Col>

                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="이한솜" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">베드 베어즈 여B</h3>
                                        <p className="category text-info">이한솜</p>
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                    <Container>
                        <div className="team">
                            <Row className="justify-content-center">
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="박국희" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">베드 베어즈 남BC</h3>
                                        <p className="category text-info">박국희</p>
                                    </Col>
                                </Col>

                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="이기림" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">베드 베어즈 여BC</h3>
                                        <p className="category text-info">이기림</p>
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                    <Container>
                        <div className="team">
                            <Row className="justify-content-center">
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="김재혁" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">베베 커플사진</h3>
                                    </Col>
                                </Col>

                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="박국희" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">베베 커플사진</h3>
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                    <Container>
                        <h2 className="title">앙상블</h2>
                        <div className="team">
                            <Row className="justify-content-center">
                                <Col className="text-center">
                                    <img
                                        alt="..."
                                        className="rounded img-raised"
                                        src={require("assets/img/윤한솔.jpg")}
                                    ></img>
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">앙상블</h3>
                                        <p className="category text-info">윤한솔</p>
                                    </Col>
                                </Col>

                                <Col className="text-center">
                                    <img
                                        alt="..."
                                        className="rounded img-raised"
                                        src={require("assets/img/김재혁.jpg")}
                                    ></img>
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">앙상블</h3>
                                        <p className="category text-info">박은영</p>
                                    </Col>
                                </Col>

                                <Col className="text-center">
                                    <img
                                        alt="..."
                                        className="rounded img-raised"
                                        src={require("assets/img/김민성.jpg")}
                                    ></img>
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">앙상블</h3>
                                        <p className="category text-info">김민성</p>
                                    </Col>
                                </Col>

                                <Col className="text-center">
                                    <img
                                        alt="..."
                                        className="rounded img-raised"
                                        src={require("assets/img/조희령.jpg")}
                                    ></img>
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">앙상블</h3>
                                        <p className="category text-info">조희령</p>
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default TeamB;

