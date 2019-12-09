import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Principal from '../../client/src/components/principal/Principal.jsx';
import PandI from '../../client/src/components/principal/PandI.jsx';
import HomePrice from '../../client/src/components/principal/HomePrice.jsx';
import DownPayment from '../../client/src/components/principal/DownPayment.jsx';
import LoanProgram from '../../client/src/components/principal/LoanProgram.jsx';
import App from '../../client/src/App.jsx';

describe('Principal', () => {

  let wrApp; let app; let shallowApp;
  beforeEach(() => {
    wrApp = mount(<Principal />);
    app = wrApp.instance();
    shallowApp = shallow(<Principal />);
  });

  it('should render successfully', () => {
    expect(wrApp.exists()).toBe(true);
  });

  it('should render PandI', () => {
    expect(wrApp.contains(PandI)).toBe(true);
  });

  it('should render HomePrice', () => {
    expect(wrApp.contains(HomePrice)).toBe(true);
  });

  it('should render DownPayment', () => {
    expect(wrApp.contains(DownPayment)).toBe(true);
  });

  it('should render LoanProgram', () => {
    expect(wrApp.contains(LoanProgram)).toBe(true);
  });

});