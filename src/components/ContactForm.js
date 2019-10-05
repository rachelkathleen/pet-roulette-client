import React, { Component } from "react";
import { connect } from "react-redux";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { sendEmail } from "../redux/actions/contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ContactForm extends Component {
  state = {
    email: "",
    name: "",
    message: ""
  };

  contactNotify = () =>
    toast("Thank you for your message!", { containerId: "contact" });

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const contact = this.state;
    this.props.sendEmail(contact);
    this.contactNotify();
    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      email: "",
      name: "",
      message: ""
    });
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={this.handleSubmit}
          style={{ fontSize: "15px", textAlign: "left" }}
        >
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Your Name:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={this.handleChange}
                  name="name"
                  value={this.state.name}
                  required
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
                  required
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
              required
            />
          </Form.Group>
          <input className="button-primary" type="submit" value="submit" />
        </Form>
        <ToastContainer
          enableMultiContainer
          containerId={"contact"}
          position={toast.POSITION.BOTTOM_LEFT}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { sendEmail }
)(ContactForm);
