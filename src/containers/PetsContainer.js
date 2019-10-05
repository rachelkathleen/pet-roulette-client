import React from "react";
import DogVsCat from "../components/DogVsCat";
import PetGallery from "../components/PetGallery";
import Container from "react-bootstrap/Container";

class PetsContainer extends React.Component {
  render() {
    return (
      <>
        <div style={{ marginTop: "25px", alignContent: "center" }}>
          <DogVsCat />
          <PetGallery />
        </div>
      </>
    );
  }
}

export default PetsContainer;
