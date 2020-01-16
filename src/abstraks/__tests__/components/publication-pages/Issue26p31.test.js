import React from 'react';
import { shallow } from 'enzyme';
import Issue26p31 from '../../../components/publication-pages/Issue26p31';

describe('Issue26p31', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p31 />);
  });
});
