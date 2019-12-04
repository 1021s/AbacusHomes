import React from 'react';
import styled from 'styled-components';

const HomePrice = (props) => {
  const { usdF, price, monthly, priceStr, handleChange, handleSubmit } = props;

  const Box = styled.div`
    border: 2px solid rgba(200, 200, 200, 0.6);
    ${'' /* border-radius: 12px; */}
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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {/* minimum price === 5,000 
        box-color becomes red and "Invalid home price" appears below*/}
        Home price
        <Box>
          <GhostSymbol> $ </GhostSymbol>
          <HiddenInput
            type="text"
            id="price"
            // defaultValue={priceStr}
            onChange={handleChange}
            value={new Intl.NumberFormat('en').format(price)}
          />
        </Box>
      </label>
    </form>
  );
};

export default HomePrice;
