import React from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import RandomPet from './components/RandomPet'
import './App.css';
// import { randomPet } from "./redux/actions/pets";
import { fetchRandomPet } from "./redux/actions/pets";
import thunk from "redux-thunk";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchRandomPet();
  }
  render() {
    return (
      <div className="App">
       <RandomPet />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchRandomPet }
)(App);
