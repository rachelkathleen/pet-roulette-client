import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ShuffleAndShareButtons from "./ShuffleAndShareButtons";
import FittedImage from "react-fitted-image";

class CardImage extends Component {
  render() {
    const loading = this.props.loading;
    const pet = this.props.pet;
    if (loading) {
      return (
        <>
          <FittedImage
            fit="contain"
            src="https://66.media.tumblr.com/tumblr_lztjlvnBoa1qcay1ao1_500.gif"
          />
        </>
      );
    }
    return (
      <>
        <a href={pet.url}>
          <FittedImage fit="contain" src={pet.photos[0].medium} />
        </a>
        <Card.Body>
          <ShuffleAndShareButtons shufflePet={this.props.shufflePet} />
        </Card.Body>
      </>
    );
  }
}

export default CardImage;
