import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import logo from "../images/LPlogo.png";
import github from "../images/github-logo1.png";
import linkedin from "../images/linkedin-logo1.png";
import camera from "../images/photo-camera1.png";

import newsFlashThumb from "../images/newsFlash.jpg";
import vaBackThumb from "../images/vaBack.jpg";
import myPhotos from "../images/myPhotos.jpg";
import fitnessTracker from "../images/fitnessTracker.jpg";
import bookSearch from "../images/bookSearch.jpg";

import placeholderThumb from "../images/placeholder.jpg";

function Portfolio() {
  return (
    <div className="App">
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

      <div className="grid">
        <div className="row">
          <figure className="effect-bubba">
            <img src={newsFlashThumb} className="thumbnail" alt="" />
            <a href="#portfolioNewsFlash">
              <figcaption>
                <h2>NEWS FLASH</h2>
              </figcaption>
            </a>
          </figure>

          <figure className="effect-bubba">
            <img src={vaBackThumb} className="thumbnail" alt="" />
            <a href="#portfolioVA">
              <figcaption>
                <h2>
                  MEDICAL MEDIA
                  <br />
                  SHAREPOINT
                </h2>
              </figcaption>
            </a>
          </figure>

          <figure className="effect-bubba">
            <img src={myPhotos} className="thumbnail" alt="" />
            <a href="#portfolioMyPhotos">
              <figcaption>
                <h2>
                  LISA PESSIN
                  <br />
                  PHOTOGRAPHY
                </h2>
              </figcaption>
            </a>
          </figure>

          <figure className="effect-bubba">
            <img src={fitnessTracker} className="thumbnail" alt="" />
            <a href="#portfolioFitnessTracker">
              <figcaption>
                <h2>
                  Fitness
                  <br />
                  Tracker
                </h2>
              </figcaption>
            </a>
          </figure>

          <figure className="effect-bubba">
            <img src={bookSearch} className="thumbnail" alt="" />
            <a href="#portfolioBookSearch">
              <figcaption>
                <h2>
                  Book
                  <br />
                  Search
                </h2>
              </figcaption>
            </a>
          </figure>



        </div>
      </div>

      <div className="sidenav">
        <a href="https://github.com/lmp-beep" target="blank">
          <img id="github" src={github} alt=""></img>
        </a>
        <a href="https://www.linkedin.com/in/lisa-pessin/" target="blank">
          <img id="linkedin" src={linkedin} alt=""></img>
        </a>
        <a
          href="https://lmp-beep.github.io/PhotographyPortfolio/"
          target="blank"
        >
          <img id="photo" src={camera} alt=""></img>
        </a>
      </div>

      {/* <footer>
      <div>
        <p className="footer-text" id="copyright">
          COPYRIGHT © LISA PESSIN 2021
        </p>
      </div>
    </footer> */}

    </div>
  );
}

export default Portfolio;
