import React from 'react';
import styled from 'styled-components';

const HomePrice = (props) => {
  const { LabelWrap, usdF, price, monthly, priceStr, handleChange, handleSubmit,
    Box, GhostSymbol, HiddenInput } = props;

  return (
    <form onSubmit={handleSubmit}>
      <LabelWrap>
        {/* minimum price === 5,000 
        box-color becomes red and "Invalid home price" appears below*/}
        <span style={{ fontWeight: 600 }}>Home price</span>
        <Box>
          <GhostSymbol> $ </GhostSymbol>
          <HiddenInput
            type="text"
            id="price"
            // defaultValue={priceStr}
            onChange={handleChange}
            value={usdF(price, 'no')}
          />
        </Box>
      </LabelWrap>
    </form>
  );
};

export default HomePrice;
