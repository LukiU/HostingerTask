import React, { Component } from 'react';
import Header from './Components/Header/header';
import MainPageBody from './Components/MainPageBody/mainPageBody';
import Dropdown from './Components/Dropdown/dropDown';
import './Assets/css/def.mini.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Dropdown />
      	<Header />
      	<MainPageBody />
      </div>
    );
  }
}

export default App;
