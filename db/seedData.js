const faker = require('faker');
const db = require('./index.js');

// '.seed(xxx)' ensures the same data is "randomly" generated each time
// faker.seed(123);
// var test1 = faker.random.number();
// faker.seed(123);
// var test2 = faker.random.number();

// adds complication of having to convert back and forth from string
// const ff = faker.finance.amount({'min': 10500, 'max': 55555500, 'symbol': '$'});

const pricer = () => faker.random.number({
  min: 10500,
  max: 10500500,
  precision: 500,
});

const paddedString = (input) => {
  let i = String(input);
  if (i.length === 1) {
    return `00${i}`;
  }
  if (i.length === 2) {
    return `0${i}`;
  }
  return i;
};

const pricingArr = [];

const generator = () => {
  let ticker = 101;
  while (ticker > 0) {
    let tempObj = {};
    tempObj.price = pricer();
    tempObj.Listing_id = paddedString(ticker);
    pricingArr.push(tempObj);
    ticker--;
  }
};

module.exports = {
  // test1: test1,
  // test2: test2,
  // ff: ff,
  // pricer: pricer,
  pricingArr: pricingArr,
  generator: generator,
};
