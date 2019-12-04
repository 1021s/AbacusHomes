import React from 'react';

const Header = (props) => {
  const { usdF, monthly } = props;
  return (
    <div>
      <h3>Monthly Cost</h3>
      <hr />
      <p align="center">
        <font color="green">
          {usdF(monthly)}
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
