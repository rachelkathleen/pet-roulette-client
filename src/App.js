import React from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import PetContainer from './containers/PetContainer'
import logo from './logo.svg';
import './App.css';
import { fetchPets } from "./redux/actions/pets";
import thunk from "redux-thunk";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchPets();
  }
  render() {
    return (
      <div className="App">
       <PetContainer />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchPets }
)(App);
