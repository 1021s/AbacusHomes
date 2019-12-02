import React from 'react';

const Header = (props) => {
  const { usdF, price } = props;
  return (
    <div>
      <h3>Monthly Cost</h3>
      <hr />
      <p align="center">
        <font color="green">
          {usdF(price)}
        </font>
      </p>
      <p align="center">
        <font size="8px">
          Estimated monthly cost
        </font>
      </p>
    </div>
  );
};

export default Header;
