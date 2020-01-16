import React from 'react';
import { shallow } from 'enzyme';
import Issue26p26 from '../../../components/publication-pages/Issue26p26';

describe('Issue26p26', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p26 />);
  });
});
