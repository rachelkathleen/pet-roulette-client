import React from "react";
import Row from "react-bootstrap/Row";

const PetGalleryFilter = props => (
  <div>
    <Row className="row">
      <button className="button-primary" onClick={props.dogState}>
        Dogs: {props.dogs.length}
      </button>

      <button className="button-primary" onClick={props.allPetsState}>
        All Pets!
      </button>

      <button className="button-primary" onClick={props.catState}>
        Cats: {props.cats.length}
      </button>
    </Row>
  </div>
);

export default PetGalleryFilter;
