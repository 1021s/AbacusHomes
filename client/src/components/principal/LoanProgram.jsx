import React from 'react';

const LoanProgram = (props) => {
  const { interestRate } = props;
  return (
    <div>
      <div>Loan program</div>
      <select>
        <option value="thirtyYear">30-year fixed</option>
        <option value="fifteenYear">15-year fixed</option>
        <option value="ARM">5/1 ARM</option>
      </select>
      <div>Interest Rate</div>
      <input
        type="text"
        id="interest"
        defaultValue={interestRate}
      />
      <div>
        <a href="https://bit.ly/2PbhngT">See current rates</a>
      </div>
    </div>
  );
};

export default LoanProgram;


    /* <SectionTitle>
        Loan program
        <select>
          <option value="thirtyYear">30-year fixed</option>
          <option value="fifteenYear">15-year fixed</option>
          <option value="ARM">5/1 ARM</option>
        </select>
      </SectionTitle>
      <SectionTitle>
        Interest rate
        <input
          type="text"
          id="interest"
          defaultValue="3.729%"
        />
      </SectionTitle>
      <SectionTitle>
          <Link href="https://www.zillow.com/mortgage-rates/?auto=true&zip=98144&value=2300000&down=460000&loantype=purchase&source=HDPModuleWOW_rates">
            See current rates
          </Link>
      </SectionTitle> */