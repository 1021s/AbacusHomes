import React from 'react';
import styled from 'styled-components';

const Principal = (props) => {
  const { price, usdF } = props;

  const ParentDiv = styled.div`
    background-color: rgba(211,211,211,0.25)
  `;

  const SectionTitle = styled.div`
    color: rgb(42, 42, 51);
    -webkit-font-smoothing: antialiased;
    font-family: "Open Sans", Tahoma, Geneva, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 2px;
    letter-spacing: 0px;
    text-transform: none;
    margin: 0px;
    color: rgb(42, 42, 51);
    -webkit-font-smoothing: antialiased;
    margin: 0px;
    box-sizing: border-box;
  `;

  const SubTitle = styled.p`
    font-weight: 200;
  `;

  const Link = styled.a`
    textDecoration: none;
    font-size: 8px;
  `;

  return (
    <ParentDiv>
      <SectionTitle>
        Principal & Interest
        <SubTitle>
          {usdF(Math.round(price / 12))}
          /mo
        </SubTitle>
      </SectionTitle>
      <SectionTitle>
        Home price
        <span>
          <label>$</label>
          <input
            type="text"
            id="monthlyPrice"
            value={usdF(price)}
          />
        </span>
      </SectionTitle>
      <SectionTitle>
        Down payment
        <input />
        <input />
      </SectionTitle>
      <SectionTitle>
        Loan program
        <input />
      </SectionTitle>
      <SectionTitle>
        Interest rate
        <input />
      </SectionTitle>
      <SectionTitle>
          <Link href="https://www.zillow.com/mortgage-rates/?auto=true&zip=98144&value=2300000&down=460000&loantype=purchase&source=HDPModuleWOW_rates">
            See current rates
          </Link>
      </SectionTitle>
    </ParentDiv>
  );
};

export default Principal;
