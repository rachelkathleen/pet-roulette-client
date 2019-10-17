import React, { Component } from "react";
import { connect } from "react-redux";
import PetGalleryFilter from "../components/PetGalleryFilter";
import PetGallery from "../components/PetGallery";
import Container from "react-bootstrap/Container";

class PetsContainer extends Component {
  state = {
    petsToDisplay: "all"
  };

  catState = () => {
    this.setState({ petsToDisplay: "cats" });
  };

  dogState = () => {
    this.setState({ petsToDisplay: "dogs" });
  };

  allPetsState = () => {
    this.setState({ petsToDisplay: "all" });
  };

  render() {
    const pets = this.props.pets.reverse();
    const dogs = pets.filter(pet => pet.species === "Dog");
    const cats = pets.filter(pet => pet.species === "Cat");
    let petsToShow = pets;
    if (this.state.petsToDisplay === "all") {
      petsToShow = pets;
    }
    if (this.state.petsToDisplay === "cats") {
      petsToShow = cats;
    }
    if (this.state.petsToDisplay === "dogs") {
      petsToShow = dogs;
    }

    return (
      <Container style={{ alignContent: "center", padding: "2em" }}>
        <PetGalleryFilter
          pets={pets}
          dogs={dogs}
          cats={cats}
          dogState={this.dogState}
          catState={this.catState}
          allPetsState={this.allPetsState}
        />
        <PetGallery petsToShow={petsToShow} dogs={dogs} cats={cats} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    pets: state.petReducer.all
  };
};

export default connect(mapStateToProps)(PetsContainer);
