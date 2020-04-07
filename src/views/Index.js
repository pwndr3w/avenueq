import React from "react";
import { CookiesProvider } from 'react-cookie';
// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Carousel from "./index-sections/Carousel.js";
import CastingCalendar from "./index-sections/CastingCalendar.js";
import Notice from "./index-sections/Notice.js"; 
import CreativeTeam from "./index-sections/CreativeTeam.js";
import About from "./index-sections/About.js";
import Synopsis from "./index-sections/Synopsis.js";
import Lovusical from "./index-sections/Lovusical.js";
import AddMedia from "./index-sections/Addmedia.js";
import LovusicalSummary from "./index-sections/LovusicalSummary.js";
import SetCookie from "./index-sections/SetCookie.js";
function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    }; 
  });
  return (
      <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
      <div className="main">
       <CookiesProvider>
         <SetCookie name="test" />
       </CookiesProvider>
          <LovusicalSummary />
          <About style={{ fontFamily: 'Noto Sans KR, sans-family' }}/>
          <AddMedia />
          <Synopsis />
          <Carousel />
          {/* <Cast /> */}
          <CastingCalendar />
          <Notice/>
          <CreativeTeam />
          <Lovusical />
        </div>
        <DarkFooter />
       </div>
    </>
  );
}

export default Index;
