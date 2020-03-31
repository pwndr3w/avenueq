import React from "react";
import { Container, Row, Col} from "reactstrap";
import { isMobile } from "react-device-detect";

function AddMedia() {
    return (
        <>
            <div
                style={{
                    backgroundColor: '#ffd800',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    textAlign:"center"
                }}
            >
                <Container>
                    <Row className="justify-content-center">
                        <Col className="mb-5 mt-5" lg="8" md="8" sm="11" xs="11">
                            <img className="mb-3" src={require('assets/img/info_title.png')} ></img>                
                        </Col>
                    </Row>
                    <Row className={isMobile?"justify-content-center":"justify-content-left"}>
                        <Col lg="6" md="6" sm="10" xs="10">
                            <img style={{width:isMobile?'70%':'50%', float:isMobile?'center':'right'}} src={require('assets/img/video_brian.png')} ></img>                
                        </Col>
                    </Row>
                    <Row className="justify-content-center" style={{height:"50vh"}}>
                        <Col className="text-center" lg="6" md="6" sm="10" xs="10">
                            <div>
                                <iframe align ="left" width="100%" height="100%" frameBorder="0" src="https://www.youtube.com/embed/dSfX-MZjGdw?list=PLNU2fRUhH0U-y5CRSfis0ayPFxOLafwiO" frameborder="0"></iframe>
                            </div>
                        </Col>
                        <Col style={{position:"relative"}} lg="6" md="6" sm="8" xs="8">
                            {isMobile ?
                                <img style={{width:'100%'}} src={require('assets/img/video_title.png')} ></img>
                                :
                                <>
                                <img style={{position:'absolute', height:'100%', left:'10%'}} src={require('assets/img/video_direction.png')} ></img>
                                <img style={{ position: 'absolute', height: '45%', left: "20%", top: "25%" }} src={require('assets/img/video_title.png')} ></img>
                                </>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default AddMedia;