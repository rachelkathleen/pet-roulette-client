import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const PetGalleryFilter = props => (
  <div>
    <h5>Shared Pets!</h5>

    <Row className="justify-content-md-center">
      <Col>
        <span></span>
      </Col>
      <Col>
        <button className="button-primary" onClick={props.dogState}>
          Dogs: {props.dogs.length}
        </button>
      </Col>
      <Col>
        <button className="button-primary" onClick={props.allPetsState}>
          All: {props.pets.length}
        </button>
      </Col>
      <Col>
        <button className="button-primary" onClick={props.catState}>
          Cats: {props.cats.length}
        </button>
      </Col>
      <Col>
        <span></span>
      </Col>
    </Row>
  </div>
);

export default PetGalleryFilter;
