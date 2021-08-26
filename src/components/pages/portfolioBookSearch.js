import React from "react";

import logo from "../images/LPlogo.png";
import bookSearchBanner from "../images/bookSearchBanner.jpg";
import bookSearchMonitor from "../images/bookSearchMonitor.jpg";
import Screenshot1 from "../images/bookSearchScreenshot1.jpg";
import Screenshot2 from "../images/bookSearchScreenshot2.jpg";
import Screenshot3 from "../images/bookSearchScreenshot3.jpg";

import arrowLeft from "../images/chevron-left.png";
import arrowRight from "../images/chevron-right.png";
import grid from "../images/grid-3x3-gap-fill.png";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function portfolioBookSearch() {
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
          <Nav.Link as={Link} to="/portfolioNewsFlash">
            <img
              src={arrowRight}
              className="port-sidenav"
              id="right-arrow"
              alt=""
            />
          </Nav.Link>

          <Nav.Link as={Link} to="/portfolioFitnessTracker">
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
          <img src={bookSearchBanner} className="header-image" alt="" />
        </div>

        <div className="visit-btns">
          <a
            href="https://lmp-book-search.herokuapp.com/"
            target="blank"
          >
            <button className="visit-button" id="visit-website">
              VISIT WEBSITE
            </button>
          </a>
          <br></br>
          <br></br>
          <a
            href="https://github.com/lmp-beep/Books"
            target="blank"
          >
            <button className="visit-button" id="visit-github">
              VISIT GITHUB REPO
            </button>
          </a>
        </div>

        <br></br>

        <div className="description">
          <p>The code for this Google Books API search engine was refactored from a RESTful API to a GraphQL API with Apollo Server. The purpose of the refactor is to optimize the data fetch to query only the specific information needed. A user can create an account, search for books, and save them to a list. The user can then see their saved books and also remove books from their list.</p>

          <p className="description">Technologies Used: MERN Stack (MongoDB, Express, React, Node), Mongoose, Apollo Server, JavaScript, HTML, CSS, Heroku, Bcrypt, JSON Web Token, Bootstrap, GraphQL</p>
        </div>

        <br></br>
        <br></br>

        <div>
          <img src={bookSearchMonitor} className="image-monitor" alt="" />
        </div>

        <br></br>
        <br></br>

        <div>
          <img src={Screenshot1} className="image-screenshot" alt="" />
          <br></br>
          <br></br>
          <img src={Screenshot2} className="image-screenshot" alt="" />
          <br></br>
          <br></br>
          <img src={Screenshot3} className="image-screenshot" alt="" />
          <br></br>
          <br></br>
        </div>

      </div>
    </div>
  );
}

export default portfolioBookSearch;
