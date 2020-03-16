/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Button } from "reactstrap";
// core components

import {isMobile} from 'react-device-detect';

const ticketStyle = {
  border: '2px solid',
  fontSize: '1.35em'
}

function IndexHeader() {
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
  if (isMobile) {
    return (
      <>
        <div className="page-header clear-filter" filter-color="green">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/mobilebg.jpeg") + ")"
            }}
            ref={pageHeader}
          ></div>
          <Container>
            <div className="content-bottom brand">
              <Button href="https://naver.com" className="btn-round" color="white" outline type="button" style={ticketStyle}>
                Ticket Here!!
              </Button>
            </div>
          </Container>
        </div>
      </>
    );    
  } else {
    return (
      <>
        <div className="page-header clear-filter" filter-color="green">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/desktopbg.jpeg") + ")"
            }}
            ref={pageHeader}
          ></div>
          <Container>
            <div className="content-center brand">
              <h1 className="h1-seo">Welcome to Avenue Q!</h1>
              <Button href="https://naver.com" className="btn-round" color="white" outline type="button" style={ticketStyle}>
                Ticket Here!!
              </Button>
            </div>
          </Container>
        </div>
      </>
    );    
  }
}

export default IndexHeader;
