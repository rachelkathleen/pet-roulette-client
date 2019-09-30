import React from 'react';
import { connect } from 'react-redux';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RandomPet from './components/RandomPet'
import PetContainer from './containers/PetContainer'
import About from './components/About'
import './App.css';
import { fetchRandomPet } from "./redux/actions/pets";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchRandomPet();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Route exact path="/" component={RandomPet} />
          <Route exact path="/pets" component={PetContainer} />
          <Route exact path="/about" component={About} /> 
        </Router>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchRandomPet }
)(App);
