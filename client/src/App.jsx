import React from 'react';
import Parse from '../src/Parse.js';

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
      <div>Hi</div>
    )
  };
};



export default App;