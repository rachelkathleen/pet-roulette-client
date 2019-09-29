import React, { Component } from 'react'
import { connect } from 'react-redux';
 
class SendPet extends Component {
  
state = {
    text: ''
};
     
handleChange = event => {
    this.setState({
        text: event.target.value
    });
};
     
handleSubmit = event => { debugger
    event.preventDefault();
        this.props.sendPet(this.state);
};

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          {/* <p>
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
          </p>*/}
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

const mapDispatchToProps = dispatch => {
    return {
      sendPet: formData => dispatch({ type: 'SEND_PET', payload: formData })
    };
  };
  
export default connect(null, mapDispatchToProps)(SendPet);