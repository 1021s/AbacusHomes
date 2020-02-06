import React from 'react';
import styled from 'styled-components';

const HomePrice = (props) => {
  const {
    LabelWrap, price, handleChange, handleSubmit,
    Box, GhostSymbol, HiddenInput
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <LabelWrap>
        <span style={{ fontWeight: 600 }}>Home price</span>
        <Box>
          <GhostSymbol> $ </GhostSymbol>
          <HiddenInput
            type="text"
            id="price"
            onChange={handleChange}
            value={price}
          />
        </Box>
      </LabelWrap>
    </form>
  );
};

export default HomePrice;
