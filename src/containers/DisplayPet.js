import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardImage from "../components/CardImage";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import { fetchRandomPet } from "../redux/actions/pets";

class DisplayPet extends Component {
  shufflePet = event => {
    event.preventDefault();
    this.props.fetchRandomPet();
  };
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
            <Card style={{ width: "20em" }}>
              <div style={{ width: "20em", height: "16em" }}>
                <CardImage
                  shufflePet={this.shufflePet}
                  pet={this.props.pet}
                  loading={this.props.loading}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    pet: state.petReducer.pet,
    loading: state.petReducer.loading
  };
};

export default connect(
  mapStateToProps,
  { fetchRandomPet }
)(DisplayPet);
