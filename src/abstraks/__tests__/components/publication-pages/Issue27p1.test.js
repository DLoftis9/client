import React from 'react';
import { shallow } from 'enzyme';
import Issue27p1 from '../../../components/publication-pages/Issue27p1';

describe('Issue27p1', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p1 />);
  });
});
