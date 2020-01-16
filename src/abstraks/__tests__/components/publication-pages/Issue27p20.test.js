import React from 'react';
import { shallow } from 'enzyme';
import Issue27p20 from '../../../components/publication-pages/Issue27p20';

describe('Issue27p20', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p20 />);
  });
});
