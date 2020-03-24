import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const addCharStyle = {
  
 }

function AddMedia() {
    return (
        <>
            <div
                className="section"
                data-background-color="black"
                id="download-section"
            >
                <Container>
                    <Row className="justify-content-md-center">
                        <Col className="text-center" lg="12" md="12">
                            <img src={require('assets/img/info_title.png')} ></img>
                            <br></br>
                            <br></br>
                            <br></br>
                            <span style={addCharStyle}>
                                <img src={require('assets/img/video_brian.png')} ></img>
                            </span>
                            <div>
                                <iframe align ="left" width="50%" height="450" frameborder="0" src="https://www.youtube.com/embed/dSfX-MZjGdw?list=PLNU2fRUhH0U-y5CRSfis0ayPFxOLafwiO" frameborder="0"></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default AddMedia;