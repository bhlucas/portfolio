import React, { Component } from 'react';
import logo from './logo.svg';
import background from './background_image.jpg'
import './App.css';
import Header from './components/Header';
import Content from './components/Content';


class App extends Component {
  render() {
    return (
      <div>
          <Header/>
        <div className="container-fluid ">
          <img src={background} className="bg"/>
        </div>
        <div className="container">
          <Content/>
        </div>

      </div>
    );
  }
}

export default App;
