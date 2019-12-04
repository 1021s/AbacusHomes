import React from 'react';

const PandI = (props) => {
  const { usdF, price, monthly } = props;
  return (
    <div>
      <div>
        Principal & Interest
      </div>
      <div>
        {usdF(Math.round(price / 12))}
        /mo
      </div>
    </div>
  );
};

export default PandI;
