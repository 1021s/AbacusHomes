import React from 'react';
import styled from 'styled-components';
import Header from './components/Header.jsx';
import Principal from './components/principal/Principal.jsx';
import Mortgage from './components/mortgageInsurance/Mortgage.jsx';
import PropertyTaxes from './components/propertyTaxes/PropertyTaxes.jsx';
import HomeInsurance from './components/homeInsurance/HomeInsurance.jsx';
import HOAFees from './components/hoaFees/HOAFees.jsx';
import Utilities from './components/utilities/Utilities.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interest: 20,
      principalAndInterest: false,
      mortgageInsurance: false,
      propertyTaxes: false,
      homeInsurance: false,
      hoaFees: false,
      utilities: false,
    };
    this.usdF = this.usdF.bind(this);
    this.percentConv = this.percentConv.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.expand = this.expand.bind(this);
    this.updateMC = this.updateMC.bind(this);
  }

  componentDidMount() {
    this.getPrice();
    // this.unitTest();
  }

  // eslint-disable-next-line react/sort-comp
  // unitTest() {
  //   this.setState({
  //     price: 600000,
  //     monthly: 1000,
  //     priceStr: '600,000',
  //     down: 60000,
  //     downStr: '60,000',
  //   });
  // }

  getPrice() {
    fetch('/api/pricing/')
      .then((res) => res.json())
      .then((data) => this.setState({
        price: data[(Math.floor(Math.random() * 100))].price,
      }))
      .then(() => console.log(this.state.interest))
      .then(() => this.setState({
        monthly: Math.round(this.state.price / 360),
        priceStr: this.usdF(this.state.price),
        down: this.state.price * (this.state.interest / 100),
      }))
      .then(() => this.setState({
        downStr: this.usdF(this.state.down),
        morInsVal: Math.round(this.state.monthly * .05),
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

  // eslint-disable-next-line class-methods-use-this
  percentConv(val) {
    if (val[val.length - 1] === '%') {
      let temp = val.slice(0, -1);
      return temp / 100;
    }
  }

  handleChange(event) {
    event.preventDefault();
    console.log('eti: ', event.target.id);
    let eti = event.target.id;
    if (eti === 'interest') {
      let newDown = this.state.price * (event.target.value / 100)
      this.setState({
        down: newDown,
        [eti]: Number(event.target.value),
      }, console.log('this.state.price: ', this.state.price));
    } else {
      this.setState({
        [eti]: Number(event.target.value),
        interest: +((event.target.value / this.state.price) * 100).toFixed(2),
      }, console.log('this.state.price: ', this.state.price));
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    this.handleChange();
  }

  expand(name) {
    console.log('expand function says: ', name)
    this.setState({
      [name]: !this.state[name]
    }, () => console.log('Expanded? ', this.state[name]));
  }

  updateMC(val, child) {
    console.log('updating est monthly cost', val);
    let newMC = this.state.monthly + val;
    this.setState({
      monthly: (child === 'principal') ? val : newMC,
    });
  }

  render() {
    const { price, monthly, priceStr, interest, down, downStr, principalAndInterest, mortgageInsurance, propertyTaxes, homeInsurance, hoaFees, utilities, morInsVal } = this.state;
    const { usdF, handleChange, handleSubmit, expand, updateMC } = this;
    // const MyContext = React.createContext('calculating...');

    const FontDiv = styled.div`
      font-family: "Open Sans", Tahoma, Geneva, sans-serif;
      font-color: rgb(42, 42, 51);
      font-weight: 500;
      font-size: 10px;
      line-height: 18px;
      letter-spacing: 0px;
      text-transform: none;
      margin: 0px;
    `;

    const GrayDiv = styled.div`
      background: #f2f2f2;
    `;

    const CaratB = styled.button`
      color: #1277e1;
      font-weight: 350;
      font-stretch: ultra-expanded;
      font-size: 18px;
      background: white;
      border: 0px;
      align: right;
     `;

    const Footer = styled.div`
      font-size: 6px;
      font-weight: 100;
    `;

    // const Col = styled.div`
    //   column-count: 2;
    // `;

    // const OneCol = styled.div`
    //   column-span: 1;
    // `;

    return (
      <FontDiv>
        {/* <MyContext.Provider value={price}> */}
        <Header monthly={monthly} usdF={usdF} />
        <GrayDiv>
          <Principal price={price} monthly={monthly} usdF={usdF} priceStr={priceStr} down={down} interest={interest} downStr={downStr} handleChange={handleChange} handleSubmit={handleSubmit} expand={expand} expanded={principalAndInterest} updateMC={updateMC} CaratB={CaratB} />
        </GrayDiv>
        {/* </MyContext.Provider> */}
        <Mortgage updateMC={updateMC} morInsVal={morInsVal} expand={expand} expanded={mortgageInsurance} CaratB={CaratB} />
        <GrayDiv>
          <PropertyTaxes expand={expand} expanded={propertyTaxes} CaratB={CaratB} />
        </GrayDiv>
        <HomeInsurance price={price} expand={expand} expanded={homeInsurance} CaratB={CaratB} />
        <GrayDiv>
          <HOAFees expand={expand} expanded={hoaFees} CaratB={CaratB} />
        </GrayDiv>
        <Utilities expand={expand} expanded={utilities} CaratB={CaratB}/>
        <Footer>
          All calculations are estimates and provided for informational purposes only. Actual amounts may vary.
        </Footer>
      </FontDiv>
    );
  }
}

export default App;
