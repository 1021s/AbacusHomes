import React from 'react';
import styled from 'styled-components';

class PropertyTaxes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      includeInsurance: false,
      expanded: false,
    };
  }

  render() {
    const { expanded } = this.state;
    // const {  } = this;
    const { expand, CaratB } = this.props;

    return (
      <div onClick={() => expand('PropertyTaxes')}>
        <div> Property taxes </div>
		<div> $1,936/mo </div>
        {expanded ? (
          <CaratB>
            <img src="https://img.icons8.com/color/13/000000/collapse-arrow.png" alt="^" />
          </CaratB>
        ) : (
          <CaratB>
            <img src="https://img.icons8.com/officexs/12/000000/expand-arrow.png" alt="v" />
          </CaratB>
        )}
      </div>
    )
  }
}

export default PropertyTaxes;
