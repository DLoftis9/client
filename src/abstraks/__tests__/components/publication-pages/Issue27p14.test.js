import React from 'react';
import { shallow } from 'enzyme';
import Issue27p14 from '../../../components/publication-pages/Issue27p14';

describe('Issue27p14', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p14 />);
  });
});
