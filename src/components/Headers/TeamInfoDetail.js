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
    CarouselIndicators,
} from "reactstrap";
import CastImg from "views/index-sections/CastImg.js";

function CastImgLayout({ src }) {
    const korean = src.split("/")[0];
    const charname = src.split("/")[1];
    const englishName = src.split("/")[2];
    return (
        <>
            <Col className="text-center" lg="4" md="6" sm="6" xs="6">
                <CastImg src={korean} />
                <br></br>
                <br></br>
                <h3 className="description font-weight-bold">{charname}</h3>
                <p className="description" style={{ position: "relative", top: "-20px" }}>{englishName}</p>
            </Col>
        </>
    );
}

function EnsenbleImgLayout({ src }) {
    const korean = src.split("/")[0];
    const charname = src.split("/")[1];
    const englishName = src.split("/")[2];
    return (
        <>
            <Col className="text-center" lg="3" md="3" sm="3" xs="3">
                <CastImg src={korean} />
                <br></br>
                <br></br>
                <h3 className="description font-weight-bold">{charname}</h3>
                <p className="description" style={{ position: "relative", top: "-20px" }}>{englishName}</p>
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
                <p className="description" style={{ position: "relative", top: "-20px" }}>{korean}</p>
            </Col>
        </>
    );
}


function CastDetail(props) {
    let castType = props.castType;
    let showText;

    if (castType == 2) {
        showText = <div>{props.castName}<br/>(더블 캐스팅)</div>
    }
    else {
        showText = <div>{props.castName}</div>
    }

    if (props.actorType == '1') {  // 배역
        return (
            <>
                <Row className="justify-content-center">
                    <Col className="text-center" lg="12" md="12">
                        <h2 className="title"> {showText} </h2>
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
    else if (props.actorType == '2') { //앙상블
        return (
            <>
                <Row className="justify-content-center">
                    <Col className="text-center" lg="12" md="12">
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
export default CastDetail;