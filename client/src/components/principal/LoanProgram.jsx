import React from 'react';
import styled from 'styled-components';

const LoanProgram = (props) => {
  const { handleSelect, loan, Column, OneColumn, Box, HiddenInput, GhostSymbol, handleChange } = props;

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
            <select value={loan} onChange={handleSelect}>
              <option value="3.692">30-year fixed</option>
              <option value="3.592">15-year fixed</option>
              <option value="3.058">5/1 ARM</option>
            </select>
          </label>
        </form>
        <div>
          <Linky href="https://bit.ly/2PbhngT">See current rates</Linky>
        </div>
      </OneColumn>

      <OneColumn>
        <div>Interest Rate</div>
        {loan === "3.692" && 
          <div>thirtyYear</div>}

        {loan === "3.592" &&
          <div>fifteenYear</div>}

        {loan === "3.058" &&
          <div> 5/1 ARM </div>}

        {/* invalid with non-pos-int or, >100 
        three decimal points...rounded */}
        <Box>
          <HiddenInput
            type="text"
            id="interestRate"
            value={loan}
            onChange={handleChange}
          />
          <GhostSymbol> % </GhostSymbol>
        </Box>
      </OneColumn>
    </Column>
  );
};

export default LoanProgram;
