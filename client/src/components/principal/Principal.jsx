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
    const { usdF, price, monthly, priceStr, interest, interestRate, down, downStr, handleChange, handleSubmit, expand, expanded } = this.props;

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
        <div><PandI usdF={usdF} price={price} monthly={monthly} expand={expand} expanded={expanded}/></div>

        {expanded ? (
          <div>
            <HomePrice usdF={usdF} price={price} priceStr={priceStr} handleChange={handleChange} handleSubmit={handleSubmit} 
            Box={Box} HiddenInput={HiddenInput} GhostSymbol={GhostSymbol}/>
            <DownPayment usdF={usdF} price={price} down={down} interest={interest} downStr={downStr} 
              Box={Box} HiddenInput={HiddenInput} GhostSymbol={GhostSymbol} Column={Column} OneColumn={OneColumn} />
            <LoanProgram usdF={usdF} price={price} interestRate={interestRate} Column={Column} OneColumn={OneColumn} Box={Box} HiddenInput={HiddenInput} GhostSymbol={GhostSymbol} />
          </div>
        ) : (
          <div> </div>
        )}

      </div>
    );
  }
}

export default Principal;
