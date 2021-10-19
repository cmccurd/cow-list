import React from 'react';
import Parse from '../src/Parse.js';

// import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueName: '',
      valueDes: '',
    };

    this.handlechangeName = this.handlechangeName.bind(this);
    this.handlechangeDes = this.handlechangeDes.bind(this);

  }

  handlechangeName(event) {
    this.setState({valueName: event.target.value});
  }

  handlechangeDes(event) {
    this.setState({valueDes: event.target.value});
  }

  render() {
    return (
      <form onSubmit={() => {
        Parse.post({name: this.state.valueName, description: this.state.valueDes});
        this.props.handleSubmit;
        }}>
        <label>
          Name:
          <input type='text' value={this.state.value} onChange={this.handlechangeName} />
        </label>
        <label>
          Description:
          <input type='text' value={this.state.value} onChange={this.handlechangeDes} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }

}

export default Form;