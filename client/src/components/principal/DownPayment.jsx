import React from 'react';
import styled from 'styled-components';

const DownPayment = (props) => {
  const { LabelWrap, usdF, price, monthly, down, downStr, interest, Box, HiddenInput, GhostSymbol, updateMC, handleChange } = props;

  const Flox = styled.div`
    display: flex;
  `;

  const LineUp = styled.div`
    flex: 0 0 auto;
  `;

  const Col = styled.div`
    display: grid;
    font-weight: 600;
  `;

  const C1a = styled.div`
    grid-column: 1 / 2;
    grid-row: 1;
    width: 160px;
  `;

  const C2a = styled.div`
    grid-column: 2 / 2;
    grid-row: 1;
    display: flex;
    margin-left: auto;
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
    <div>
      <div style={{ fontWeight: 600 }}>
        Down Payment
      </div>
        {/* invalid when non-int are entered, or when higher than total homeprice */}
      <Flox>
        <C1a>
        <form>
          <LabelWrap>
            <Box>
              <GhostSymbol> $ </GhostSymbol>
              <HiddenInput
                type="text"
                id="down"
                // value={usdF(down, 'no')}
                value={down}
                onChange={handleChange}
              />
            </Box>
          </LabelWrap>
        </form>
        </C1a>
        <C2a>
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
        </C2a>
      </Flox>
      <div><small>Mortgage insurance is usually required for down payments below 20%.</small></div>
    </div>
  );
};

export default DownPayment;
