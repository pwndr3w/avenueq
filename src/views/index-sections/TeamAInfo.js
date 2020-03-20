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
import LandingPageHeader from "components/Headers/TeamAInfoHeader.js";

function TeamAInfo() {
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
                        <h1 className="title">Team A</h1>
                    </Col>
                </Row>
                 <div className="section section-team text-center">
                    <Container>                        
                        <h2 className="title">프린스턴 & 케이트</h2>
                        <div className="team">
                            <Row className="justify-content-center">
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="이신정" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">케이트 A</h3>
                                        <p className="category text-info">이신정</p>
                                    </Col>
                                </Col>            
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="황두현" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">프린스턴</h3>
                                        <p className="category text-info">황두현</p>
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
                                    <CastImg src="이신정" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">프린스턴 & 케이트 A</h3>                                       
                                    </Col>
                                </Col> 
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="홍세나" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">프린스턴 & 케이트 B C</h3>
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
                                    <CastImg src="김보연" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">이 브 A</h3>
                                        <p className="category text-info">김보연</p>
                                    </Col>
                                </Col>
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="김연천" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">브라이언</h3>
                                        <p className="category text-info">김연천</p>
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
                                    <CastImg src="김보연" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">이 브A & 브라이언</h3>
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
                                    <CastImg src="이원종" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">니 키</h3>
                                        <p className="category text-info">이원종</p>
                                    </Col>
                                </Col>

                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="김준범" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">로 드</h3>
                                        <p className="category text-info">김준범</p>
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                    <Container>
                        <div className="team">
                            <Row className="justify-content-center">
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="이원종" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">니 키 & 로 드</h3>
                                    </Col>
                                </Col>
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="김준범" />
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
                                    <CastImg src="김설이" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">개 리</h3>
                                        <p className="category text-info">김설이</p>
                                    </Col>
                                </Col>
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="김무준" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">트래키</h3>
                                        <p className="category text-info">김무준</p>
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
                                    <CastImg src="김설이" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">개 리</h3>
                                    </Col>
                                </Col>
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="김무준" />
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
                                    <CastImg src="김재혁" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">베드 베어즈 남A</h3>
                                        <p className="category text-info">김재혁</p>
                                    </Col>
                                </Col>

                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="박은영" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">베드 베어즈 여A</h3>
                                        <p className="category text-info">박은영</p>
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                    <Container>
                        <div className="team">
                            <Row className="justify-content-center">
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="김민성" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">베드 베어즈 남AC</h3>
                                        <p className="category text-info">김민성</p>
                                    </Col>
                                </Col>

                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="조희령" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">베드 베어즈 여AC</h3>
                                        <p className="category text-info">조희령</p>
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                    <Container>
                        <div className="team">
                            <Row className="justify-content-center">
                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="윤한솔" />
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">베베 커플사진</h3>
                                    </Col>
                                </Col>

                                <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                                    <CastImg src="김민성" />
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
                                        src={require("assets/img/이한솜.jpg")}
                                    ></img>
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">앙상블</h3>
                                        <p className="category text-info">이한솜</p>
                                    </Col>
                                </Col>

                                <Col className="text-center">
                                    <img
                                        alt="..."
                                        className="rounded img-raised"
                                        src={require("assets/img/박국희.jpg")}
                                    ></img>
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">앙상블</h3>
                                        <p className="category text-info">박국희</p>
                                    </Col>
                                </Col>

                                <Col className="text-center">
                                    <img
                                        alt="..."
                                        className="rounded img-raised"
                                        src={require("assets/img/이기림.jpg")}
                                    ></img>
                                    <br></br>
                                    <br></br>
                                    <Col className="text-center" lg="12" md="12">
                                        <h3 className="title">앙상블</h3>
                                        <p className="category text-info">이기림</p>
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

export default TeamAInfo;

