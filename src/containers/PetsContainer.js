import React from "react";
import DogVsCat from "../components/DogVsCat";
import PetGallery from "../components/PetGallery";

class PetsContainer extends React.Component {
  render() {
    return (
      <>
        <DogVsCat />
        <PetGallery />
      </>
    );
  }
}

export default PetsContainer;
