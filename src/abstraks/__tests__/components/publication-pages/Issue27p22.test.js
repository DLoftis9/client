import React from 'react';
import { shallow } from 'enzyme';
import Issue27p22 from '../../../components/publication-pages/Issue27p22';

describe('Issue27p22', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p22 />);
  });
});
