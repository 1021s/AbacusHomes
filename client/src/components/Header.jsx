import React from 'react';

const Header = (props) => {

  const priceFormatter = (num) => {
    let priceInUSD = [];
    let numStr = String(num);
    let tempArr = [...numStr];

    const threeDigits = (arr, n) => {
      let threeD = [];
      for (let i = n; i < arr.length; i++) {
        if (threeD.length === 3) {
          priceInUSD.push(threeD);
          return threeDigits(arr, n);
        } else {
          threeD.push(arr[i]);
          arr.splice(i, 1);
        }
      }
    };

    threeDigits(tempArr, 0);
    return '$' + priceInUSD.join(',') + '.00';
  };

  return (
    <div>
      <h3>Monthly Cost</h3>
      <hr />
      <p align="center">
        <font color="green">
          {priceFormatter(props.price)}
          <hr />
          {props.price}
        </font>
      </p>
    </div>
  );
};

export default Header;
