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
  }

  componentDidMount() {
    fetch('/api/pricing/')
      .then(res=>res.json())
      .then((data)=>this.setState({
        price: data[ (Math.floor(Math.random()*100)) ].price,
      }))
      .catch(err=>console.log('fetch catch engaged...', err))
  }

  render() {
    const { price } = this.state;
    return (
      <div>
        <Header price={price} />
      </div>
    );
  }
}

export default App;
