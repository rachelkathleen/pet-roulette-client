import React from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import PetContainer from './containers/PetContainer'
import logo from './logo.svg';
import './App.css';
import { getPets } from "./redux/actions/pets";

class App extends React.Component {
  componentDidMount() {
    this.props.getPets();
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
  { getPets }
)(App);


