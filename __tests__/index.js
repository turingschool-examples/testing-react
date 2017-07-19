import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/components/App';

describe('App', () => {
  it('should exist', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeDefined()
  })
})
