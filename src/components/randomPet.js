import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchRandomPet } from "../redux/actions/pets";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import SendPet from './SendPet'


class RandomPet extends Component {

  shufflePet = event => { 
    event.preventDefault();
    this.props.fetchRandomPet();
  };

  render() { 
    const loading = this.props.loading;
    if (loading) {
        return (
          <Container style={{marginTop: '25px', marginBottom: '150px'}}>
            <SendPet />
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <Card border="dark" style={{ width: '25rem'}}>
                    <Card.Img 
                      className="mr-3"
                      src="https://66.media.tumblr.com/tumblr_lztjlvnBoa1qcay1ao1_500.gif"
                      alt=""
                    />
                    <Card.Body>
                      <Card.Text>
                        Loading...
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
        );
    } 
    const pet = this.props.pet;
 
    return (
    <Container style={{marginTop: '25px'}}>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card border="dark" style={{ width: '30rem'}}>
            <Card.Img 
              variant="top" 
              src={pet.photos[0].full}
              />
            <Card.Body>
              <Card.Title>{pet.name}</Card.Title>
              <button onClick={ event => this.shufflePet(event) }>Shuffle!</button><br/>
              <button><a href={pet.url}>Visit me on Petfinder!</a></button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
        )
    }
    
  
}

const mapStateToProps = state => { 
  return { 
    pet: state.petReducer.pet,
    loading: state.petReducer.loading
  };
};

export default connect(mapStateToProps, { fetchRandomPet })(RandomPet);