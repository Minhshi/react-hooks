import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import Button from './Button';

configure({ adapter: new Adapter() });

describe('<Button/>', () => {
  const wrapper = mount(<Button />);

  it('should have a disabled button if prop is passed', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.find('button').prop('disabled')).toBe(true);
  });
});
