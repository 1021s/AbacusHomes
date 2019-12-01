import React from 'react';

const Header = (props) => {

  const priceFormatter = (num) => {
    let numStr = String(num);
    let numArr = [...numStr];
    //million comma
    if (numArr.length > 6) { numArr.splice(numArr.length-6, 0, ',') };
    //thousand comma
    numArr.splice(numArr.length-3, 0, ',');
    numArr.unshift('$');
    return numArr.join('');
  };

  return (
    <div>
      <h3>Monthly Cost</h3>
      <hr />
      <p align="center">
        <font color="green">
          {priceFormatter(props.price)}
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
