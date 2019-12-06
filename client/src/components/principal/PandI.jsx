import React from 'react';
import styled from 'styled-components';

const PandI = (props) => {

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
    align: right;
  `;

  const { usdF, price, monthly, expand, expanded, pAndI } = props;
  return (
    <Column>
      <OneColumn>
        <div>
          Principal & Interest
        </div>
        <div>
          {pAndI}
          /mo
        </div>
      </OneColumn>
      <OneColumn>
        {expanded ? (
          <CaratB onClick={expand}>
            <img src="https://img.icons8.com/color/13/000000/collapse-arrow.png" alt="^" />
          </CaratB>
        ) : (
          <CaratB onClick={expand}>
            <img src="https://img.icons8.com/officexs/12/000000/expand-arrow.png" alt="v" />
          </CaratB>
        )}
      </OneColumn>
    </Column>
  );
};

export default PandI;
