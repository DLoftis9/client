import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import WorkContent from '../../../components/containerContents/WorkContent';

describe('WorkContent', () => {
  const workPieces = [
    {
      id: 1,
      title: 'Abstraks',
      url: '/portfolio/abstraks',
      coverImage: 'https://s3-us-west-1.amazonaws.com/100beans.com/work/abstraks/logo--green.svg',
    },
  ];

  const wrapper = mount(
    <MemoryRouter>
      <WorkContent workPieces={workPieces} />
    </MemoryRouter>,
  );

  it('renders without crashing', () => {
    shallow(<WorkContent />);
  });

  it('renders children correctly with the component WorkPieces', () => {
    expect(wrapper.find('.work__row').children()).toHaveLength(workPieces.length);
    expect(
      wrapper
        .find('.work__row')
        .children()
        .find('WorkPieces'),
    ).toHaveLength(workPieces.length);
  });
});
