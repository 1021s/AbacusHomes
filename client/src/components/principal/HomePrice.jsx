import React from 'react';

const HomePrice = (props) => {
  const { usdF, price, monthly, priceStr, handleChange } = props;

  return (
    <form>
      <label>
        Home price
        <input
          type="text"
          id="monthlyPrice"
          defaultValue={priceStr}
          onChange={() => handleChange()}
          // value={price}
        />
      </label>
    </form>
  );
};

export default HomePrice;

    /* <SectionTitle>
        Home price
        <span>
          <label>$</label>
          <input
            type="text"
            id="monthlyPrice"
            defaultValue={usdF(price)}
          />
        </span>
      </SectionTitle> */