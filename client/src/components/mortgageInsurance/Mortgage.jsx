import React from 'react';
import styled from 'styled-components';
import MIHead from './MIHead.jsx';

class Mortgage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      includeInsurance: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    // , () => this.props.updateMC(value, 'mortgageInsurance')
  }

  render() {
    const { includeInsurance } = this.state;
    const { handleInputChange } = this;
    const { LabelWrap, Box,expand, CaratB, morInsVal, expanded } = this.props;

    const FinePrint = styled.div`
      font-size: 8px;
      font-weight: 200;
    `;

    const HeavyL = styled.label`
      font-weight: 500;
    `;

    const HiddenCB = styled.input`
      opacity: 0;
    `;

    const CustomCB = styled.span`
      height: 8px;
      width: 8px;
      background-color: transparent;
      border: 1px solid rgba(200, 200, 200, 0.9);
      ${HeavyL}:hover & {
        opacity: 100;
        border-color: rgb(0, 106, 255);
        box-shadow: 0 4px 8px 0 rgba(0, 106, 255, 0.3), 0 6px 20px 0 rgba(0, 106, 255, 0.25);
        ${'' /* 1px 1px 1px rgb(0, 106, 255); */}
      }
    `;

    return (
      <div>
        <MIHead includeInsurance={includeInsurance} morInsVal={morInsVal}
          expanded={expanded} expand={expand} CaratB={CaratB} />
        {expanded ? (
          <div>
            <form>
              <HeavyL>
                <HiddenCB
                  name="includeInsurance"
                  type="checkbox"
                  checked={includeInsurance}
                  onChange={this.handleInputChange}
                />
                <CustomCB> </CustomCB>
                Include mortgage insurance
              </HeavyL>
            </form>
            <FinePrint>
              Mortgage insurance is usually required for down payments below 20%.
            </FinePrint>
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    )
  }
}

export default Mortgage;
