import React from 'react';
import { shallow } from 'enzyme';
import Issue27p13 from '../../../components/publication-pages/Issue27p13';

describe('Issue27p13', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p13 />);
  });
});
