/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Button } from "reactstrap";
// core components

import {isMobile} from 'react-device-detect';

const ticketStyle = {
  fontSize: '1.35em',
  color: '#e56608',
  backgroundColor: 'white'
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
    return (
      <>
        <div className="page-header clear-filter" filter-color="green" style={{height:'100vh'}}>
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/desktopbg_new.jpeg") + ")"
            }}
            ref={pageHeader}
          ></div>
          <Container>
            <div className="content-center brand">
              {isMobile ? "" : <h1 className="h1-seo">Welcome to Avenue Q!</h1>}
              <Button href="https://naver.com" target = "_blank" className="btn-round" color="white" type="button" style={ticketStyle}>
                Ticket
              </Button>
            </div>
          </Container>
        </div>
      </>
    );    
}

export default IndexHeader;
