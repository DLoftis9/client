import React from 'react';
import { shallow } from 'enzyme';
import Issue27p15 from '../../../components/publication-pages/Issue27p15';

describe('Issue27p15', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p15 />);
  });
});
