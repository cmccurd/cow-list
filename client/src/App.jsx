import React from 'react';
import Parse from '../src/Parse.js';
import Cows from '../src/Cows.jsx';
import Form from '../src/Form.jsx';
// import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cows: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    Parse.get
    .then((response) => {
      this.setState({cows: response.data});
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    Parse.get
    .then((response) => {
      this.setState({cows: response.data});
    });
  }

  render() {
    return (<div>
      <h1>Cow List</h1>
      <Form handleSubmit={this.handleSubmit}/>
      {this.state.cows.map((cow) => <Cows
                                      key={cow.cowId}
                                      cow = {cow}
                                    />)}
    </div>)
  }
};



export default App;