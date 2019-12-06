import React from 'react';
import styled from 'styled-components';

const HIHead = (props) => {

  const { expand, CaratB, expanded } = props;

  return (
    <div onClick={() => expand('homeInsurance')}>
      <div> Home insurance </div>
      <div>{false ? `$${morInsVal}/mo` : 'Not included'}</div>
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

export default HIHead;
