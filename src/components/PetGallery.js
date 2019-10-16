import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import FittedImage from "react-fitted-image";

class PetGallery extends Component {
  render() {
    const today = moment().endOf("day");
    const week = today.subtract(3, "w");
    const petsThisWeek = this.props.pets.filter(
      p => week < moment(p.created_at)
    );
    const pet = petsThisWeek.reverse().map(p => {
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

const mapStateToProps = state => {
  return {
    pets: state.petReducer.all
  };
};

export default connect(mapStateToProps)(PetGallery);
