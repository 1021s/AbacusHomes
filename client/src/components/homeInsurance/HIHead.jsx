import React from 'react';
import styled from 'styled-components';

const HIHead = (props) => {

  const { expand, CaratB, expanded } = props;

  const Head = styled.div`
    font-size: 9px;
    font-weight: 600;
  `;

  const Flex = styled.div`
    display: flex;
  `;

  const Right = styled.div`
    margin-left: auto;
  `;

  return (
    <Flex onClick={() => expand('homeInsurance')}>
      <div>
        <Head> Home insurance </Head>
        <div> $805/mo </div>
      </div>
      <Right>
        {expanded ? (
            <CaratB>
              <img src="https://img.icons8.com/color/13/000000/collapse-arrow.png" alt="^" />
            </CaratB>
        ) : (
          <CaratB>
            <img src="https://img.icons8.com/officexs/12/000000/expand-arrow.png" alt="v" />
          </CaratB>
        )}
      </Right>
    </Flex>
  );
};

export default HIHead;
