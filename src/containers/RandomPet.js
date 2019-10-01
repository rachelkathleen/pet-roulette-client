import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardImage from '../components/CardImage'

class RandomPet extends Component {

  render() { 
   return (
    <Container style={{marginTop: '25px'}} className='w-50 p-3 h-auto d-inline-block'>
      <Row className="justify-content-md-center">
        <Col md='auto' style={{ width: '30rem'}}>
          <Card border="dark" style={{ width: '25rem'}}>
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

export default RandomPet;
