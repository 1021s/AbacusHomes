import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
  const { usdF, monthly } = props;

  const GreenCost = styled.h4`
    text-align: center;
    color: rgb(23, 176, 54);
    font-size: 14px;
    margin: 0px;
  `;

  const Header = styled.div`
    font-size: 14px;
    font-stretch: expanded;
  `;

  const SubHeader = styled.div`
    text-align: center;
    font-size: 8px;
    margin: 0px;
    font-weight: 500;
  `;

  return (
    <div>
      <Header>Monthly Cost</Header>
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
