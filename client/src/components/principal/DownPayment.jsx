import React from 'react';

const DownPayment = (props) => {
  const { usdF, price, monthly, down, downStr, interest, Box, HiddenInput, GhostSymbol, Column, OneColumn } = props;

  return (
    <div>
      <div>
        Down Payment
      </div>
      {/* invalid when non-int are entered, or when higher than total homeprice */}
      <Box>
        <GhostSymbol> $ </GhostSymbol>
        <HiddenInput
          type="text"
          id="downPayment"
          defaultValue={new Intl.NumberFormat('en').format(down)}
        />
      </Box>
      <Box>
        {/* invalid when non pos int, or greater than 100 */}
        <HiddenInput
          type="text"
          id="downPaymentPercent"
          defaultValue={new Intl.NumberFormat('en').format(interest)}
        />
        <GhostSymbol> % </GhostSymbol>
      </Box>
      <div><small>Mortgage insurance is usually required for down payments below 20%.</small></div>
    </div>
  );
};

export default DownPayment;
