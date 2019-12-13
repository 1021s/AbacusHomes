import React from 'react';
import styled from 'styled-components';
import Arrow from '../common/Arrow.jsx';

const PandI = (props) => {

  const { CaratB, usdF, price, monthly, expand, expanded, pAndI } = props;

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

  const Tweak = styled.div`
  margin-left: 20px;
`;

  const Right = styled.div`
    margin-left: auto;
  `;

  return (
    <Flex
      onClick={() => expand('principalAndInterest')}
      style={{ cursor: 'pointer' }}
    >
      <div>
        <Head>
          Principal & Interest
        </Head>
        <SubH>
          {usdF(pAndI)}
          /mo
        </SubH>
      </div>
      <Right>
        {expanded ? (
          <CaratB>
            <img
              src="https://img.icons8.com/small/16/1277e1/expand-arrow.png"
              alt="v"
              style={{ transform: 'rotate(180deg)' }}
            />
            {/* <img src="https://img.icons8.com/color/13/000000/collapse-arrow.png" alt="^" /> */}
          </CaratB>
        ) : (
          <CaratB>
            <img src="https://img.icons8.com/small/16/1277e1/expand-arrow.png" alt="v" />
            {/* <img src="https://img.icons8.com/officexs/12/000000/expand-arrow.png" alt="v" /> */}
          </CaratB>
        )}
      </Right>
    </Flex>
  );
};

export default PandI;
