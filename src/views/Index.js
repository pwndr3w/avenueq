import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DropdownNavbar from "components/Navbars/DropdownNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Images from "./index-sections/Images.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import SignUp from "./index-sections/SignUp.js";
import Examples from "./index-sections/Examples.js";
import Cast from "./index-sections/Cast.js";
import CastingCalendar from "./index-sections/CastingCalendar.js";
import Notice from "./index-sections/Notice.js"; 
import CreativeTeam from "./index-sections/CreativeTeam.js";
import About from "./index-sections/About.js";
import Synopsis from "./index-sections/Synopsis.js";
import Lovusical from "./index-sections/Lovusical.js";
import AddMedia from "./index-sections/Addmedia.js";
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
          <About style={{ fontFamily: 'Noto Sans KR, sans-family' }}/>
          <AddMedia />
          <Synopsis />
          <Cast />
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
