import React from 'react';
import { shallow } from 'enzyme';
import Issue27p21 from '../../../components/publication-pages/Issue27p21';

describe('Issue27p21', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p21 />);
  });
});
