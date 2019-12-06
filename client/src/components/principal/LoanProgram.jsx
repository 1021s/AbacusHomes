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
    <div>
      <Column>
        <OneColumn>
          <form>
            <label>
              Loan program
              <select value={loan} onChange={handleSelect}>
                <option value="3.702">30-year fixed</option>
                <option value="3.563">15-year fixed</option>
                <option value="3.134">5/1 ARM</option>
              </select>
            </label>
          </form>
        </OneColumn>

        <OneColumn>
          {/* later functionality: invalid with non-pos-int or, >100 
          three decimal points...rounded */}
          <Box>
            <HiddenInput
              type="text"
              id="interestRate"
              value={loan}
              onChange={handleSelect}
            />
            <GhostSymbol> % </GhostSymbol>
          </Box>
        </OneColumn>
      </Column>

      <div>
        {loan === "3.134" &&
          <div> 5/1 ARM rates (and monthly payment) may change after the initial fixed-rate period. </div>}
        <Linky href="https://bit.ly/2PbhngT">See current rates</Linky>
      </div>

    </div>
  );
};

export default LoanProgram;
