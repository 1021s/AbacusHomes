import React from 'react';

const DownPayment = (props) => {
  const { usdF, price, monthly, down, downStr, interest, Box, HiddenInput, GhostSymbol, Column, OneColumn, updateMC } = props;

  return (
    <div>
      <div>
        Down Payment
      </div>
      {/* invalid when non-int are entered, or when higher than total homeprice */}
      <form>
        <Box>
          <GhostSymbol> $ </GhostSymbol>
          <HiddenInput
            type="text"
            id="downPayment"
            defaultValue={down}
            onChange={updateMC}
          />
        </Box>
      </form>
      <form>
        <Box>
          {/* invalid when non pos int, or greater than 100 */}
          <HiddenInput
            type="text"
            id="downPaymentPercent"
            defaultValue={interest}
          />
          <GhostSymbol> % </GhostSymbol>
        </Box>
      </form>
      <div><small>Mortgage insurance is usually required for down payments below 20%.</small></div>
    </div>
  );
};

export default DownPayment;
