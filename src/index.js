/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "./views/Index.js";
import TeamAInfo from "./views/index-sections/TeamAInfo.js"
import TeamBInfo from "./views/index-sections/TeamBInfo.js"
import AvenueQGallery from "./views/index-sections/AvenueQGallery.js"

ReactDOM.render(
  <HashRouter>
    <Route path="/" exact={true} component={Index}/>
    <Route path="/teamA" exact={true} component={TeamAInfo}/>
    <Route path="/teamB" exact={true} component={TeamBInfo}/>
    <Route path="/gallery" exact={true} component={AvenueQGallery}/>
  </HashRouter>,
  document.getElementById("root")
);
