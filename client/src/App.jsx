import React from 'react';
import Header from './components/Header.jsx';
import Principal from './components/Principal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      random: '',
      price: 'loading...',
    };
    this.usdF = this.usdF.bind(this);
  }

  componentDidMount() {
    this.getPrice();
  }

  getPrice() {
    fetch('/api/pricing/')
      .then((res) => res.json())
      .then((data) => this.setState({
        price: data[(Math.floor(Math.random() * 100))].price,
      }))
      .catch((err) => console.log('fetch catch engaged...', err));
  }

  // eslint-disable-next-line class-methods-use-this
  usdF(num) {
    let numStr = String(num);
    let numArr = [...numStr];
    // million comma
    if (numArr.length > 6) { numArr.splice(numArr.length-6, 0, ','); }
    // thousand comma
    numArr.splice(numArr.length-3, 0, ',');
    numArr.unshift('$');
    return numArr.join('');
  };

  render() {
    const { price } = this.state;
    const { usdF } = this;
    return (
      <div>
        <Header price={price} usdF={usdF} />
        <Principal price={price} usdF={usdF} />
      </div>
    );
  }
}

export default App;
