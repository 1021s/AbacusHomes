import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      random: '',
    };
//this bindings
  }

  componentDidMount() {
    fetch('/api/listing')
      .then(res=>res.json)
      .catch(err=>console.log(err))
  }

  render() {
    const { price } = this;
//deconstruction
    return (
      <div>
        <Header price={price} />
      </div>
    );
  }
}

export default App;
