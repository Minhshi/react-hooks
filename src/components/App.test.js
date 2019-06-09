import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import App from './App';

configure({ adapter: new Adapter() });

describe('<App/>', () => {
  it('should render the <App/> component', () => {
    mount(<App />);
  });
});
