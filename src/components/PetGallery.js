import React, { Component } from "react";

class PetGallery extends Component {
  render() {
    const pet = this.props.petsToShow.map(p => {
      return (
        <div key={p.id}>
          <div
            className="card"
            style={{ width: 15 + "rem", padding: 10, margin: 10 }}
          >
            <a href={p.url} target="blank">
              <img
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
