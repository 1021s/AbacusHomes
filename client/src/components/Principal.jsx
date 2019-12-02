import React from 'react';

const Principal = (props) => {
  const { price, usdF } = props;
  return (
    <div>
      <div>
        Principal & Interest
        <p>{usdF(Math.round(price / 12))}
          /mo
        </p>
      </div>
      <div>
        Home price
        <input
          type="text"
          id="monthlyPrice"
          value={usdF(price)}
        />
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
