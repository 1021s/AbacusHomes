import React from 'react';
import styled from 'styled-components';
import HIHead from './HIHead.jsx';

const HomeInsurance = (props) => {

    const { Box, HiddenInput, GhostSymbol, LabelWrap, price, expand, CaratB, morInsVal, expanded } = props;

    const Des = styled.div`
      font-size: 8px;
      font-weight: 300;
    `;

    return (
      <div>
        <HIHead expanded={expanded} expand={expand} CaratB={CaratB} />
        {expanded ? (
          <div>
            <form>
              <LabelWrap>
                <Box>
                  <GhostSymbol> % </GhostSymbol>
                  <HiddenInput
                    name="homeInsurance"
                    type="text"
                    value="9,660"
                    onChange={() => console.log('input rxd')} />
                    <GhostSymbol> /year </GhostSymbol>
                </Box>
              </LabelWrap>
            </form>
            <Des>
              Most lenders require homeowners insurance, which protects your home and property.
            </Des>
          </div>
        ) : (
        <div> </div>
        )}
      </div>
    )
}

export default HomeInsurance;
