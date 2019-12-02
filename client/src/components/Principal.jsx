import React from 'react';
import styled from 'styled-components';

const Principal = (props) => {
  const { price, usdF } = props;

  const Head = styled.h1`
    background: red;
  `

  return (
    <div>
      <Head>
        Principal & Interest
        <p>
          {usdF(Math.round(price / 12))}
          /mo
        </p>
      </Head>
      <div>
        Home price
        <span >
          <label>$</label>
          <input
            type="text"
            id="monthlyPrice"
            value={usdF(price)}
          />
        </span>
      </div>
      <div>
        Down payment
        <input />
        <input />
      </div>
      <div>
        Loan program
        <input />
      </div>
      <div>
        Interest rate
        <input />
      </div>
    </div>
  );
};

export default Principal;
