import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SharePetModal from "./SharePetModal";

const ShuffleAndShareButtons = props => (
  <>
    <div style={{ backgroundColor: "white" }}>
      <Row>
        <Col>
          <button
            className="button-primary"
            onClick={event => props.shufflePet(event)}
          >
            Shuffle!
          </button>
        </Col>
        <Col>
          <SharePetModal shufflePet={props.shufflePet} />
        </Col>
      </Row>
    </div>
  </>
);

export default ShuffleAndShareButtons;
