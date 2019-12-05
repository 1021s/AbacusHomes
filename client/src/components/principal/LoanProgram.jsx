import React from 'react';
import styled from 'styled-components'

const LoanProgram = (props) => {
  const { handleSelect, handleLocalChange, loanType, interestRate, Column, OneColumn, Box, HiddenInput, GhostSymbol, handleChange } = props;

  const Linky = styled.a`
    text-decoration: none;
    underline: none;
    font-size: 8px;
    font-weight: 300;
  `;

  return (
    <Column>
      <OneColumn>
        <form>
          <label>
            Loan program
            <select value={loanType} onChange={handleSelect}>
              <option value="3.692">30-year fixed</option>
              <option value="3.558">15-year fixed</option>
              <option value="3.097">5/1 ARM</option>
            </select>
          </label>
        </form>
        <div>
          <Linky href="https://bit.ly/2PbhngT">See current rates</Linky>
        </div>
      </OneColumn>

      <OneColumn>
        <div>Interest Rate</div>
        {loanType === "thirtyYear" && 
          <div>thirtyYear</div>}

        {loanType === "fifteenYear" &&
          <div>fifteenYear</div>}

        {loanType === "ARM" &&
          <div> ARM </div>}

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
