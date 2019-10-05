import React, { Component } from "react";
import { connect } from "react-redux";
import { createPet, fetchRandomPet } from "../redux/actions/pets";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom";

class SendPet extends Component {
  state = {
    sender_email: "",
    sender_name: "",
    recipient_email: "",
    recipient_name: "",
    message: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { pet } = this.props;
    let newState = {
      ...this.state,
      photo: pet.photos[0].medium,
      name: pet.name,
      url: pet.url,
      species: pet.type
    };
    this.props.fetchRandomPet();
    this.props.createPet(newState, this.props.closeModal);
  };

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        style={{ fontSize: "15px", textAlign: "left" }}
      >
        <Form.Row>
          <Col>
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleChange}
              name="sender_name"
              value={this.state.sender_name}
              required
            />
          </Col>
          <Col>
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              type="email"
              onChange={this.handleChange}
              name="sender_email"
              value={this.state.sender_email}
              required
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Label>Friend's Name</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleChange}
              name="recipient_name"
              value={this.state.recipient_name}
              required
            />
          </Col>
          <Col>
            <Form.Label>Friend's Email</Form.Label>
            <Form.Control
              type="email"
              onChange={this.handleChange}
              name="recipient_email"
              value={this.state.recipient_email}
              required
            />
          </Col>
        </Form.Row>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            onChange={this.handleChange}
            name="message"
            value={this.state.message}
          />
        </Form.Group>
        <input className="button-primary" type="submit" value="submit" />
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    pet: state.petReducer.pet
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { createPet, fetchRandomPet }
  )(SendPet)
);
