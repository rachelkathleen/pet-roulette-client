import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRandomPet } from "../redux/actions/pets";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EmailForm from "./EmailForm";

class PetInfo extends Component {
  shufflePet = event => {
    event.preventDefault();
    this.props.fetchRandomPet();
  };

  render() {
    return (
      <>
        <div style={{ backgroundColor: "white" }}>
          <Row>
            <Col>
              <button
                className="button-primary"
                onClick={event => this.shufflePet(event)}
              >
                Shuffle!
              </button>
            </Col>
            <Col>
              <EmailForm shufflePet={this.shufflePet} />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    pet: state.petReducer.pet
  };
};

export default connect(
  mapStateToProps,
  { fetchRandomPet }
)(PetInfo);
