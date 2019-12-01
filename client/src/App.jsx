import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      random: '',
      price: 'loading...',
    };
//this bindings
  }

  componentDidMount() {
    fetch('/api/pricing/')
      // .then(res=>console.log(' initial fetch response: ', res))
      .then(res=>res.json())
      .then((data)=>this.setState({
        price: data[ (Math.floor(Math.random()*100)) ].price,
      }))
      .catch(err=>console.log('fetch catch engaged...', err))
  }

  render() {
    const { price } = this.state;
//deconstruction
    return (
      <div>
        <Header price={price} />
      </div>
    );
  }
}

export default App;
