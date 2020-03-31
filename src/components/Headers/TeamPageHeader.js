import React from "react";
import { isMobile } from 'react-device-detect';

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
    let _minHeight;
    if (isMobile) {
        _minHeight = "34vh";
    }
    else {
        _minHeight = "60vh";
    }
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
            {isMobile ?
                <>
                    < div className="page-header page-header-small"
                        style={{
                            minHeight: _minHeight
                        }}>
                        <div
                            className="page-header-image"
                            style={{
                                backgroundImage: "url(" + require('assets/img/' + props.src + ".jpg") + ")",
                                backgroundSize: "100%",
                                backgroundRepeat: "no-repeat",
                                backgroundColor: "black",
                            }}
                            ref={pageHeader}
                        ></div>
                    </div>
                </>
                :
                <>
                    <div className="page-header page-header-small">
                        <div
                            className="page-header-image" width="33%" lg="12" md="12"
                            style={{
                                backgroundImage: "url(" + require('assets/img/' + props.src + ".jpg") + ")"
                            }}
                            ref={pageHeader}
                        ></div>
                    </div>
                </>
            }    
        </>
    );
}
export default TeamPageHeader;