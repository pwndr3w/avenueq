import React from "react";
import { Container, Row, Col} from "reactstrap";
import { isMobile } from "react-device-detect";
import YouTube from "react-youtube";

function AddMedia() {
    const opts = {
        width: '100%',
        height: '390',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };
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
                    <Row className={isMobile?"justify-content-center":"justify-content-left"}>
                        <Col className="mt-5" lg="6" md="6" sm="10" xs="10">
                            <img style={{width:isMobile?'70%':'50%', float:isMobile?'center':'right'}} src={require('assets/img/video_brian.png')} ></img>                
                        </Col>
                    </Row>
                    <Row className="justify-content-center" style={{height:isMobile?"":""}}>
                        <Col className={isMobile?"text-center mb-4":"text-center mb-5"} lg="6" md="6" sm="12" xs="12">
                            <div>
                                <iframe align="left" width="100%" height={isMobile?"200px":"390px"} frameBorder="0" src="https://www.youtube.com/embed/dSfX-MZjGdw?list=PLNU2fRUhH0U-y5CRSfis0ayPFxOLafwiO" frameborder="0"></iframe>
                            </div>
                        </Col>
                        <Col className="mb-5" style={{position:"relative"}} lg="6" md="6" sm="7" xs="7">
                            {isMobile ?
                                <img style={{width:'100%'}} src={require('assets/img/video_title.png')} ></img>
                                :
                                <>
                                <img style={{position:'absolute', height:'390px', left:'10%'}} src={require('assets/img/video_direction.png')} ></img>
                                <img style={{ position: 'absolute', height: '150px', left: "20%", top: "100px" }} src={require('assets/img/video_title.png')} ></img>
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