import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
  const { usdF, monthly } = props;

  const GreenCost = styled.h4`
    text-align: center;
    color: rgb(23, 176, 54);
    font-size: 16px;
    margin: 0px;
  `;

  const SubHeader = styled.div`
    text-align: center;
    font-size: 8px;
    margin: 0px;
    font-weight: 450;
  `;

  return (
    <div>
      <h3>Monthly Cost</h3>
      <hr />
      <GreenCost>
          {usdF(monthly)}
      </GreenCost>
      <SubHeader>
          Estimated monthly cost
      </SubHeader>
    </div>
  );
};

export default Header;
