import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

class PetGallery extends Component {
  render() {
    const loading = this.props.loading;
    if (loading) {
      return <p>Loading...</p>;
    }

    const today = moment().endOf("day");
    const week = today.subtract(1, "w");
    const petsThisWeek = this.props.pets.filter(
      p => week < moment(p.created_at)
    );
    const pet = petsThisWeek.reverse().map(p => {
      return (
        <>
          <div
            className="card"
            style={{ width: 15 + "rem", padding: 10, margin: 10 }}
          >
            <img
              className="card-img-top"
              style={{ maxWidth: 14 + "rem", maxHeight: 14 + "rem" }}
              src={
                p.photo
                  ? p.photo
                  : "https://i.ibb.co/YyGLcqn/Screen-Shot-2019-10-02-at-10-09-23-PM.png"
              }
            />
          </div>
        </>
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
