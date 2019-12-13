import React from 'react';
import styled from 'styled-components';

const MIHead = (props) => {

  const { expand, CaratB, morInsVal, includeInsurance, expanded } = props;

  const Head = styled.div`
    font-size: 11px;
    font-weight: 600;
    text-shadow: 0px 1.2px 6px rgba(176,176,176,0.75);
  `;

  const SubH = styled.div`
    font-size: 10px;
    font-weight: 400;
  `;

  const Flex = styled.div`
    display: flex;
  `;

  const Right = styled.div`
    margin-left: auto;
  `;

  return (
    <Flex onClick={() => expand('mortgageInsurance')} style={{ cursor: 'pointer' }}>
      <div>
        <Head> Mortgage insurance </Head>
        <SubH>{includeInsurance ? `$${morInsVal}/mo` : 'Not included'}</SubH>
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

export default MIHead;
