import React from 'react';
import styled from 'styled-components';
import PTHead from './PTHead.jsx';

const PropertyTaxes = (props) => {

    const { price, expand, CaratB, morInsVal, expanded } = props;

    const Des = styled.div`
      font-size: 8px;
      font-weight: 300;
    `;

    const Col = styled.div`
      display: grid;
      ${'' /* grid-template-columns: repeat(3, 1fr);
      grid-gap: 2px;
      grid-auto-rows: minmax(1px, auto); */}

    `;

    const C1a = styled.div`
      grid-column: 1 / 3;
      grid-row: 1;
    `;

    const C2a = styled.div`
      grid-column: 2 / 3;
      grid-row: 1;
    `;

    const C3a = styled.div`
      grid-column: 3 / 3;
      grid-row: 1;
    `;

    const C1b = styled.div`
      grid-column: 1 / 3;
      grid-row: 2;
    `;

    const C2b = styled.div`
      grid-column: 2 / 3;
      grid-row: 2;
    `;

    const C3b = styled.div`
      grid-column: 3 / 3;
      grid-row: 2;
    `;

    return (
      <div>
        <PTHead expanded={expanded} expand={expand} CaratB={CaratB} />
        {expanded ? (
          <div>
            <Des>
              This estimate is based on the home value and an estimated local tax rate. Actual rate may vary.
            </Des>
            <Col>
              <C1a> Home price </C1a>
              <C2a> Tax rate </C2a>
              <C3a> </C3a>
              <C1b> ${price}  X </C1b>
              <C2b>
                <form>
                <label>
                  <input
                    name="taxRate"
                    type="text"
                    value="1.01 %"
                    onChange={() => console.log('input rxd')} />
                </label>
                </form>
              </C2b>
              <C3b> = ${Math.round(price * 0.0101)}/year </C3b>
            </Col>
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    )
}

export default PropertyTaxes;
