import React from 'react';

const DownPayment = (props) => {
  const { usdF, price, monthly, down, downStr, interest } = props;

  return (
    <div>
      <div>
        Down Payment
      </div>
      <div>
        <input
          type="text"
          id="downPayment"
          defaultValue={downStr}
        />
        <input
          type="text"
          id="downPaymentPercent"
          defaultValue={interest}
        />
      </div>
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
