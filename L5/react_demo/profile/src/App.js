import React, { Component } from 'react';
import './App.css';

var contactList = {
  email: '117010307@link.cuhk.edu.cn',
  address: "2001 Longxiang Road, Longgang District, Shenzhen",
};

var headerList = [
  {
    title: 'Education Experiences',
    short: 'CUHK(SZ)',
    long: 'XXX'
  },
  {
    title: 'Programming Skills',
    short: 'Python, JavaScript',
    long: 'XXX'
  },
  {
    title: 'Hobbies',
    short: 'Sports, Miao Miao',
    long: 'XXX'
  },
  {
    title: 'Working Experiences',
    short: 'Polaris Studio',
    long: 'XXX'
  },
]


class Portrait extends Component {
  render() {
    return (
      <div className="portrait">
        <div>
        <div>
          <img className='portrait-img' src="https://www.ipolaris.club/media/img/8801111.jpg" alt="portrait"></img>

        </div>
        <div className='container-col'>
          <em className='em-strong'>小喵呜</em>
          <hr></hr>
          <em>CUHK(SZ)</em>
        </div>
        </div>
      </div>
    )
  }
}

class ContainerHeader extends Component{
  constructor(props){
    super(props);
    this.state = {
      headerFocus: null
    };
  }
  headerChangeFocus(newTitle){
    this.setState({
      headerFocus: newTitle
    })
    console.log(this.headerFocus)
  }
  render(){
    return (
      <div className="container-row full-height">
        {
          headerList.map((item)=>
          <div className={"container-col auto-height header-box " + (this.state.headerFocus===item.title?"header-box-focus":"")} key={item.title} onClick={()=>{this.headerChangeFocus(item.title)}}>
            <div>
              {item.title}
            </div>
            <hr></hr>
            <div>
              {item.short}
            </div>
          </div>
          )
        }
        
        
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div className="header">
        <ContainerHeader></ContainerHeader>
        <Portrait></Portrait>
      </div>
    )
  }
}

class MailIcon extends Component{
  render(){
    return (
      <div className="Icon">
        &#xe623;
      </div>
    )
  }
}

class AddressIcon extends Component{
  render(){
    return (
      <div className="Icon">
        &#xe61d;
      </div>
    )
  }
}


class Middle extends Component{
  render(){
    return (
      <div className="Middle">
        <a href={"mailto:"+contactList.email}>
        <div className='container-col'>
          <MailIcon></MailIcon>
          <em>{contactList.email}</em>
          
        </div>
        </a>

        <div className='container-col'>
          <AddressIcon></AddressIcon>
          <em>{contactList.address}</em>
          
        </div>
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div>
      <Header>

      </Header>
      <Middle>

      </Middle>
      </div>
    );
  }
}

export default App;
export {MailIcon, AddressIcon};


// fetch(
//   "/api/weather/city/101280601", {
//       method: "GET",
//   }
// )
// .then(
//   function(response){
//       return response.json()
//   },
//   function(error){

//   }
// )
// .then(
//   function(data){
//     console.log(data)
//   }
// )