import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Header from '../client/src/components/Header.jsx';
import App from '../client/src/App.jsx';

describe('Header', () => {

  let wrApp; let app; let wrapper;
  beforeEach(() => {
    wrApp = mount(<App />);
    app = wrApp.instance();
    wrapper = mount(<Header usdF={app.usdF} />);
  });

  //wrapper.find('button').simulate('click')

  it('Header should render successfully', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // it('Should show dollar amount of monthly cost', () => {
  //   console.log(app.props);
  //   console.log(wrapper);
  //   const shallowHeader = shallow(<Header usdF={app.usdF} />);
  //   console.log(shallowHeader);
  //   const text = shallowHeader.find('h4 h4');
  //   expect(text.text()).toBe('1000');
  // });

  it('Should label monthly cost', () => {
    const text = wrapper.find('div div');
    expect(text.text()).toBe('Estimated monthly cost');
  });

});
