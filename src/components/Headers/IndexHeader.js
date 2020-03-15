/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

import {isMobile} from 'react-device-detect';

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
              backgroundImage: "url(" + require("assets/img/set2.jpg") + ")"
            }}
            ref={pageHeader}
          ></div>
          <Container>
            <div className="content-center brand">
              {/* <img
                alt="..."
                className="n-logo"
                src={require("assets/img/now-logo.png")}
              ></img> */}
              <h1 className="h1-seo">Welcome to Avenue Q!</h1>
              <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3>
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
              backgroundImage: "url(" + require("assets/img/set.png") + ")"
            }}
            ref={pageHeader}
          ></div>
          <Container>
            <div className="content-center brand">
              {/* <img
                alt="..."
                className="n-logo"
                src={require("assets/img/now-logo.png")}
              ></img> */}
              <h1 className="h1-seo">Welcome to Avenue Q!</h1>
              <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3>
            </div>
          </Container>
        </div>
      </>
    );    
  }
}

export default IndexHeader;
