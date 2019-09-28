import React, { Component } from 'react'
import { connect } from "react-redux";

class RandomPet extends Component {
  render() { 
    const pet = this.props.pet.petsReducer;
    debugger
    if (pet !== []) {
      return (
        <div>
          <h1>This is a pet (yayyyyy!)</h1> 
            <p>{pet.name}</p>   
            <img src={pet.photos[0].medium} alt=""/>
             
        </div>
        )
    }

    if (pet === []) {
        return <p>Loading...</p>;
    }
    
  }
}

const mapStateToProps = state => { 
  return { 
    pet: state
  };
};

export default connect(mapStateToProps)(RandomPet);
