import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Rectangle extends Component {
  render(){
    return (
      <div style={{width: "100px", height: "200px", backgroundColor :'red'}}></div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Course</h1>
        <Rectangle></Rectangle>
        <Rectangle></Rectangle>
      </div>
    );
  }
}

export default App;

console.log(logo);