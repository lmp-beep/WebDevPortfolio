import React from "react";

import logo from "../images/LPlogo.png";
import fitnessTrackerBanner from "../images/fitnessTrackerBanner.jpg";
import fitnessTrackerMonitor from "../images/fitnessTrackerMonitor.jpg";
import Screenshot1 from "../images/fitnessTrackerScreenshot1.jpg";
import Screenshot2 from "../images/fitnessTrackerScreenshot2.jpg";
import Screenshot3 from "../images/fitnessTrackerScreenshot3.jpg";

import arrowLeft from "../images/chevron-left.png";
import arrowRight from "../images/chevron-right.png";
import grid from "../images/grid-3x3-gap-fill.png";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function portfolioFitnessTracker() {
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
          <Nav.Link as={Link} to="/portfolioBookSearch">
            <img
              src={arrowRight}
              className="port-sidenav"
              id="right-arrow"
              alt=""
            />
          </Nav.Link>

          <Nav.Link as={Link} to="/portfolioMyPhotos">
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
          <img src={fitnessTrackerBanner} className="header-image" alt="" />
        </div>

        <div className="visit-btns">
          <a
            href="https://lmp-fitness-tracker.herokuapp.com/"
            target="blank"
          >
            <button className="visit-button" id="visit-website">
              VISIT WEBSITE
            </button>
          </a>
          <br></br>
          <br></br>
          <a
            href="https://github.com/lmp-beep/18-FitnessTracker"
            target="blank"
          >
            <button className="visit-button" id="visit-github">
              VISIT GITHUB REPO
            </button>
          </a>
        </div>

        <br></br>

        <div className="description">
          <p>This Fitness Tracker App uses Express, Mongoose and MongoDB Atlas to create and track daily workouts. The user can enter weight, sets, reps and duration for resistance exercises, and enter distance and duration for cardio exercises. The user can then access the combined weight of multiple exercises, and the total duration of each workout, for the past seven days in convenient charts on the Dashboard page.</p>

          <p className="description">Technologies Used: Express, MongoDB, Atlas, Mongoose, Node, HTML, CSS, JavaScript, Heroku </p>
        </div>

        <br></br>
        <br></br>

        <div>
          <img src={fitnessTrackerMonitor} className="image-monitor" alt="" />
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

export default portfolioFitnessTracker;
