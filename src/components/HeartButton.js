import React, { Component } from "react";

class HeartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  addLike = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  };

  render() {
    const count = this.state.count;
    if (count === 0) {
      return (
        <div>
          <button className="button" onClick={this.addLike} id={this.props.id}>
            <i className="far fa-heart fa-lg" style={{ color: "#33c3f0" }}></i>
          </button>
        </div>
      );
    }
    if (count === 1) {
      return (
        <div>
          <button className="button" onClick={this.addLike}>
            <i className="fas fa-heart fa-lg" style={{ color: "red" }}></i>
          </button>
        </div>
      );
    }
    if (count > 1) {
      return (
        <div>
          <button className="button" onClick={this.addLike}>
            <i className="fas fa-heart fa-lg" style={{ color: "red" }}></i>{" "}
            {count}
          </button>
        </div>
      );
    }
  }
}

export default HeartButton;
