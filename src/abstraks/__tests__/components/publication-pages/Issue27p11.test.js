import React from 'react';
import { shallow } from 'enzyme';
import Issue27p11 from '../../../components/publication-pages/Issue27p11';

describe('Issue27p11', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p11 />);
  });
});
