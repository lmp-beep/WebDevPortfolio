import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import swal from "sweetalert2";

import logo from "../images/LPlogo.png";
import github from "../images/github-logo1.png";
import linkedin from "../images/linkedin-logo1.png";
import camera from "../images/photo-camera1.png";

// import EmailValidator from 'email-validator';
// import * as EmailValidator from 'email-validator';
// EmailValidator.validate("test@email.com"); // true

const ContactForm = () => {
  // const [emailInput, setEmail] = useState("");
  // const [validEmail, validateEmail] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          swal.fire(
            "Message Sent",
            "Lisa will get back to you as soon as she can!",
            "success"
          );
        },
        (error) => {
          console.log(error.text);
          swal.fire("Message Error", error.text, "error");
        }
      );
    e.target.reset();
  };

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
      <div className="sidenav-contact">
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
      <div className="contact-form-card">
        <div className="card">
          <div className="form-header">
            <p>
              I would love to hear from you, so whether you have a question or
              just want to say hi, please feel free to drop me a line.
            </p>
          </div>

          <Form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <a className="title">Name</a>
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                name="user_name"
                required
              />
            </div>

            <div className="form-group">
              <a className="title">Email</a>
              <Form.Field
                id="form-input-control-email"
                control={Input}
                name="user_email"
                placeholder="name@example.com"
                required
                // validators={[
                //   "matchRegexp:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/",
                // ]}
                // error={{
                //   content: "Please enter a valid email address.",
                //   pointing: "below",
                // }}
              />
            </div>

            <div className="form-group">
              <a className="title">Message</a>
              <Form.Field
                id="form-textarea-control-opinion"
                control={TextArea}
                name="user_message"
                required
              />
            </div>

            <div className="submit-btn">
              <Button className="submit-button">SUBMIT</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
