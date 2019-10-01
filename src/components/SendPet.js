import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sendEmail } from "../redux/actions/pets";
 
class SendPet extends Component { 
     
handleSubmit = event => {
    event.preventDefault();
    //need code to send email
  };

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>Your Name:</label>
            <input type="text"/>
          </p>
          <p>
            <label>Your Email:</label>
            <input type="text"/>
          </p>
          <p>
            <label>Friend's Name:</label>
            <input type="text"/>
          </p>
          <p>
            <label>Friend's Email</label>
            <input type="text"/>
          </p>
          <p> 
            <label>Message</label>
            <input type="textarea"/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default connect(null, { sendEmail })(SendPet);