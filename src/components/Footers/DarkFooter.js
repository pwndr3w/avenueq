/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black" style={{borderTopStyle:'dotted'}}>
      <Container>
        <nav>
          <ul>
            <li>
            </li>
            <li>
            </li>
            <li>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="#"
          >
            Hanson Lee
          </a>
          .<br></br> Coded by{" "}
          <a
            href="#"
          >
            Andrew Kim, Kukhee Park, Mago Stark
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
