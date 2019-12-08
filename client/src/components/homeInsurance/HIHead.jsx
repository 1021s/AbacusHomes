import React from 'react';
import styled from 'styled-components';

const HIHead = (props) => {

  const { homeInsuranceRate, usdF, expand, CaratB, expanded } = props;

  const Head = styled.div`
    font-size: 9px;
    font-weight: 600;
    text-shadow: 0px 1.2px 6px rgba(176,176,176,0.75);
  `;

  const Flex = styled.div`
    display: flex;
  `;

  const Right = styled.div`
    margin-left: auto;
  `;

  return (
    <Flex onClick={() => expand('homeInsurance')} style={{ cursor: 'pointer' }}>
      <div>
        <Head> Home insurance </Head>
        <div> {usdF(homeInsuranceRate / 12)}/mo </div>
      </div>
      <Right>
        {expanded ? (
            <CaratB>
              <img
                src="https://img.icons8.com/small/16/1277e1/expand-arrow.png"
                alt="v"
                style={{ transform: 'rotate(180deg)' }}
              />
            </CaratB>
        ) : (
          <CaratB>
            <img src="https://img.icons8.com/small/16/1277e1/expand-arrow.png" alt="v" />
          </CaratB>
        )}
      </Right>
    </Flex>
  );
};

export default HIHead;
