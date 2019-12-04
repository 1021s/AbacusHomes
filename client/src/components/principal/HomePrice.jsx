import React from 'react';

const HomePrice = (props) => {
  const { usdF, price, monthly, priceStr } = props;
  return (
    <div>
      <div>Home price</div>
      <input
        type="text"
        id="monthlyPrice"
        defaultValue={priceStr}
      />
    </div>
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