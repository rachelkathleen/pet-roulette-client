import React, { Component } from "react";
import { connect } from "react-redux";
import { addHeartToPet } from "../redux/actions/pets";

class HeartButton extends Component {
  state = {
    likes: 0
  };

  addLike = () => {
    let newCount = this.state.likes + 1;
    this.setState({
      likes: newCount
    });
    // let newState = {
    //   ...this.state,
    //   likes: newCount
    // };
    // debugger;
    // this.props.addHeartToPet(newState, this.props.pet.id, this.props);
  };

  render() {
    const likes = this.state.likes;
    debugger;
    if (likes === 0) {
      return (
        <div>
          <button
            className="button"
            onClick={this.addLike}
            id={this.props.petId}
          >
            <i className="far fa-heart fa-lg" style={{ color: "#33c3f0" }}></i>
          </button>
        </div>
      );
    }
    if (likes === 1) {
      return (
        <div>
          <button className="button" onClick={this.addLike}>
            <i className="fas fa-heart fa-lg" style={{ color: "red" }}></i>
          </button>
        </div>
      );
    }
    if (likes > 1) {
      return (
        <div>
          <button className="button" onClick={this.addLike}>
            <i className="fas fa-heart fa-lg" style={{ color: "red" }}></i>{" "}
            {likes}
          </button>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, props) => {
  const id = props.petiId;
  const pet = state.petReducer.all.filter(pet => pet.id === id)[0] || {};

  return {
    pet
  };
};
export default connect(
  mapStateToProps,
  {
    addHeartToPet
  }
)(HeartButton);
