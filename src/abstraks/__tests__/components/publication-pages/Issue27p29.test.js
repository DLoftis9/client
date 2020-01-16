import React from 'react';
import { shallow } from 'enzyme';
import Issue27p29 from '../../../components/publication-pages/Issue27p29';

describe('Issue27p29', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p29 />);
  });
});
