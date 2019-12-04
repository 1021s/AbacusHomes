import React from 'react';
import styled from 'styled-components'

const LoanProgram = (props) => {
  const { interestRate, Column, OneColumn, Box, HiddenInput, GhostSymbol, handleChange } = props;

  const Linky = styled.a`
    text-decoration: none;
    underline: none;
    font-size: 8px;
    font-weight: 300;
  `;

  return (
    <Column>
      <OneColumn>
        <div>Loan program</div>
        <select>
          <option value="thirtyYear">30-year fixed</option>
          <option value="fifteenYear">15-year fixed</option>
          <option value="ARM">5/1 ARM</option>
        </select>
        <div>
          <Linky href="https://bit.ly/2PbhngT">See current rates</Linky>
        </div>
      </OneColumn>
      <OneColumn>
        <div>Interest Rate</div>
        {/* invalid with non-pos-int or, >100 
        three decimal points...rounded */}
        <Box>
          <HiddenInput
            type="text"
            id="interestRate"
            defaultValue={interestRate}
            onChange={handleChange}
          />
          <GhostSymbol> % </GhostSymbol>
        </Box>
      </OneColumn>
    </Column>
  );
};

export default LoanProgram;
