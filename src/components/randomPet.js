import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchRandomPet } from "../redux/actions/pets";

class RandomPet extends Component {
    render() { 
        const pet = this.props.pet.petsReducer;
        
      if (pet === []) {
          return <p>Loading...</p>;
      }
      return (
        <div>
          <h1>This is a pet (yayyyyy!)</h1> 
            <p>{pet.name}</p>  
            <p>{pet.id}</p>  
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
