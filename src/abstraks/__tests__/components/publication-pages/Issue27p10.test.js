import React from 'react';
import { shallow } from 'enzyme';
import Issue27p10 from '../../../components/publication-pages/Issue27p10';

describe('Issue27p10', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p10 />);
  });
});
