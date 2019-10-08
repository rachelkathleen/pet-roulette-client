import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardImage from "../components/CardImage";
import { ToastContainer, toast } from "react-toastify";

class DisplayPet extends Component {
  render() {
    return (
      <Container style={{ alignContent: "center", padding: "2em" }}>
        <ToastContainer
          enableMultiContainer
          containerId={"pet"}
          position={toast.POSITION.TOP_RIGHT}
        />
        <Row className="justify-content-md-center">
          <Col md="auto" style={{ width: "30rem" }}>
            <Card border="dark" style={{ width: "25rem" }} className="reframe">
              <CardImage />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DisplayPet;
