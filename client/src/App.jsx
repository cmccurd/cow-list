import React from 'react';
import Parse from '../src/Parse.js';
import Cows from '../src/Cows.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  componentDidMount() {
    var cc = Parse.get;
    cc.then(function (response) {
      console.log(response.data);
    });
  };


  render() {
    return (
      <Cows />
    )
  };
};



export default App;