import React from 'react';
import { shallow, mount } from 'enzyme';
import ToDontList from '../lib/components/ToDontList';

describe('toDontList component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ToDontList toDonts={[]} />)
    localStorage.clear()
  })

  it('should be a thing', () => {
    expect(wrapper).toBeDefined()
  })

  it('should show message if no toDonts exist', () => {
    const messageDiv = wrapper.find('.no-todonts-msg')

    expect(messageDiv).toBeDefined()
    expect(messageDiv.text()).toEqual("Add some Don'ts")
  })

  it('should append the correct number of ToDontCard\'s to the DOM', () => {
    const toDonts = [
      {title: 'title1', body: 'body1', id: 1},
      {title: 'title2', body: 'body2', id: 2}
    ]

    wrapper = shallow(<ToDontList toDonts={toDonts}/>)

    const firstCard = wrapper.find('ToDontCard').first()
    const lastCard = wrapper.find('ToDontCard').last()

    expect(wrapper.find('ToDontCard').length).toEqual(2)
    expect(firstCard.props().toDont.title).toEqual('title1')
    expect(firstCard.props().toDont.body).toEqual('body1')
    expect(lastCard.props().toDont.title).toEqual('title2')
    expect(lastCard.props().toDont.body).toEqual('body2')
  })

})
