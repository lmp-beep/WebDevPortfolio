import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import logo from "../images/LPlogo.png";
import frame from "../images/frame.png";
import github from "../images/github-logo1.png";
import linkedin from "../images/linkedin-logo1.png";
import camera from "../images/photo-camera1.png";

function About() {
  return (
    <div className="">
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
      <div className="about">
        <div className="about-me col-sm" id="bio">
          <p className="bio">
            My name is Lisa Pessin and I am a web developer based in Atlanta,
            GA. Starting off as a photographer many years ago, the digital world
            won me over early on. I have a BFA and MA in Photography from
            Savannah College of Art and Design, and I have been working as a
            Medical and Forensic Photographer for the past 12 years.
          </p>
          <p className="bio">
            I received my certificate in full-stack web development from the{" "}
            <a target="blank" id="bootcamp" href="https://bootcamp.pe.gatech.edu/coding/">
              Georgia Tech Coding Bootcamp
            </a>{" "}
            in July 2021. I am new to the web world, but I love creating
            user-friendly digital designs. I have some knowledge of the back-end
            stuff, but I have a passion for creating intuitive and dynamic
            front-end user experiences.
          </p>
          <p className="bio">
            Knowledge of: HTML, CSS, JavaScript, Bootstrap, API/JSON, MongoDB,
            Express, React, Node, MySQL, Git, GitHub, Heroku and Photoshop.
          </p>
        </div>

        <div className="about-me col-sm">
          <img src={frame} className="frame" alt="" id="frame-photo" />
        </div>

        <div className="sidenav col-sm">
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
      </div>
    </div>
  );
}

export default About;
