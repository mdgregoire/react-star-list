import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

  this.state = {
                starList: [
                              {name: 'gacrux',
                                diameter: '117 million KM'},
                              {name: 'hadar',
                                diameter: '13 million KM'},
                              {name: 'fomalhaut',
                                diameter: '2 million KM'},
                              {name: 'the sun',
                                diameter: '1.3 million KM'}],

               };
  } //end constructor




  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      starList:{stars:[
    ...this.state.starList.stars,
    [propertyName]: event.target.value,
  ]
      }
    })
  }

  render() {
    // let starsListItemArray = [];

    // for(let i=0; i < this.state.starList.length; i++){
    //   starsListItemArray.push(<li>{this.state.starList[i]}</li>)
    // }

    // this.state.starList.forEach(star => {
    //   const newStar = <li>{star}</li>
    //   starsListItemArray.push(newStar);
    // })

    // const starsListItemArray = this.state.starList.map(star => {
    //   const newStar = <li>{star}</li>;
    //   return newStar;
    // })

    // const starsListItemArray = this.state.starList.map((star, index) => <li key={index}>{star}</li>);

    return (
    <div>
      <form>
        <input onSubmit={this.handleChangeFor('name')} placeholder="Star Name" />
        <input onSubmit={this.handleChangeFor('diameter')} placeholder="Star Diameter" />
        <input type="submit" />
      </form>
        <ul>

          {this.state.starList.map((star, index) =>
            <li key={index}>The Star {star.name} is {star.diameter} in diameter.</li>)}

        </ul>

    </div>

    );
  }
}

export default App;
