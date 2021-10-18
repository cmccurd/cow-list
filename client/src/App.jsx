import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  componentDidMount() {
    console.log('hey')
  };


  render() {
    return (
      <div>Hi</div>
    )
  };
};



export default App;