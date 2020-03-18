import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";
import { createTemplateMiddle } from "typescript";
import { isMobile } from "react-device-detect";


function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const menuTextStyle = {
    'display': 'inline-block'
  }
  const menuIconStyle = {
    'vertical-align': 'middle'
  }
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + (!collapseOpen&&(document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400) ? navbarColor : "")} expand="lg" color="primary">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/"
              id="navbar-brand"
            >
              <img className="mr-2" src={require("assets/img/logowhite.png")} width="50px"></img>
              {/*isMobile ? "" : "Avenue Q"*/}
              <h6 style={{display:'inline-block'}}>2020 애비뉴큐</h6>

            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                  }}
                >
                  <h6 style={menuTextStyle}>About</h6>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="fas fa-2x fa-user-friends design_app mr-1" style={menuIconStyle}></i>
                  <h6 style={menuTextStyle}>Teams</h6>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/teamA" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    Team A
                  </DropdownItem>
                  <DropdownItem
                    to="/teamB" tag={Link}
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Team B
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <i className="fas fa-2x fa-question design_app mr-1" style={menuIconStyle}></i>
                  <h6 style={menuTextStyle}>Lovusical</h6>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <i className="fas fa-2x fa-ticket-alt design_app mr-1" style={menuIconStyle}></i>
                  <h6 style={menuTextStyle}>Tickets</h6>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
