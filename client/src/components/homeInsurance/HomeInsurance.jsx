import React from 'react';
import styled from 'styled-components';
import HIHead from './HIHead.jsx';

const HomeInsurance = (props) => {

    const { price, expand, CaratB, morInsVal, expanded } = props;

    const Des = styled.div`
      font-size: 8px;
      font-weight: 300;
    `;

    return (
      <div>
        <HIHead expanded={expanded} expand={expand} CaratB={CaratB} />
        {expanded ? (
          <div>
            <form>
              <label>
                <input
                  name="homeInsurance"
                  type="text"
                  value="$ 9,660 /year"
                  onChange={() => console.log('input rxd')} />
              </label>
            </form>
            <Des>
              Most lenders require homeowners insurance, which protects your home and property.
            </Des>
          </div>
        ) : (
        <div> </div>
        )}
      </div>
    )
}

export default HomeInsurance;
