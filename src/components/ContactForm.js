import React, { Component } from 'react'
import { connect } from 'react-redux';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { sendEmail } from "../redux/actions/contact";

class ContactForm extends Component {

    state = {
        email: '',
        name: '',
        message: ''
    };
    
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
         
    handleSubmit = event => {
        event.preventDefault();
        const { contact } = this.props
        let newState = {...this.state, email: contact.email, name: contact.name, message: contact.message}
        this.props.sendEmail(newState);
      };

    render() {
        return (
            <div>
                <Form style={{fontSize:'15px', textAlign:'left'}}>
                    <Row>
                    <Col>
                    <Form.Group>
                        <Form.Label>Your Name:</Form.Label>
                        <Form.Control 
                          type="text"
                          onChange={this.handleChange} 
                          name="name" 
                          value={this.state.name}
                        />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label>Your Email:</Form.Label>
                        <Form.Control 
                          type="email" 
                          placeholder="name@example.com"
                          onChange={this.handleChange} 
                          name="email" 
                          value={this.state.email}
                        />
                    </Form.Group>
                    </Col>
                    </Row> 
                    <Form.Group>
                        <Form.Label>Message:</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          rows="3" 
                          onChange={this.handleChange} 
                          name="message" 
                          value={this.state.message}
                        />
                    </Form.Group>
                    </Form>
            </div>
        )
    }
}

const mapStateToProps = state => { 
      return { 
        email: state.formReducer.email,
      };
    };
  
export default connect(mapStateToProps, { sendEmail })(ContactForm);
