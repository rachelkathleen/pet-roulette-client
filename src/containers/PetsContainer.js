import React from "react";
import DogVsCat from "../components/DogVsCat";
import PetGallery from "../components/PetGallery";
import Container from "react-bootstrap/Container";

class PetsContainer extends React.Component {
  render() {
    return (
      <Container style={{ alignContent: "center", padding: "2em" }}>
        <DogVsCat />
        <PetGallery />
      </Container>
    );
  }
}

export default PetsContainer;
