import React from 'react';
import styled from 'styled-components';

const HomePrice = (props) => {
  const { usdF, price, monthly, priceStr, handleChange, handleSubmit } = props;

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
