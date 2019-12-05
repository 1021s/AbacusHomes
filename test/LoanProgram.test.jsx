import { shallow, mount, render } from 'enzyme';
import React from 'react';
import LoanProgram from '../client/src/components/principal/LoanProgram.jsx';

describe('Loan program', () => {

  it('Loan should render successfully', () => {
    const wrapper = shallow(<LoanProgram />);
    expect(wrapper.exists()).toBe(true);
  });

});
