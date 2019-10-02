import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchRandomPet } from "../redux/actions/pets";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MyModal from './MyModal'


class PetInfo extends Component {
  shufflePet = event => { 
    event.preventDefault();
    this.props.fetchRandomPet();
  };

  render() { 
    const pet = this.props.pet;
    return (
            <>
              <Card.Title>{pet.name}</Card.Title>
              <div style={{backgroundColor: "white", padding: '25px'}}>
                <Row>
                  <Col>
                    <button 
                      className="button-primary" 
                      onClick={ event => this.shufflePet(event) }>
                      Shuffle!
                    </button>
                  </Col>
                </Row>
                <Row style={{marginTop: '20px'}}>
                  <Col>
                    <button 
                      className="button-primary">
                      <a style={{ color: 'white' }} 
                      href={pet.url}>Visit me on Petfinder!</a>
                    </button>
                  </Col>
                </Row>
                <Row style={{marginTop: '20px'}}>
                  <Col><MyModal /></Col>
                </Row>
              </div>
            </>
        )
    }


}

const mapStateToProps = state => { 
  return { 
    pet: state.petReducer.pet,
  };
};

export default connect(mapStateToProps, { fetchRandomPet })(PetInfo);
