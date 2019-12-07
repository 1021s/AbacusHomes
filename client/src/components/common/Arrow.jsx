import React from 'react';
import styled from 'styled-components';

class Arrow extends React.Component {
  constructor() {
    super();
    this.state = {
      pntD: true,
    };
  }

  render() {
    const { pntD } = this.state;

    const UpCarat = styled.div`
      background-image: url(https://img.icons8.com/officexs/16/000000/expand-arrow.png);
      transform: rotate(180deg);
      ${'' /* background-color: transparent; */}
    `;

    const DownCarat = styled.div`
      background-image: url(https://img.icons8.com/officexs/16/000000/expand-arrow.png);
      ${'' /* background-color: transparent; */}
    `;

    return (
      <div>
        {pntD ? (
          <div>
            <img src="https://img.icons8.com/officexs/16/000000/expand-arrow.png" />
          </div>
        ) : (
          <UpCarat> </UpCarat>
        )}
      </div>
    );
  }
}

export default Arrow;
