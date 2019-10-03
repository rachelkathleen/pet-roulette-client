import React from "react";
import { connect } from "react-redux";

class PetsContainer extends React.Component {
  render() {
    const loading = this.props.loading;
    if (loading) {
      return <p>Loading...</p>;
    }

    const pet = this.props.pets.reverse().map(p => {
      return (
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
      );
    });
    return (
      <div className="row" style={{ margin: 5, alignContent: "center" }}>
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

export default connect(mapStateToProps)(PetsContainer);
