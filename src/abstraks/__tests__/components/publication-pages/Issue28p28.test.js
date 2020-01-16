import React from 'react';
import { shallow } from 'enzyme';
import Issue28p28 from '../../../components/publication-pages/Issue28p28';

describe('Issue28p28', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p28 />);
  });
});
