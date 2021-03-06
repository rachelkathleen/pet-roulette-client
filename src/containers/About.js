import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import ContactForm from "../components/ContactForm";
import AboutText from "../components/AboutText";

export default class About extends Component {
  render() {
    return (
      <Container
        style={{ alignContent: "center", padding: "2em", textAlign: "left" }}
      >
        <AboutText />
        <ContactForm />
      </Container>
    );
  }
}
