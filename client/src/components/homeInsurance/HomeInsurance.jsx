import React from 'react';
import styled from 'styled-components';
import HIHead from './HIHead.jsx';

const HomeInsurance = (props) => {

  const {
    homeInsuranceRate, handleChange, usdF, Box, HiddenInput, GhostSymbol, LabelWrap, expand, CaratB, expanded
  } = props;

  const Des = styled.div`
    font-size: 8px;
    font-weight: 300;
    top-padding: 8px;
  `;

  return (
    <div>
      <HIHead homeInsuranceRate={homeInsuranceRate} usdF={usdF} expanded={expanded} expand={expand} CaratB={CaratB} />
      {expanded ? (
        <div>
          <form>
            <LabelWrap>
              <Box>
                <GhostSymbol> $ </GhostSymbol>
                <HiddenInput
                  id="homeInsuranceRate"
                  type="text"
                  value={homeInsuranceRate}
                  onChange={handleChange}
                />
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
  );
};

export default HomeInsurance;
