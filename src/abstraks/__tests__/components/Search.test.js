import React from 'react';
import { shallow } from 'enzyme';
import Search from '../../components/Search';

describe('Search', () => {
  it('renders without crashing', () => {
    shallow(<Search />);
  });
});
