import React from 'react';

const HomePrice = (props) => {
  const { usdF, price, monthly, priceStr, handleChange, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Home price
        <input
          type="text"
          id="price"
          // defaultValue={priceStr}
          onChange={handleChange}
          value={usdF(price)}
        />
      </label>
    </form>
  );
};

export default HomePrice;
