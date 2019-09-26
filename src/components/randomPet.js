import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchRandomPet } from "../redux/actions/pets";

class RandomPet extends Component {
    render() {
        const { pet } = this.props;
      if (!pet) {
        return <p>Loading...</p>};
      return (
        <div>
            <h1>Will be a pet!</h1>
            <p>{pet.name}</p>            
        </div>
        )
    }
}

  const mapStateToProps = (state, props) => { debugger
    const pet = fetchRandomPet
    return {
      pet,
    };
  };


  export default connect(mapStateToProps)(RandomPet);
