import React from "react";
import DogVsCat from "../components/DogVsCat";
import PetGallery from "../components/PetGallery";

class PetsContainer extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            margin: "25px",
            alignContent: "center"
          }}
        >
          <DogVsCat />
          <PetGallery />
        </div>
      </>
    );
  }
}

export default PetsContainer;
