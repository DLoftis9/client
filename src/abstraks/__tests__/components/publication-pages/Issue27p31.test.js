import React from 'react';
import { shallow } from 'enzyme';
import Issue27p31 from '../../../components/publication-pages/Issue27p31';

describe('Issue27p31', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p31 />);
  });
});
