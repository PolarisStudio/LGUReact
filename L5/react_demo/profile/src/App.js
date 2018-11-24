import React, { Component } from 'react';
import './App.css';

var contactList = {
  email: '117010307@link.cuhk.edu.cn',
  address: "2001 Longxiang Road, Longgang District, Shenzhen",
};

var contentList = [
  {
    title: 'Education Experiences',
    short: 'CUHK(SZ)',
    long: `The Chinese University of Hong Kong, Shenzhen, 2017-2020
React Course in Polaris Studio, 2018.09-2018.12`
  },
  {
    title: 'Programming Skills',
    short: 'Python, JavaScript',
    long: `Fluent with Python
Very familiar with JavaScript
As well as HTML & CSS`
  },
  {
    title: 'Hobbies',
    short: 'Sports, Programming',
    long: `Doing sports
Programming during most of my weekends`
  },
  {
    title: 'Working Experiences',
    short: 'Polaris Studio',
    long: `Polaris Studio is my dream team!
    `
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
            <em className='em-strong'>David</em>
            <hr></hr>
            <em>CUHK(SZ)</em>
          </div>
        </div>
      </div>
    )
  }
}

class Pop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: JSON.parse(props.content),
      show: false
    }

  }

  render() {
    setTimeout(() => {
      this.setState({
        show: true
      })
    })
    return (
      <div className={'full-pop ' + (this.state.show ? 'full-pop-show' : '')}>
        <div>
          {this.state.content.title}
        </div>
        <hr></hr>
        <p>
          {this.state.content.short}
        </p>
      </div>
    )
  }
}

class ContainerHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerFocus: null
    };
  }
  headerChangeFocus(newTitle) {
    this.setState({
      headerFocus: newTitle === this.state.headerFocus ? null : newTitle
    })
  }
  render() {
    return (

      <div className="container-row full-height">
        {
          contentList.map((item) =>

            <a key={item.title} className={'container-col header-box auto-height  ' + (this.state.headerFocus === item.title ? "header-box-focus" : "")} href={"#" + item.title} onMouseEnter={() => { this.headerChangeFocus(item.title) }} onMouseLeave={() => { this.headerChangeFocus(null) }}>

              <div >

                <div style={{fontSize : '1.5rem'}}>
                  {item.title}
                </div>
                {/* <hr className="header-box-hr"></hr> */}
                {/* <div>
                  {item.short}
                </div> */}
                <div style={{ position: 'relative' }}>
                  {this.state.headerFocus === item.title &&
                    <Pop content={JSON.stringify(item)}></Pop>
                  }

                </div>

              </div>
            </a>




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

class MailIcon extends Component {
  render() {
    return (
      <div className="Icon">
        &#xe623;
      </div>
    )
  }
}

class AddressIcon extends Component {
  render() {
    return (
      <div className="Icon">
        &#xe61d;
      </div>
    )
  }
}


class Middle extends Component {
  render() {
    return (
      <div>
        <div className="Middle">
          <a href={"mailto:" + contactList.email}>
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
        <hr style={{width: '95%', borderWidth: '1px' , position: 'absolute', top: '98vh', left:'2.5 %'}}></hr>

      </div>
    )
  }
}

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }
  render() {
    return (
      <div className='margin-bottom' id={this.props.title}>
        <div className='container-row container-left align-end underline '>
          <div className='main-head'>
            {this.props.title}

          </div>
          <div className='main-subhead'>{this.props.short}</div>
        </div>

        <p className='main-p'>
          {this.props.long}
        </p>
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

        <main style={{ position: 'absolute', top: '100vh' }}>
          {contentList.map((item) =>

            <MainComponent title={item.title} short={item.short} long={item.long}>
            </MainComponent>

          )}
        </main>
      </div>
    );
  }
}

export default App;
export { MailIcon, AddressIcon };


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