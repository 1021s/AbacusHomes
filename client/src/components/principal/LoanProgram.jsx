import React from 'react';
import styled from 'styled-components'

const LoanProgram = (props) => {
  const { interestRate } = props;

  const Column = styled.div`
    column-count: 2;
  `;

  const OneColumn = styled.div`
    column-span: 1;
  `;

  return (
    <Column>
      <OneColumn>
        <div>Loan program</div>
        <select>
          <option value="thirtyYear">30-year fixed</option>
          <option value="fifteenYear">15-year fixed</option>
          <option value="ARM">5/1 ARM</option>
        </select>
        <div>
          <a href="https://bit.ly/2PbhngT">See current rates</a>
        </div>
      </OneColumn>
      <OneColumn>
        <div>Interest Rate</div>
        {/* invalid with non-pos-int or, >100 
        three decimal points...rounded */}
        <input
          type="text"
          id="interest"
          defaultValue={interestRate}
        />
      </OneColumn>
    </Column>
  );
};

export default LoanProgram;
