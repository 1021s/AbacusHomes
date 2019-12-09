import { shallow, mount, render } from 'enzyme';
import React from 'react';
import App from '../client/src/App.jsx';
import Header from '../client/src/components/Header.jsx';
import Principal from '../client/src/components/principal/Principal.jsx';
import moxios from 'moxios';

describe('App', () => {

  // let wrApp; let app; let wrapper; let shApp;
  beforeEach(() => {
    // wrApp = mount(<App />);
    // app = wrApp.instance();
    // shApp = shallow(<App />);

    moxios.install();
    window.history.pushState({}, 'App render suite', '/000/');
    moxios.stubRequest('/api/listings/000', {
      status: 200,
      response: [
        {
          price: 500000,
        },
      ],
    });
    wrapper = mount(<App />);
  });

  afterEach(() => {
    moxios.uninstall();
  });

  });

  it('should render successfully', () => {
    expect(wrApp.exists()).toBe(true);
  });

  it('should render Header', () => {
    expect(wrApp.contains(Header)).toBe(true);
  });

  it('should render Principal', () => {
    expect(wrApp.contains(Principal)).toBe(true);
  });

  it('should be stateful', () => {
    expect(app.state.price).toEqual(600000);
  });

  it('should not be expanded', () => {
    expect(app.state.expanded).toBe(false);
  });

});
