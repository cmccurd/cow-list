import React from 'react';
import Parse from '../src/Parse.js';
import Cows from '../src/Cows.jsx';
import Form from '../src/Form.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cows: [],
      currentCow: {
        cowName: '',
        cowDescription: ''
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnEdit = this.handleOnEdit.bind(this);
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

  handleOnClick(cow) {
    // console.log(cow);
    this.setState({currentCow: cow});
  }

  handleOnEdit(cow) {
    // console.log(cow)
    Parse.put(cow);
  }

  render() {
    return (<div>
      <h1>Cow List - {`${this.state.currentCow.cowName}: ${this.state.currentCow.cowDescription}`}</h1>
      <Form handleSubmit={this.handleSubmit}/>
      {this.state.cows.map((cow) => <Cows
                                      key={cow.cowId}
                                      cow={cow}
                                      onClick={this.handleOnClick}
                                      deleteOnClick={this.deleteOnClick}
                                      handleOnEdit={this.handleOnEdit}
                                    />)}
    </div>)
  }
};


export default App;