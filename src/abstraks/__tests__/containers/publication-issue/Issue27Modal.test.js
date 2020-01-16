import React from 'react';
import { mount, shallow } from 'enzyme';
import Issue27Modal from '../../../containers/publication-issue/Issue27Modal';
import { MemoryRouter } from 'react-router-dom';

describe('Issue27Modal', () => {
  const data = [
    {
      id: 1,
      title: 'Issue27: Cover',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p1.jpg',
      url: '/Publication/issue27p1',
    },
    {
      id: 2,
      title: 'Issue27: Table of Contents',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p2.jpg',
      url: '/Publication/issue27p2',
    },
    {
      id: 3,
      title: 'Issue27: Jacob Leidolf Intro',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p3.jpg',
      url: '/Publication/issue27p3',
    },
    {
      id: 4,
      title: 'Issue27: Pages 6 - 7',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p4.jpg',
      url: '/Publication/issue27p4',
    },
    {
      id: 5,
      title: 'Issue27: Pages 8 - 9',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p5.jpg',
      url: '/Publication/issue27p5',
    },
    {
      id: 6,
      title: 'Issue27: Pages 10 - 11',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p6.jpg',
      url: '/Publication/issue27p6',
    },
    {
      id: 7,
      title: 'Issue27: Pages 12 - 13',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p7.jpg',
      url: '/Publication/issue27p7',
    },
    {
      id: 8,
      title: 'Issue27: Pages 14 - 15',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p8.jpg',
      url: '/Publication/issue27p8',
    },
    {
      id: 9,
      title: 'Issue27: Pages 16 - 17',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p9.jpg',
      url: '/Publication/issue27p9',
    },
    {
      id: 10,
      title: 'Issue27: Pages 18 - 19',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p10.jpg',
      url: '/Publication/issue27p10',
    },
    {
      id: 11,
      title: 'Issue27: Pages 20 - 21',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p11.jpg',
      url: '/Publication/issue27p11',
    },
    {
      id: 12,
      title: 'Issue27: Pages 22 - 23',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p12.jpg',
      url: '/Publication/issue27p12',
    },
    {
      id: 13,
      title: 'Issue27: Pages 24 - 25',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p13.jpg',
      url: '/Publication/issue27p13',
    },
    {
      id: 14,
      title: 'Issue27: Pages 26 - 27',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p14.jpg',
      url: '/Publication/issue27p14',
    },
    {
      id: 15,
      title: 'Issue27: Pages 28 - 29',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p15.jpg',
      url: '/Publication/issue27p15',
    },
    {
      id: 16,
      title: 'Issue27: Pages 30 - 31',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p16.jpg',
      url: '/Publication/issue27p16',
    },
    {
      id: 17,
      title: 'Issue27: Pages 32 - 33',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p17.jpg',
      url: '/Publication/issue27p17',
    },
    {
      id: 18,
      title: 'Issue27: Pages 34 - 35',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p18.jpg',
      url: '/Publication/issue27p18',
    },
    {
      id: 19,
      title: 'Issue27: Dave Tree Intro',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p19.jpg',
      url: '/Publication/issue27p19',
    },
    {
      id: 20,
      title: 'Issue27: Pages 38 - 39',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p20.jpg',
      url: '/Publication/issue27p20',
    },
    {
      id: 21,
      title: 'Issue27: Pages 40 - 41',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p21.jpg',
      url: '/Publication/issue27p21',
    },
    {
      id: 22,
      title: 'Issue27: Pages 42 - 43',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p22.jpg',
      url: '/Publication/issue27p22',
    },
    {
      id: 23,
      title: 'Issue27: John Guthrie Intro',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p23.jpg',
      url: '/Publication/issue27p23',
    },
    {
      id: 24,
      title: 'Issue27: Pages 46 - 47',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p24.jpg',
      url: '/Publication/issue27p24',
    },
    {
      id: 25,
      title: 'Issue27: Pages 48 - 49',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p25.jpg',
      url: '/Publication/issue27p25',
    },
    {
      id: 26,
      title: 'Issue27: Pages 50 - 51',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p26.jpg',
      url: '/Publication/issue27p26',
    },
    {
      id: 27,
      title: 'Issue27: Pages 52 - 53',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p27.jpg',
      url: '/Publication/issue27p27',
    },
    {
      id: 28,
      title: 'Issue27: Pages 54 - 55',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p28.jpg',
      url: '/Publication/issue27p28',
    },
    {
      id: 29,
      title: 'Issue27: Pages 56 - 57',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p29.jpg',
      url: '/Publication/issue27p29',
    },
    {
      id: 30,
      title: 'Issue27: Pages 58 - 59',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p30.jpg',
      url: '/Publication/issue27p30',
    },
    {
      id: 31,
      title: 'Issue27: Artists To Watch',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p31.jpg',
      url: '/Publication/issue27p31',
    },
    {
      id: 32,
      title: 'Issue27: Back Cover',
      thumbNail:
        'https://s3-us-west-1.amazonaws.com/abstraksresources/publication/issue27/thumb_nails/issue27__tn-p32.png',
      url: '/Publication/issue27p32',
    },
  ];

  const wrapper = mount(
    <MemoryRouter>
      <Issue27Modal data={data} />
    </MemoryRouter>,
  );

  it('renders children correctly', () => {
    expect(wrapper.find('.issue__27-thumbnails').children()).toHaveLength(data.length);
    expect(
      wrapper
        .find('.issue__27-thumbnails')
        .children()
        .find('ModalShowContent'),
    ).toHaveLength(data.length);
  });
});
