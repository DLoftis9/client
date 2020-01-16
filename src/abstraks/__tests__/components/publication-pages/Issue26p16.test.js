import React from 'react';
import { shallow } from 'enzyme';
import Issue26p16 from '../../../components/publication-pages/Issue26p16';

describe('Issue26p16', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p16 />);
  });
});
