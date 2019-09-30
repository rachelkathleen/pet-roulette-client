import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { fetchRandomPet } from "./redux/actions/pets";
import NavBar from "./components/NavBar";
import RandomPet from './components/RandomPet'
import PetContainer from './containers/PetContainer'
import About from './components/About'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchRandomPet();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={RandomPet} />
            <Route exact path="/pets" component={PetContainer} />
            <Route exact path="/about" component={About} /> 
          </div>
        </Router>     
      </div>
    );
  }
}

export default connect(
  null,
  { fetchRandomPet }
)(App);
