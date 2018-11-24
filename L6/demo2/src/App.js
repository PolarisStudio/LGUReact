import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Carousel, Icon} from 'antd';

class Input extends Component {
  render(){
    return (
      <div>
        <p>Number {this.props.order} :</p>
        <input onChange={this.props.changeHandler}></input>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Carousel>

      </Carousel>
    );
  }
}

export default App;
