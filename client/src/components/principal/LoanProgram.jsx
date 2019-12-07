import React from 'react';
import styled from 'styled-components';

const LoanProgram = (props) => {
  const { LabelWrap, handleSelect, loan, Box, HiddenInput, GhostSymbol, handleChange } = props;

  const Linky = styled.a`
    text-decoration: none;
    underline: none;
    font-size: 8px;
    font-weight: 300;
  `;

  const Selw = styled.select`
    background: white;
    font-size: 8px;
    font-weight: 300;
  `;

  const Flox = styled.div`
    display: flex;
  `;

  return (
    <div>
      <div>
        <div>
          <form>
            <label>
              Loan program
              <Selw value={loan} onChange={handleSelect} style={{ cursor: 'pointer' }}>
                <option value="3.702">30-year fixed</option>
                <option value="3.563">15-year fixed</option>
                <option value="3.134">5/1 ARM</option>
              </Selw>
            </label>
          </form>
        </div>

        <div>
          {/* later functionality: invalid with non-pos-int or, >100 
          three decimal points...rounded */}
          <form>
            <LabelWrap>
              Interest Rate
              <Box>
                <HiddenInput
                  type="text"
                  id="interestRate"
                  value={loan}
                  onChange={handleSelect}
                />
                <GhostSymbol> % </GhostSymbol>
              </Box>
            </LabelWrap>
          </form>
        </div>
      </div>

      <div>
        {loan === "3.134" &&
          <div> 5/1 ARM rates (and monthly payment) may change after the initial fixed-rate period. </div>}
        <Linky href="https://bit.ly/2DVghkg">See current rates</Linky>
      </div>

    </div>
  );
};

export default LoanProgram;
