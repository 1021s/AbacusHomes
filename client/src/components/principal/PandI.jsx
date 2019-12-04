import React from 'react';
import styled from 'styled-components';

const PandI = (props) => {

  const animate = () => {
    
  }

  const Column = styled.div`
    column-count: 2;
  `;

  const OneColumn = styled.div`
    column-span: 1;
  `;

  const CaratB = styled.button`
    color: #1277e1;
    font-weight: 350;
    font-stretch: ultra-expanded;
    font-size: 18px;
    background: white;
    border: 0px;
  `;

  const { usdF, price, monthly, expand, expanded } = props;
  return (
    <Column>
      <OneColumn>
        <div>
          Principal & Interest
        </div>
        <div>
          {usdF(Math.round(price / 12))}
          /mo
        </div>
      </OneColumn>
      <OneColumn>
        {expanded ? (
          <CaratB onClick={expand}> v </CaratB>
        ) : (
          <CaratB onClick={expand}> ^ </CaratB>
        )}
      </OneColumn>
    </Column>
  );
};

export default PandI;
