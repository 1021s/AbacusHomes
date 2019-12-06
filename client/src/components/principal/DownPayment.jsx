import React from 'react';
import styled from 'styled-components';

const DownPayment = (props) => {
  const { LabelWrap, usdF, price, monthly, down, downStr, interest, Box, HiddenInput, GhostSymbol, updateMC, handleChange } = props;

  return (
    <div>
      <div>
        Down Payment
      </div>
      {/* invalid when non-int are entered, or when higher than total homeprice */}
      <form>
        <LabelWrap>
          <Box>
            <GhostSymbol> $ </GhostSymbol>
            <HiddenInput
              type="text"
              id="down"
              value={down}
              onChange={handleChange}
            />
          </Box>
        </LabelWrap>
      </form>
      <form>
        <LabelWrap>
          <Box>
            {/* invalid when non pos int, or greater than 100 */}
            <HiddenInput
              type="text"
              id="interest"
              value={interest}
              onChange={handleChange}
            />
            <GhostSymbol> % </GhostSymbol>
          </Box>
        </LabelWrap>
      </form>
      <div><small>Mortgage insurance is usually required for down payments below 20%.</small></div>
    </div>
  );
};

export default DownPayment;
