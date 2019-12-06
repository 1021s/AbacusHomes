import React from 'react';
import styled from 'styled-components';
import HOAHead from './HOAHead.jsx';

const HOAFees = (props) => {

  const { expand, expanded } = props;

	return (
    <div>
      <HOAHead expand={expand} expanded={expanded} />
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
          <div>
            Some properties require monthly HOA dues to cover common amenities or services.
          </div>
        </div>
      ) : (
      <div> </div>
      )}
    </div>
	)
}

export default HOAFees;
