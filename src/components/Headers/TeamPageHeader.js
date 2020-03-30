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

// core components
function TeamPageHeader(props) {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });
    return (
        <>
            <div className="page-header page-header-small">
                <div
                    className="page-header-image" width = "33%"
                    style={{
                        backgroundImage: "url(" + require('assets/img/' + props.src + ".jpg") + ")"
                    }}
                    ref={pageHeader}
                ></div>
            </div>
        </>
    );
}
export default TeamPageHeader;