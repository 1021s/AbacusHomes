import React from 'react';
import styled from 'styled-components';

const MIHead = (props) => {

  const { expand, CaratB, morInsVal, includeInsurance, expanded } = props;

  return (
    <div onClick={() => expand('mortgageInsurance')}>
      <div> Mortgage insurance </div>
      <div>{includeInsurance ? `$${morInsVal}/mo` : 'Not included'}</div>
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
  )
}

export default MIHead;
