import React from 'react';
import styled from 'styled-components';
import MIHead from './MIHead.jsx';
import CheckedBox from './CheckedBox.jsx';

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
    // () => this.props.flip());
    // , () => this.props.updateMC(value, 'mortgageInsurance')
  }

  render() {
    const { includeInsurance } = this.state;
    const { handleInputChange } = this;
    const { LabelWrap, Box,expand, CaratB, morInsVal, expanded } = this.props;

    // const Flox = styled.div`
    //   display: flex;
    //   flex-wrap: wrap;
    //   flex-direction: column;
    //   align-content: space-between;
    //   align-items: flex-start;
    // `;

    const Col = styled.div`
      display: grid;
      width: 100%;
      grid-template-columns: 14px 1fr;
      font-weight: 600;
      ${'' /* align-items: center; */}
    `;

    const C1a = styled.div`
      grid-column: 1 / 2;
      grid-row: 1;
    `;

    const C2a = styled.div`
      grid-column: 2 / 2;
      grid-row: 1;
    `;

    const FinePrint = styled.div`
      font-size: 8px;
      font-weight: 200;
    `;

    const HeavyL = styled.label`
      font-weight: 500;
    `;

    const HiddenCB = styled.input`
      ${'' /* display: flex; */}
      opacity: 0;
      margin: 0px;
    `;

    const CustomCB = styled.div`
      ${'' /* position: absolute; */}
      ${'' /* display: flex; */}
      margin: 0px;
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

    const Checked = styled.div`
      margin: 0px;
      height: 8px;
      width: 8px;
      background-color: transparent;
      border: 1px solidborder: 1px solid rgba(200, 200, 200, 0.9);
      ${HeavyL}:hover & {
        opacity: 100;
        border-color: rgb(0, 106, 255);
        box-shadow: 0 4px 8px 0 rgba(0, 106, 255, 0.3), 0 6px 20px 0 rgba(0, 106, 255, 0.25);
      }
    `;

    const Spacer = styled.span`
      ${'' /* display: flex; */}
    `;

    return (
      <div>
        <MIHead includeInsurance={includeInsurance} morInsVal={morInsVal}
          expanded={expanded} expand={expand} CaratB={CaratB} />
        {expanded ? (
          <div>
            {includeInsurance ? (
              <div>
                <Col>
                  <C1a>
                    <form>
                      <HeavyL>
                        <CheckedBox />
                        <HiddenCB
                          name="includeInsurance"
                          type="checkbox"
                          checked={includeInsurance}
                          onChange={this.handleInputChange}
                          style={{ cursor: 'pointer' }}
                        />
                      </HeavyL>
                    </form>
                  </C1a>
                  <C2a>Include mortgage insurance</C2a>
                </Col>
                <FinePrint>
                  Mortgage insurance is usually required for down payments below 20%.
                </FinePrint>
              </div>
            ) : (
              <div>
                <Col>
                  <C1a>
                    <form>
                      <HeavyL>
                        <CustomCB>
                          <HiddenCB
                            name="includeInsurance"
                            type="checkbox"
                            checked={includeInsurance}
                            onChange={this.handleInputChange}
                            style={{ cursor: 'pointer' }}
                          />
                        </CustomCB>
                      </HeavyL>
                    </form>
                  </C1a>
                  <C2a>Include mortgage insurance</C2a>
                </Col>
                <FinePrint>
                  Mortgage insurance is usually required for down payments below 20%.
                </FinePrint>
              </div>
            )}
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    )
  }
}

export default Mortgage;
