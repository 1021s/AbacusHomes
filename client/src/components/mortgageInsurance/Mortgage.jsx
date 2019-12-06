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
      [name]: value
    });
    // , () => this.props.updateMC(value, 'mortgageInsurance')
  }

  render() {
    const { includeInsurance } = this.state;
    const { handleInputChange } = this;
    const { expand, CaratB, morInsVal, expanded } = this.props;

    const FinePrint = styled.div`
      font-size: 8px;
      font-weight: 200;
    `;

    const HeavyL = styled.label`
      font-weight: 500;
    `;

    return (
      <div>
        <MIHead includeInsurance={includeInsurance} morInsVal={morInsVal} expanded={expanded} expand={expand} CaratB={CaratB} />
        {expanded ? (
          <div>
            <form>
            <HeavyL>
              <input
                name="includeInsurance"
                type="checkbox"
                checked={includeInsurance}
                onChange={this.handleInputChange} />
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
