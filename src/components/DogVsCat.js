import React, { Component } from "react";
import { connect } from "react-redux";

class DogVsCat extends Component {
  render() {
    const dogs = this.props.pets.filter(pet => pet.species === "Dog").length;
    const cats = this.props.pets.filter(pet => pet.species === "Cat").length;

    return (
      <div>
        <p>Number of Dogs: {dogs}</p>
        <p>Number of Cats: {cats}</p>
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
