import React from 'react';
import styled from 'styled-components';
import HOAHead from './HOAHead.jsx';

const HOAFees = (props) => {

  const { handleChange, hoaFeeRate, usdF, Box, HiddenInput, GhostSymbol, LabelWrap, expand, expanded, CaratB } = props;

  const Des = styled.div`
    font-size: 8px;
    font-weight: 400;
  `;

  return (
    <div>
      <HOAHead hoaFeeRate={hoaFeeRate} usdF={usdF} expand={expand} expanded={expanded} CaratB={CaratB} />
      {expanded ? (
        <div>
          <form>
            <LabelWrap>
              <Box>
                <GhostSymbol> $ </GhostSymbol>
                <HiddenInput
                  id="hoaFeeRate"
                  type="text"
                  value={hoaFeeRate}
                  onChange={handleChange}
                />
                <GhostSymbol> /mo </GhostSymbol>
              </Box>
            </LabelWrap>
          </form>
          <Des>
            Some properties require monthly HOA dues to cover common amenities or services.
          </Des>
        </div>
      ) : (
      <div> </div>
      )}
    </div>
  );
};

export default HOAFees;
