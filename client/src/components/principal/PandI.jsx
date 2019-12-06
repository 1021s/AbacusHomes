import React from 'react';
import styled from 'styled-components';

const PandI = (props) => {

  const { CaratB, usdF, price, monthly, expand, expanded, pAndI } = props;
  return (
    <div onClick={() => expand('principalAndInterest')}>
      <div>
        <div>
          Principal & Interest
        </div>
        <div>
          ${pAndI}
          /mo
        </div>
      </div>
      <div>
        {expanded ? (
          <CaratB>
            <img src="https://img.icons8.com/color/13/000000/collapse-arrow.png" alt="^" />
          </CaratB>
        ) : (
          <CaratB>
            <img src="https://img.icons8.com/officexs/12/000000/expand-arrow.png" alt="v" />
          </CaratB>
        )}
      </div>
    </div>
  )
}

export default PandI;

