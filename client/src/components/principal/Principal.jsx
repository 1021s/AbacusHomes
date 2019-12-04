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
      test: ''
    };
  }

  render() {
    const { usdF, price, monthly, priceStr, interest, interestRate, down, downStr, handleChange, handleSubmit } = this.props;
    return (
      <div>
        <div><PandI usdF={usdF} price={price} monthly={monthly} /></div>
        <div><HomePrice usdF={usdF} price={price} priceStr={priceStr} handleChange={handleChange} handleSubmit={handleSubmit} /></div>
        <div><DownPayment usdF={usdF} price={price} down={down} interest={interest} downStr={downStr} /></div>
        <div><LoanProgram usdF={usdF} price={price} interestRate={interestRate} /></div>
      </div>
    );
  }
}

export default Principal;
