import React, { Component } from 'react'
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class RandomPet extends Component {
  render() { 
    const pet = this.props.pet.petsReducer;
    debugger
    if (pet.photos !== undefined) {
      return (
  <>
        <div>
          <h1>{pet.name}</h1>  
            <img src={pet.photos[0].medium} alt="" />          
        </div>
        <div class="row">
          <div class="six columns"><a class="button" href={pet.url}>Visit me on Petfinder!</a></div>
         
        </div>
        <div class="row">
          
          <div class="six columns"><a class="button" href={pet.url}>Share me!</a></div>
        </div>
</>

        )
    }
    if (pet.photos === undefined) {
        return (
          <img src="https://66.media.tumblr.com/tumblr_lztjlvnBoa1qcay1ao1_500.gif" alt=""/>
        );
    } 
  }
}

const mapStateToProps = state => { 
  return { 
    pet: state
  };
};

export default connect(mapStateToProps)(RandomPet);