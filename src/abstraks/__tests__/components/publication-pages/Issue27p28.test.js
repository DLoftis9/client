import React from 'react';
import { shallow } from 'enzyme';
import Issue27p28 from '../../../components/publication-pages/Issue27p28';

describe('Issue27p28', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p28 />);
  });
});
