import React from 'react'
import { connect } from 'react-redux'

class PetContainer extends React.Component {
  render() {
    if (this.props.pets.length === 0) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <h1>Pets List</h1>
        something
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    pets: state
  };
};

export default connect(mapStateToProps)(PetContainer);