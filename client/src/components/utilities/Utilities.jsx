import React from 'react';
import styled from 'styled-components';
import UHead from './UHead.jsx';

class Utilities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      includeUtilities: false,
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
    const { includeUtilities } = this.state;
    const { handleInputChange } = this;
    const { expand, CaratB, morInsVal, expanded } = this.props;

    const Des = styled.div`
      font-size: 8px;
      font-weight: 300;
    `;

    const Col = styled.div`
      display: grid;
      font-weight: 600;
    `;

    const C1a = styled.div`
      grid-column: 1 / 2;
      grid-row: 1;
    `;

    const C2a = styled.div`
      grid-column: 2 / 2;
      grid-row: 1;
    `;

    const C1b = styled.div`
      grid-column: 1 / 2;
      grid-row: 2;
    `;

    const C2b = styled.div`
      grid-column: 2 / 2;
      grid-row: 2;
    `;

    const C1c = styled.div`
      grid-column: 1 / 2;
      grid-row: 3;
    `;

    const C2c = styled.div`
      grid-column: 2 / 2;
      grid-row: 3;
    `;

    const C1d = styled.div`
      grid-column: 1 / 2;
      grid-row: 4;
    `;

    const C2d = styled.div`
      grid-column: 2 / 2;
      grid-row: 4;
    `;

    return (
      <div>
        <UHead includeUtilities={includeUtilities} expanded={expanded} expand={expand} CaratB={CaratB} />
        {expanded ? (
          <div>
          <form>
            <label>
              <input
                name="includeUtilities"
                type="checkbox"
                checked={includeUtilities}
                onChange={this.handleInputChange} />
              Include utilities in payment
            </label>
            </form>
            <Col>
              <C1a> Water/Sewer </C1a>
              <C1b> 
                <form>
                  <label>
                    <input
                      name="waterSewer"
                      type="text"
                      value="$ 0 /mo"
                      onChange={() => console.log('input rxd')} />
                  </label>
                </form>
              </C1b>

              <C1c> Internet </C1c>
              <C1d>
                <form>
                <label>
                  <input
                    name="internet"
                    type="text"
                    value="$ 0 /mo"
                    onChange={() => console.log('input rxd')} />
                </label>
                </form>
              </C1d>

              <C2a> Gas </C2a>
              <C2b> 
                <form>
                  <label>
                    <input
                      name="gas"
                      type="text"
                      value="$ 0 /mo"
                      onChange={() => console.log('input rxd')} />
                  </label>
                </form>
              </C2b>

              <C2c> Electric </C2c>
              <C2d>
                <form>
                <label>
                  <input
                    name="electric"
                    type="text"
                    value="$ 0 /mo"
                    onChange={() => console.log('input rxd')} />
                </label>
                </form>
              </C2d>

            </Col>
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    );
  }
}

export default Utilities;
