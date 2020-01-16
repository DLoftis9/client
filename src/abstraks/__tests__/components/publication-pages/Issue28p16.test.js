import React from 'react';
import { shallow } from 'enzyme';
import Issue28p16 from '../../../components/publication-pages/Issue28p16';

describe('Issue28p16', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p16 />);
  });
});
