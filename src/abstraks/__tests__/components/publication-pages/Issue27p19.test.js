import React from 'react';
import { shallow } from 'enzyme';
import Issue27p19 from '../../../components/publication-pages/Issue27p19';

describe('Issue27p19', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p19 />);
  });
});
