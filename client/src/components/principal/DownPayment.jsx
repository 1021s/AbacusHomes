import React from 'react';

const DownPayment = (props) => {
  const { usdF, price, monthly, down, downStr, interest } = props;

  return (
    <div>
      <div>
        Down Payment
      </div>
      <div>
      {/* invalid when non-int are entered, or when higher than total homeprice */}
        <input
          type="text"
          id="downPayment"
          defaultValue={downStr}
        />
        {/* invalid when non pos int, or greater than 100 */}
        <input
          type="text"
          id="downPaymentPercent"
          defaultValue={interest}
        />
      </div>
      <div><small>Mortgage insurance is usually required for down payments below 20%.</small></div>
    </div>
  );
};

export default DownPayment;

// import React from 'react';

// const DownPayment = (props) => (
//   <div>
//     DownPayment
//     <SectionTitle>
//         Down payment
//         <input
//           type="text"
//           id="downPayment"
//           defaultValue={usdF(price * 0.2)}
//         />
//         <input
//           type="text"
//           id="downPercent"
//           defaultValue="20%"
//         />
//       </SectionTitle>
//   </div>
// );

// export default DownPayment;