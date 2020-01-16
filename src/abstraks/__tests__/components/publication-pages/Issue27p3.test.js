import React from 'react';
import { shallow } from 'enzyme';
import Issue27p3 from '../../../components/publication-pages/Issue27p3';

describe('Issue27p3', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p3 />);
  });
});
