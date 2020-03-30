// JavaScript source code
import React from "react";

// reactstrap components

import {
    Button,
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselIndicators
} from "reactstrap";
import CastImg from "views/index-sections/CastImg.js";

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

    if (props.actorType == '1') {  // 硅开
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
    else if (props.actorType == '2') { //海海
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
    else if (props.actorType == '3') { //目敲
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
export default CastDetail;