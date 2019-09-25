import React from 'react';
import { connect } from 'react-redux';
import PetContainer from './containers/PetContainer'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <PetContainer />
    </div>
  );
}

export default App;
