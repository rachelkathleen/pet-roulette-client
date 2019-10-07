import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class DogVsCat extends Component {
  render() {
    const pets = this.props.pets;
    const today = moment().endOf("day");
    const week = today.subtract(1, "w");
    const petsThisWeek = pets.filter(p => week < moment(p.created_at));
    const dogs = petsThisWeek.filter(pet => pet.species === "Dog").length;
    const cats = petsThisWeek.filter(pet => pet.species === "Cat").length;

    return (
      <div>
        <h5>Pets Shared this Week</h5>

        <Row className="justify-content-md-center">
          <Col>
            <span></span>
          </Col>
          <Col>
            <span>Dogs: {dogs}</span>
          </Col>
          <Col>
            <span>Cats: {cats}</span>
          </Col>
          <Col>
            <span></span>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pets: state.petReducer.all
  };
};

export default connect(mapStateToProps)(DogVsCat);
