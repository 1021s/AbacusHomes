import React from 'react';
import styled from 'styled-components';
import PandI from './PandI';
import HomePrice from './HomePrice';
import DownPayment from './DownPayment';
import LoanProgram from './LoanProgram';

class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loan: '3.702',
      pAndI: this.calcPandI(3.702, 360),
    };
    this.calcPandI = this.calcPandI.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  calcPandI(int, len) {
    let loanAmount = this.props.price - this.props.down;
    let mInt = (int / 100) / 12;
    let discountFactor = (Math.pow((1 + mInt), len) - 1) / (mInt * Math.pow((1 + mInt), len));
    let perMonth = loanAmount / discountFactor;
    let roundedPerMonth = Math.round(perMonth);
    return roundedPerMonth;
  }

  handleSelect(e) {
    // e.preventDefault();
    let loanLength = 360;
    console.log('handleSelect: ', e.target.value);
    if (e.target.value === '3.702') {
      loanLength = 360;
    }
    if (e.target.value === '3.563') {
      loanLength = 180;
    }
    if (e.target.value === '3.134') {
      loanLength = 360;
    }
    console.log('loanLength: ', loanLength);
    let newPandI = this.calcPandI(e.target.value, loanLength);
    // this.props.updateMC(newPandI, 'principal');
    this.setState({
      loan: e.target.value,
      pAndI: newPandI,
    }, () => {
      console.log('handleSelect set pAndI to: ', this.state.pAndI);
    });
    // this.props.updateMC(this.state.pAndI, 'principal');
    // () => console.log('handleSelect set pAndI to: ', this.state.pAndI)
    // () => this.props.updateMC(this.state.pAndI, 'principal')
  }

  render() {
    const { usdF, price, monthly, priceStr, interest, down, downStr, handleChange, handleSubmit, expand, expanded, updateMC } = this.props;
    const { pAndI, loan } = this.state;
    const { handleSelect } = this;

    const Box = styled.div`
      border: 2px solid rgba(200, 200, 200, 0.6);
      max-width: 150px;
      margin: 0px;
      padding: 0px;
    `;

    const HiddenInput = styled.input`
      border: 0px;
    `;

    const GhostSymbol = styled.span`
      color: rgba(200, 200, 200, 0.8);
      font-size: 10px;
      font-weight: 500;
      font-shadow: 1px rgba(211, 211, 211, 0.8)
      padding: 5px;
      margin: 5px;
    `;

    const Column = styled.div`
      column-count: 2;
    `;

    const OneColumn = styled.div`
      column-span: 1;
    `;

    return (
      <div>
        <div><PandI pAndI={pAndI} expand={expand} expanded={expanded} /></div>
        {expanded ? (
          <div>
            <HomePrice usdF={usdF} price={price} priceStr={priceStr} handleChange={handleChange} handleSubmit={handleSubmit} 
            Box={Box} HiddenInput={HiddenInput} GhostSymbol={GhostSymbol} updateMC={updateMC} />
            <DownPayment usdF={usdF} price={price} down={down} interest={interest} downStr={downStr} handleChange={handleChange}
              Box={Box} HiddenInput={HiddenInput} GhostSymbol={GhostSymbol} Column={Column} OneColumn={OneColumn} />
            <LoanProgram loan={loan} usdF={usdF} price={price} Column={Column} OneColumn={OneColumn} 
            handleChange={handleChange} Box={Box} HiddenInput={HiddenInput} GhostSymbol={GhostSymbol} handleSelect={handleSelect} />
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    );
  }
}

export default Principal;
