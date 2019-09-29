import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sendEmail } from "../redux/actions/pets";
 
class SendPet extends Component { 
    
    state = {
        senderName: '',
        senderEmail: '',
        reciepientName: '',
        recipientEmail: '',
        message: '',
        petName: '',
        petURL: '',
        petPhoto: '',
    };
     
handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
};
     
handleSubmit = event => { debugger
    event.preventDefault();
    this.props.sendEmail(this.state);
  };

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>Your Name:</label>
            <input type="text" onChange={(event) => this.handleChange(event)}/>
          </p>
          <p>
            <label>Your Email:</label>
            <input type="text" onChange={(event) => this.handleChange(event)}/>
          </p>
          <p>
            <label>Friend's Name:</label>
            <input type="text" onChange={(event) => this.handleChange(event)}/>
          </p>
          <p>
            <label>Friend's Email</label>
            <input type="text"onChange={(event) => this.handleChange(event)} />
          </p>
          <p> 
            <label>Message</label>
            <input type="textarea" onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default connect(null, { sendEmail })(SendPet);