import React from 'react';
import styled from 'styled-components';

const PTHead = (props) => {

  const { propTax, usdF, expand, CaratB, expanded, price } = props;

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

  const taxPerMo = usdF((price * (propTax / 100)) / 12);

  return (
    <Flex onClick={() => expand('propertyTaxes')} style={{ cursor: 'pointer' }}>
      <div>
        <Head> Property taxes </Head>
        <div>
          {taxPerMo}
          /mo
        </div>
      </div>
      <Right>
        {expanded ? (
          <img
            src="https://img.icons8.com/small/16/1277e1/expand-arrow.png"
            alt="v"
            style={{ transform: 'rotate(180deg)' }}
          />
        ) : (
          <CaratB>
          <img src="https://img.icons8.com/small/16/1277e1/expand-arrow.png" alt="v" />
          </CaratB>
        )}
      </Right>
    </Flex>
  );
};

export default PTHead;
