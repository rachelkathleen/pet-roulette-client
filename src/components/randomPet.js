import React, { Component } from 'react'
import { connect } from "react-redux";

class RandomPet extends Component {
  render() { 
    const pet = this.props.pet.petsReducer;
    debugger
    if (pet.photos !== undefined) {
      return (
        <div>
          <h1>This is a pet (yayyyyy!)</h1> 
            <p>{pet.name}</p>  
            <img src={pet.photos[0].medium} alt=""/>
            <a href={pet.url}>Visit my Page</a>
             
        </div>
        )
    }
    if (pet.photos === undefined) {
        return (
          <img src="https://66.media.tumblr.com/tumblr_lztjlvnBoa1qcay1ao1_500.gif" alt=""/>
        );
    } 
  }
}

const mapStateToProps = state => { 
  return { 
    pet: state
  };
};

export default connect(mapStateToProps)(RandomPet);
