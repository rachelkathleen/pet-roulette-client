import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { fetchRandomPet, getPets } from "./redux/actions/pets";
import NavBar from "./components/NavBar";
import RandomPet from "./containers/DisplayPet";
import PetsContainer from "./containers/PetsContainer";
import About from "./containers/About";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchRandomPet();
    this.props.getPets();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={RandomPet} />
            <Route exact path="/pets" component={PetsContainer} />
            <Route exact path="/about" component={About} />
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchRandomPet, getPets }
)(App);
