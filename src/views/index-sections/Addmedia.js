import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

function AddMedia() {
    return (
        <>
            <div
                className="section section-download"
                data-background-color="black"
                id="download-section"
                style={{
                    backgroundColor: 'yellow',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                }}
            >
                <Container>
                    <Row className="justify-content-md-center">
                        <Col className="text-center" lg="12" md="12">
                            <img src={require('assets/img/info_title.png')} ></img>
                            <br></br>
                            <br></br>
                            <br></br>
                            <span>
                                <img style={{
                                    margin: '5px',
                                }} src={require('assets/img/video_brian.png')} ></img>
                            </span>
                            <div>
                                <iframe align ="left" width="100%" height="720" frameborder="0" src="https://www.youtube.com/embed/dSfX-MZjGdw?list=PLNU2fRUhH0U-y5CRSfis0ayPFxOLafwiO" frameborder="0"></iframe>
                                <img style={{
                                    margin: '50px',
                                }} src={require('assets/img/video_title.png')} ></img>
                                </div>                           
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default AddMedia;