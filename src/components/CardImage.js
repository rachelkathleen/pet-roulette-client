import React, { Component } from 'react'
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card'
import { fetchRandomPet } from "../redux/actions/pets";
import PetInfo from './PetInfo'

class CardImage extends Component {

  render() {
    const loading = this.props.loading;
    const pet = this.props.pet;
    if (loading) {
        return (
          <>
            <Card.Img 
              className='reframe'  
              src="https://66.media.tumblr.com/tumblr_lztjlvnBoa1qcay1ao1_500.gif"
              alt=""
             />
          </>
        );
    } 
 
    return (
        <>
          <Card.Img
            className='reframe'
            src={pet.photos[0].medium}
          />
          <Card.Body>
            <PetInfo /> 
          </Card.Body>
          </> 
      )
    } 
}

const mapStateToProps = state => { 
  return { 
    pet: state.petReducer.pet,
    loading: state.petReducer.loading
  };
};

export default connect(mapStateToProps, { fetchRandomPet })(CardImage);