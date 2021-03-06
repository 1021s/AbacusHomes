import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
  const { usdF, monthly } = props;

  const GreenCost = styled.h4`
    text-align: center;
    color: rgb(23, 176, 54);
    font-size: 14px;
    margin: 0px;
    text-shadow: 0px .4px 2px rgba(2,48,0,0.2);
    padding: 4px;
  `;

  const Header = styled.div`
    font-size: 14px;
    font-stretch: expanded;
    text-shadow: 0px 1px 5px rgba(176,176,176,0.67);
    padding: 6px 6px 6px 7px;
  `;

  const SubHeader = styled.div`
    text-align: center;
    font-size: 8px;
    margin: 0px;
    font-weight: 500;
  `;

  return (
    <div>
      <Header>
        Monthly Cost
      </Header>
      <hr style={{
        all: 'initials',
        border: '0.2px solid rgb(200, 200, 200)',
        margin: '4px',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.085)',
      }}
      />
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
