import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchRandomPet } from "../redux/actions/pets";

class RandomPet extends Component {
    render() { debugger
        const { pet } = this.props;
      if (!pet) {
        return <p>Loading...</p>};
      return (
        <div>
          <h1>Will be a pet!</h1>
            
                
        </div>
        )
    }
}

  const mapStateToProps = state => {
    return { 
      pet: state
    };
  };


  export default connect(mapStateToProps)(RandomPet);
