import React from 'react'
import { connect } from 'react-redux'

class PetsContainer extends React.Component {
  render() { debugger
   const loading = this.props.loading;
    if (loading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <h1>Pets List</h1>
        {this.props.pets.map(pet => (
          <p key={pet.id}>
            {pet.name}
          </p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pets: state.petReducer.all
  };
};

export default connect(mapStateToProps)(PetsContainer);