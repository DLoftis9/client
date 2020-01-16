import React from 'react';
import { shallow } from 'enzyme';
import Issue27p2 from '../../../components/publication-pages/Issue27p2';

describe('Issue27p2', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p2 />);
  });
});
