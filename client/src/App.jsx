import React from 'react';
import Parse from '../src/Parse.js';
import Cows from '../src/Cows.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cows: [],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3000/api/cows')
    .then((response) => {
      this.setState({cows: response.data});
    });
  }


  render() {
    return (<div>
      <h1>Cow List</h1>
      <input></input>
      {this.state.cows.map((cow) => <Cows
                                      key={cow.cowId}
                                      cow = {cow}
                                    />)}
    </div>)
  }
};



export default App;