import React from 'react';
import { shallow } from 'enzyme';
import ModalShowContent from '../../components/ModalShowContent';
import { MemoryRouter } from 'react-router-dom';

describe('ModalShowContent', () => {
  it('renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <ModalShowContent />
      </MemoryRouter>,
    );
  });
});
