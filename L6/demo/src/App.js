import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.title
    }
    this.addTitle = this.addTitle.bind(this);
  }
  addTitle(){
    this.setState({
      title: this.state.title + '!'
    })
  }
  render(){
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.addTitle}>{this.props.btn}</button>
      </div>
    )
  }
}
const btnProps = {
  title: '标题1',
  btn: '按钮1'
}
class App extends Component {
  render() {
    return (
      <div>
        <Button {...btnProps}></Button>
        <Button title='标题2' btn="按钮2"></Button>
      </div>
      
    );
  }
}

export default App;
