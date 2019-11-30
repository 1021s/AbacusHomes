import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      random: '',
    };
//this bindings
  }

//methods

  render() {
//deconstruction
    return (
      <div>
        React App is ready to go.
      </div>
    )
  }
}

export default App;
