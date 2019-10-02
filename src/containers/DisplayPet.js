import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardImage from '../components/CardImage'
import PetInfo from '../components/PetInfo'

class DisplayPet extends Component {

  render() { 
   return (
    <Container style={{marginTop: '25px'}}>
      <Row className="justify-content-md-center">
        <Col md='auto' style={{ width: '30rem'}}>
          <Card border="dark" style={{ width: '25rem'}} className='reframe'>
            <CardImage />
          </Card>
        </Col>
      </Row>
    </Container>
      );
    } 
 }

const mapStateToProps = state => { 
  return { 
    pet: state.petReducer.pet,
    loading: state.petReducer.loading
  };
};

export default DisplayPet;
