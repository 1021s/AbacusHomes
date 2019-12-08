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
      propTax: 1.01,
      hoaFeeRate: 0,
    };
    this.insCalc = this.insCalc.bind(this);
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
      .then(() => this.setState({
        monthly: Math.round(this.state.price / 360),
        priceStr: this.usdF(this.state.price),
        down: this.state.price * (this.state.interest / 100),
      }))
      .then(() => this.setState({
        downStr: this.usdF(this.state.down),
        morInsVal: Math.round(this.state.monthly * .05),
        homeInsuranceRate: this.insCalc(this.state.price)
      }))
      .catch((err) => console.log('fetch catch engaged...', err));
  }

  insCalc(p) {
    let segment = Math.floor(p / 100000);
    return segment * 244;
  }

  // eslint-disable-next-line class-methods-use-this
  usdF(num, withSym = true) {
    // let numStr = String(num);
    // let numArr = [...numStr];
    // // million comma
    // if (numArr.length > 6) { numArr.splice(numArr.length - 6, 0, ','); }
    // // thousand comma
    // numArr.splice(numArr.length - 3, 0, ',');
    // numArr.unshift('$');
    // return numArr.join('');
  //   withSym ?
  //     new Intl.NumberFormat('en-US',
  //       {
  //         style: 'currency',
  //         currency: 'USD',
  //         minimumFractionDigits: 0,
  //         maximumFractionDigits: 0,
  //       }).format(num)
  //   :
  //     new Intl.NumberFormat('en-US',
  //       {
  //         minimumFractionDigits: 0,
  //         maximumFractionDigits: 0,
  //       }).format(num)

    if (withSym === true) {
      return new Intl.NumberFormat('en-US',
        { 
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(num);
    } else {
      return new Intl.NumberFormat('en-US',
        { 
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(num);
    }
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
      let newDown = this.state.price * (event.target.value / 100);
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
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleChange();
  }

  expand(name) {
    this.setState({
      [name]: !this.state[name]
    });
  }

  updateMC(val, child) {
    console.log('updating est monthly cost', val);
    let newMC = this.state.monthly + val;
    this.setState({
      monthly: (child === 'principal') ? val : newMC,
    });
  }

  render() {
    const { propTax, price, monthly, priceStr, interest, down, downStr,
      principalAndInterest, mortgageInsurance, propertyTaxes, homeInsurance, homeInsuranceRate, 
      hoaFees, utilities, morInsVal, hoaFeeRate } = this.state;
    const { usdF, handleChange, handleSubmit, expand, updateMC } = this;
    // const MyContext = React.createContext('calculating...');

    const FontDiv = styled.div`
      ${'' /* display: flex;
      flex-direction: column; */}
      font-family: "Open Sans", Tahoma, Geneva, sans-serif;
      font-color: rgb(42, 42, 51);
      font-weight: 400;
      font-size: 8px;
      line-height: 16px;
      letter-spacing: 0px;
      text-transform: none;
      margin: 0px;
      border: .5px solid rgba(200, 200, 200, 0.4);
      box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    `;

    const GrayDiv = styled.div`
      background: #f2f2f2;
      padding: 6px 6px 6px 10px;
    `;

    const WhiteDiv = styled.div`
      padding: 6px 6px 6px 10px;
    `;

    const CaratB = styled.button`
      display: flex;
      margin-left: auto;
      right: 20px;
      color: #1277e1;
      font-weight: 350;
      font-stretch: ultra-expanded;
      font-size: 18px;
      background: transparent;
      border: 0px;
      align: right;
      cursor: pointer;
      outline: none;
      padding: 10px;
    `;

    const Footer = styled.div`
      font-size: 6px;
      font-weight: 100;
      margin-bottom: 1%;
      padding: 6px 6px 6px 10px;
    `;

    const LabelWrap = styled.label`
    `;

    const Box = styled.div`
      border: 1px solid rgba(200, 200, 200, 0.6);
      background: white;
      ${'' /* max-width: 110px; */}
      width: 98%;
      margin: 0px;
      padding: 0px;
      border-radius: 3px;
      box-shadow: inset 0 0 3px rgba(200, 200, 200, 0.5);
      ${LabelWrap}:hover & {
        border-color: rgb(0, 106, 255);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
      }
    `;

    const HiddenInput = styled.input`
      border: 0px;
      outline: none;
      width: 82%;
      font-weight: 300;
      font-size: 8px;
    `;

    const GhostSymbol = styled.span`
      color: rgba(200, 200, 200, 0.8);
      font-size: 8px;
      font-weight: 500;
      font-shadow: 1px rgba(211, 211, 211, 0.8)
      margin: 1px;
    `;

    return (
      <FontDiv>
        <Header monthly={monthly} usdF={usdF} />
        <GrayDiv>
          <Principal HiddenInput={HiddenInput} GhostSymbol={GhostSymbol} LabelWrap={LabelWrap} Box={Box} price={price} monthly={monthly} usdF={usdF} priceStr={priceStr} down={down} interest={interest} downStr={downStr} handleChange={handleChange} handleSubmit={handleSubmit} expand={expand} expanded={principalAndInterest} updateMC={updateMC} CaratB={CaratB} />
        </GrayDiv>
        <WhiteDiv>
          <Mortgage LabelWrap={LabelWrap} Box={Box} updateMC={updateMC} morInsVal={morInsVal} expand={expand} expanded={mortgageInsurance} CaratB={CaratB} />
        </WhiteDiv>
        <GrayDiv>
          <PropertyTaxes handleChange={handleChange} HiddenInput={HiddenInput} GhostSymbol={GhostSymbol} LabelWrap={LabelWrap} Box={Box} propTax={propTax} price={price} expand={expand} expanded={propertyTaxes} CaratB={CaratB} usdF={usdF} />
        </GrayDiv>
        <WhiteDiv>
          <HomeInsurance homeInsuranceRate={homeInsuranceRate} handleChange={handleChange}  HiddenInput={HiddenInput} GhostSymbol={GhostSymbol} LabelWrap={LabelWrap} Box={Box} price={price} expand={expand} expanded={homeInsurance} CaratB={CaratB} usdF={usdF} />
        </WhiteDiv>
        <GrayDiv>
          <HOAFees hoaFeeRate={hoaFeeRate} handleChange={handleChange} HiddenInput={HiddenInput} GhostSymbol={GhostSymbol} LabelWrap={LabelWrap} Box={Box} expand={expand} expanded={hoaFees} CaratB={CaratB} usdF={usdF} />
        </GrayDiv>
        <WhiteDiv>
          <Utilities expand={expand} expanded={utilities} CaratB={CaratB} />
        </WhiteDiv>
        <Footer>
          All calculations are estimates and provided for informational purposes only. Actual amounts may vary.
        </Footer>
      </FontDiv>
    );
  }
}

export default App;
