import React, { Component } from 'react';
import background from './background_image.jpg'
import styles from'./App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import About from './components/About';



class App extends Component {
  render() {
    return (
      <div className={styles.App}>
          <Header/>
        <About/>
        <div className="container">
          <Skills/>
        </div>

      </div>
    );
  }
}

export default App;
