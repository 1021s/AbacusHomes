import React from 'react';

import Header from './components/Header.jsx';
import Principal from './components/principal/Principal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interest: '20%',
      interestRate: '3.758%',
    };
    this.usdF = this.usdF.bind(this);
    // this.updateMC = this.updateMC.bind(this);
    this.percentConv = this.percentConv.bind(this);
  }

  componentWillMount() {
    this.getPrice();
  }

  componentDidMount() {
    // this.getPrice();
    console.log('woot');
  }

  getPrice() {
    fetch('/api/pricing/')
      .then((res) => res.json())
      .then((data) => this.setState({
        price: data[(Math.floor(Math.random() * 100))].price,
      }))
      .then(() => console.log(this.state.interest))
      .then(() => this.setState({
        monthly: Math.round(this.state.price / 12),
        priceStr: this.usdF(this.state.price),
        down: this.state.price * this.percentConv(this.state.interest),
      }))
      .then(() => this.setState({
        downStr: this.usdF(this.state.down),
      }))
      .catch((err) => console.log('fetch catch engaged...', err));
  }

  // eslint-disable-next-line class-methods-use-this
  usdF(num) {
    let numStr = String(num);
    let numArr = [...numStr];
    // million comma
    if (numArr.length > 6) { numArr.splice(numArr.length - 6, 0, ','); }
    // thousand comma
    numArr.splice(numArr.length - 3, 0, ',');
    numArr.unshift('$');
    return numArr.join('');
  }

  // updateMC(value) {
  //   console.log('friggin chill')
  // }

  // eslint-disable-next-line class-methods-use-this
  percentConv(val) {
    if (val[val.length - 1] === '%') {
      let temp = val.slice(0, -1);
      return temp / 100;
    }
  }

  render() {
    const { price, monthly, priceStr, interest, interestRate, down, downStr } = this.state;
    const { usdF } = this;
    // const MyContext = React.createContext('calculating...');
    return (
      <div>
        {/* <MyContext.Provider value={price}> */}
        <Header monthly={monthly} usdF={usdF} />
        <Principal price={price} monthly={monthly} usdF={usdF} priceStr={priceStr} down={down} interest={interest} interestRate={interestRate} downStr={downStr} />
        {/* </MyContext.Provider> */}
      </div>
    );
  }
}

export default App;
