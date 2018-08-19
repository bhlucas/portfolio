import React, { Component } from 'react';
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
          <img src={background} className="bg mx-auto d-block"/>
        </div>
        <div className="container">
          <Content/>
        </div>

      </div>
    );
  }
}

export default App;
