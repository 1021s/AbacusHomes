import React from 'react';
import styled from 'styled-components';
import HOAHead from './HOAHead.jsx';

const HOAFees = (props) => {

  const { expand, expanded, CaratB } = props;

  const Des = styled.div`
    font-size: 8px;
    font-weight: 400;
  `;

	return (
    <div>
      <HOAHead expand={expand} expanded={expanded} CaratB={CaratB} />
      {expanded ? (
        <div>
          <form>
            <label>
              <input
                name="hoaFees"
                type="text"
                value="$0 /mo"
                onChange={() => console.log('input rxd')} />
            </label>
          </form>
          <Des>
            Some properties require monthly HOA dues to cover common amenities or services.
          </Des>
        </div>
      ) : (
      <div> </div>
      )}
    </div>
	)
}

export default HOAFees;
