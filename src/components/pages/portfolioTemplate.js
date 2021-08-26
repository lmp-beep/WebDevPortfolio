import React from "react";

import logo from "../images/LPlogo.png";
// import Banner from "../images/";
// import Monitor from "../images/";
// import Screenshot from "../images/";

import arrowLeft from "../images/chevron-left.svg";
import arrowRight from "../images/chevron-right.svg";
import grid from "../images/grid-3x3-gap-fill.svg";

import arrowLeft from "../images/chevron-left.png";
import arrowRight from "../images/chevron-right.png";
import grid from "../images/grid-3x3-gap-fill.png";

function PortfolioTemplate() {
  return (
    <div>
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>

        <Navbar>
          <Nav className="navbar">
            <Nav.Link
              className="navbar"
              id="portfolio"
              as={Link}
              to="/portfolio"
            >
              PORTFOLIO
            </Nav.Link>
            <Nav.Link className="navbar" id="about" as={Link} to="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link className="navbar" id="contact" as={Link} to="/contact">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar>
      </header>

      <Navbar className="portfolio-sidenav">
        <Nav>
          {/* <Nav.Link as={Link} to="/portfolioVA"> */}
          <img
            src={arrowRight}
            className="port-sidenav"
            id="right-arrow"
            alt=""
          />
          {/* </Nav.Link> */}

          {/* <Nav.Link as={Link} to="/portfolioVA"> */}
          <img
            src={arrowLeft}
            className="port-sidenav"
            id="left-arrow"
            alt=""
          />
          {/* </Nav.Link> */}

          <Nav.Link as={Link} to="/portfolio">
            <img src={grid} className="port-sidenav" id="grid" alt="" />
          </Nav.Link>
        </Nav>
      </Navbar>

      <div className="body-info">
        <div>{/* <img src={Banner} className="header-image" alt="" /> */}</div>

        <div className="visit-btns">
          <a
            // href=""
            target="blank"
          >
            <button className="visit-button" id="visit-website">
              VISIT WEBSITE
            </button>
          </a>
          <br></br>
          <br></br>
          <a
            // href=""
            target="blank"
          >
            <button className="visit-button" id="visit-github">
              VISIT GITHUB REPO
            </button>
          </a>
        </div>

        <br></br>

        <div className="description">
          <p>Description</p>

          <p className="description">Technologies Used:</p>
        </div>

        <br></br>
        <br></br>

        <div>
          {/* <img src={Monitor} className="image-monitor" alt="" /> */}
        </div>

        <br></br>
        <br></br>

        <div>
          {/* <img src={Screenshot} className="image-screenshot" alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default PortfolioTemplate;
