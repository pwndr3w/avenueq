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
          Hansom Lee.<br></br>
          Developed by{" "}Andrew Kim, Kukhee Park, Mago Stark.
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
