import React, { Component } from 'react';
import logo from './logo.svg';
import background from './backgournd_image.jpg'
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <div className="bg" />
        <Header/>
      </div>
    );
  }
}

export default App;
