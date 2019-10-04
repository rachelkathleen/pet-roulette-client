import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

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
        <p>
          Number of Dogs: {dogs}, Number of Cats: {cats}
        </p>
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
