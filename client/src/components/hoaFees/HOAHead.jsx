import React from 'react';
import styled from 'styled-components';

const HOAHead = (props) => {

  const { expand, CaratB, expanded } = props;

  return (
    <div onClick={() => expand('hoaFees')}>
      <div> HOA fees </div>
      <div> $0/mo </div>
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

export default HOAHead;
