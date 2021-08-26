import React from "react";

import logo from "../images/LPlogo.png";
import vaBanner from "../images/vaBanner.jpg";
import vaMonitor from "../images/vaMonitor.jpg";
import vaClinicsScreenshot from "../images/vaClinicsScreenshot.jpg";
import vaFormsScreenshot from "../images/vaFormsScreenshot.jpg";
import vaHomeScreenshot from "../images/vaHomeScreenshot.jpg";
import vaMapScreenshot from "../images/vaMapScreenshot.jpg";
import vaPhotographyScreenshot from "../images/vaPhotographyScreenshot.jpg";

import arrowLeft from "../images/chevron-left.png";
import arrowRight from "../images/chevron-right.png";
import grid from "../images/grid-3x3-gap-fill.png";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function PortfolioVA() {
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
          <Nav.Link as={Link} to="/portfolioMyPhotos">
            <img
              src={arrowRight}
              className="port-sidenav"
              id="right-arrow"
              alt=""
            />
          </Nav.Link>

          <Nav.Link as={Link} to="/portfolioNewsFlash">
            <img
              src={arrowLeft}
              className="port-sidenav"
              id="left-arrow"
              alt=""
            />
          </Nav.Link>

          <Nav.Link as={Link} to="/portfolio">
            <img src={grid} className="port-sidenav" id="grid" alt="" />
          </Nav.Link>
        </Nav>
      </Navbar>

      <div className="body-info">
        <div>
          <img src={vaBanner} className="header-image" alt="" />
        </div>

        <br></br>

        <div className="description">
          <p>
            I created the Medical Media Sharepoint as a place where any Atlanta
            VA Healthcare System employee can go to get information about the
            department. As it is accessible only by current Atlanta VA staff, I
            am not able to share the live link.
          </p>

          <p className="description">
            Atlanta VA employees can visit the Medical Media Sharepoint site to
            get information about the different services provided, including
            Audiovisual, Graphic Design, Medical Illustration, and Photography,
            as well as watch training videos, download patient release forms,
            download photos of all the clinic locations, and find contact
            information for Medical Media.
          </p>
        </div>

        <br></br>
        <br></br>

        <div>
          <img src={vaMonitor} className="image-monitor" alt="" />
        </div>

        <br></br>
        <br></br>

        <div>
          <img src={vaHomeScreenshot} className="image-screenshot" alt="" />
        </div>

        <br></br>
        <br></br>

        <div>
          <img
            src={vaPhotographyScreenshot}
            className="image-screenshot"
            alt=""
          />
        </div>

        <br></br>
        <br></br>

        <div>
          <img src={vaFormsScreenshot} className="image-screenshot" alt="" />
        </div>

        <br></br>
        <br></br>

        <div>
          <img src={vaClinicsScreenshot} className="image-screenshot" alt="" />
        </div>

        <br></br>
        <br></br>

        <div>
          <img src={vaMapScreenshot} className="image-screenshot" alt="" />
        </div>
      </div>
    </div>
  );
}

export default PortfolioVA;
