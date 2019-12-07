import React from 'react';
import styled from 'styled-components';
import HOAHead from './HOAHead.jsx';

const HOAFees = (props) => {

  const { Box, HiddenInput, GhostSymbol, LabelWrap, expand, expanded, CaratB } = props;

  const Des = styled.div`
    font-size: 8px;
    font-weight: 400;
  `;

	return (
    <div>
      <HOAHead expand={expand} expanded={expanded} CaratB={CaratB} />
      {expanded ? (
        <div>
          <form>
            <LabelWrap>
              <Box>
              <GhostSymbol> $ </GhostSymbol>
              <HiddenInput
                name="hoaFees"
                type="text"
                value="0"
                onChange={() => console.log('input rxd')} />
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
	)
}

export default HOAFees;
