import React from 'react';
import { shallow } from 'enzyme';
import Issue27p23 from '../../../components/publication-pages/Issue27p23';

describe('Issue27p23', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p23 />);
  });
});
