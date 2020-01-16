import React from 'react';
import { shallow } from 'enzyme';
import IssuePreview from '../../components/IssuePreview';
import { MemoryRouter } from 'react-router-dom';

describe('IssuePreview', () => {
  it('renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <IssuePreview />
      </MemoryRouter>,
    );
  });
});
