import React, { Component } from "react";
import FittedImage from "react-fitted-image";
import HeartButton from "./HeartButton";

class PetGallery extends Component {
  render() {
    const pet = this.props.petsToShow.map(p => {
      return (
        <div
          key={p.id}
          className="card"
          style={{
            padding: 5,
            margin: 5
          }}
        >
          <div
            style={{
              width: 15 + "rem",
              height: 15 + "rem"
            }}
          >
            <a href={p.url} target="blank">
              <FittedImage
                fit="contain"
                className="card-img-top"
                style={{ maxWidth: 14 + "rem", maxHeight: 14 + "rem" }}
                src={
                  p.photo
                    ? p.photo
                    : "https://i.ibb.co/YyGLcqn/Screen-Shot-2019-10-02-at-10-09-23-PM.png"
                }
                alt=""
              />
            </a>
          </div>
          <HeartButton petId={p.id} />
        </div>
      );
    });
    return (
      <div className="row" style={{ margin: 5 }}>
        {pet}
      </div>
    );
  }
}

export default PetGallery;
