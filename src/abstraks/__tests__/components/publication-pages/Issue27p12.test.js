import React from 'react';
import { shallow } from 'enzyme';
import Issue27p12 from '../../../components/publication-pages/Issue27p12';

describe('Issue27p12', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p12 />);
  });
});
