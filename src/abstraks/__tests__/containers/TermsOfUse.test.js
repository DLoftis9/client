import React from 'react';
import { shallow } from 'enzyme';
import TermsOfUse from '../../containers/TermsOfUse';

describe('TermsOfUse', () => {
  it('renders without crashing', () => {
    shallow(<TermsOfUse />);
  });
});
