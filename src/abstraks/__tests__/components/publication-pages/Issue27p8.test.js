import React from 'react';
import { shallow } from 'enzyme';
import Issue27p8 from '../../../components/publication-pages/Issue27p8';

describe('Issue27p8', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p8 />);
  });
});
