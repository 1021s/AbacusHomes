import { shallow, mount, render } from 'enzyme';
import React from 'react';
import HomePrice from '../client/src/components/principal/HomePrice.jsx';
import App from '../client/src/App.jsx';

describe('HomePrice', () => {

  let wrApp; let app; let shallowApp; let wrapper;
  beforeEach(() => {
    wrApp = mount(<App />);
    app = wrApp.instance();
    shallowApp = shallow(<HomePrice />);
    wrapper = mount(<HomePrice handleSubmit={app.handleSubmit} />);
  });

  it('should render successfully', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should be able to handle user input', () => {
    const input = wrapper.find('input').get(0);
    expect(input.exists()).toBe(true);
  });

});
