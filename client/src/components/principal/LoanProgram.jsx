import React from 'react';
import styled from 'styled-components';

const LoanProgram = (props) => {
  const { CaratB, LabelWrap, handleSelect, loan, Box, HiddenInput, GhostSymbol, handleChange } = props;

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
    border: 0px;
    outline: none;
    width: 140px;
  `;

  const Flox = styled.div`
    display: flex;
  `;

  const CustImg = styled.img`
    margin-left: auto;
    padding: 14px;
  `;

  const Col = styled.div`
    display: grid;
    font-weight: 600;
  `;

  const C1a = styled.div`
    grid-column: 1 / 2;
    grid-row: 1;
  `;

  const C2a = styled.div`
    grid-column: 2 / 2;
    grid-row: 1;
  `;

  const C1b = styled.div`
    grid-column: 1 / 2;
    grid-row: 2;
  `;

  const C2b = styled.div`
    grid-column: 2 / 2;
    grid-row: 2;
  `;

  return (
    <Col>

      <Flox>
        <C1a> Loan program </C1a>
      </Flox>
      <C1b>
      <Flox>
        <form>
          <LabelWrap>
            <Box>
              <Selw value={loan} onChange={handleSelect} style={{ cursor: 'pointer' }}>
                <option value="3.702">30-year fixed </option>
                <option value="3.563">15-year fixed</option>
                <option value="3.134">5/1 ARM</option>
              </Selw>
                {/* <CustImg src="https://img.icons8.com/small/16/1277e1/expand-arrow.png" alt="v" /> */}
            </Box>
          </LabelWrap>
        </form>
        </Flox>
      </C1b>

          {/* later functionality: invalid with non-pos-int or, >100 
          three decimal points...rounded */}
          <C2a> Interest Rate </C2a>
          <C2b>
            <form>
              <LabelWrap>
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
          </C2b>
      

      <div>
        {loan === "3.134" &&
          <div> 5/1 ARM rates (and monthly payment) may change after the initial fixed-rate period. </div>}
        <Linky href="https://bit.ly/2DVghkg">See current rates</Linky>
      </div>

    </Col>
  );
};

export default LoanProgram;
