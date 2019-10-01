import React, { Component } from 'react'
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MyModal from './MyModal'
import { fetchRandomPet } from "../redux/actions/pets";


class CardImage extends Component {
    shufflePet = event => { 
      event.preventDefault();
      this.props.fetchRandomPet();
    };

  render() { 
    const loading = this.props.loading;
    const pet = this.props.pet;
    if (loading) {
        return (
          <>
            <Card.Img
              src="https://66.media.tumblr.com/tumblr_lztjlvnBoa1qcay1ao1_500.gif"
              alt=""
             />
          <Card.Body>
            <Card.Text>
              Loading...
            </Card.Text>
         </Card.Body>
        </>
        );
    } 
 
    return (
        <>
        <Card.Img
              variant="top" 
              src={pet.photos[0].full}
              />
            <Card.Body>
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
            </Card.Body>
        </>
      )
    } 
}

const mapStateToProps = state => { 
  return { 
    pet: state.petReducer.pet,
    loading: state.petReducer.loading
  };
};

export default connect(mapStateToProps, { fetchRandomPet })(CardImage);