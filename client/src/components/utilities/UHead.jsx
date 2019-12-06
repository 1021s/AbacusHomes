import React from 'react';
import styled from 'styled-components';

const UHead = (props) => {

  const { includeUtilities, expand, CaratB, expanded, price } = props;
  const moPropTax = (price * 0.0101) / 12;

  return (
    <div onClick={() => expand('utilities')}>
      <div> Utilities </div>
      <div> {includeUtilities ? `$0/mo` : 'Not included'} </div>
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

export default UHead;
