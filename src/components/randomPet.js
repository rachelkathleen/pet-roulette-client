import React, { Component } from 'react'
import { connect } from "react-redux";
import Media from 'react-bootstrap/Media'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ModalButton from './ModalButton'

class RandomPet extends Component {
  render() { 
    const pet = this.props.pet.petsReducer;
    if (pet.photos !== undefined && pet.photos[0].full !== undefined) {
      return (
    <Container style={{marginTop: '100px'}}>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card border="dark" style={{ width: '25rem'}}>
            <Card.Img 
              variant="top" 
              src={pet.photos[0].full}
              />
            <Card.Body>
              <Card.Title>{pet.name}</Card.Title>
              <button>Shuffle!</button><br/>
              <button><a href={pet.url}>Visit me on Petfinder!</a></button>
              <ModalButton />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
        )
    }
    if (pet.photos === undefined) {
        return (
  <Media>
  <img
    width={300}
    style={{margin: '20px'}}
    // height={64}
    className="mr-3"
    src="https://66.media.tumblr.com/tumblr_lztjlvnBoa1qcay1ao1_500.gif"
    alt="Generic placeholder"
  /></Media>
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