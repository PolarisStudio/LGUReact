import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Portrait extends Component{
  render(){
    return (
      <div className="portrait">
        <img className='portrait-img'  src="https://www.ipolaris.club/media/img/8801111.jpg"></img>
        </div>
    )
  }
}

class Header extends Component{
  render(){
    return (
      <div className="header">

        <Portrait></Portrait>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Header>

      </Header>
    );
  }
}

export default App;
