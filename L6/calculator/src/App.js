import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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


//没有用map
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nums: [0, 0]
    }
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(order, obj){
    console.log(obj.target.value);
    let number = obj.target.value - 0; // 读取value + 类型转换
    const newNums = this.state.nums;
    newNums[order] = number;
    this.setState({
      nums: newNums
    })
  }
  render() {
    return (
      <div >
        <Input order='0' changeHandler={(obj)=>this.changeHandler(0, obj)}></Input>
        <Input order='1' changeHandler={(obj)=>this.changeHandler(1, obj)}></Input>
        <p>{this.state.nums[0]} + {this.state.nums[1]} = {this.state.nums[0]+this.state.nums[1]}</p>

      </div>
    );
  }
}

// // 使用map
// class App extends Component {
//   constructor(props){
//     super(props);

//     this.inputsNum = 5;
//     this.nums = [];
//     this.inputsIndex = [];
//     for (let i=0; i<this.inputsNum; i++){
//       this.nums.push(0);
//       this.inputsIndex.push(i)
//     }
//     this.state = {
//       nums: this.nums
//     }
//     this.inputs = this.inputsIndex.map((order)=>{
//       return {
//         order: order,
//         changeHandler: (obj)=>this.changeHandler(order, obj)
//       }
//     })

//     this.changeHandler = this.changeHandler.bind(this);
//   }
//   changeHandler(order, obj){
//     console.log(obj.target.value);
//     let number = obj.target.value - 0; // 读取value + 类型转换
//     const newNums = this.state.nums;
//     newNums[order] = number;
//     this.setState({
//       nums: newNums
//     })
//   }
//   render() {
//     return (
//       <div >
//         {
//           this.inputs.map((item)=>(
//             <Input {...item}></Input>
//           ))
//         }
//         <p>
//           {this.state.nums.join('+')} = {this.state.nums.reduce((a,b) => (a+b))}
//         </p>

//       </div>
//     );
//   }
// }

export default App;
