import React, { Component } from 'react';

import ModalShowContent from '../../components/ModalShowContent';

// This contains all the data for the modal navigation for Issue 26
export default class Issue26Modal extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          id: 1,
          title: 'Issue26: Cover',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p1.gif',
          url: '/Publication/issue26p1',
        },
        {
          id: 2,
          title: 'Issue26: Table of Contents',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p2.gif',
          url: '/Publication/issue26p2',
        },
        {
          id: 3,
          title: 'Issue26: Owen Linders Intro',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p3.gif',
          url: '/Publication/issue26p3',
        },
        {
          id: 4,
          title: 'Issue26: Pages 6 - 7',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p4.gif',
          url: '/Publication/issue26p4',
        },
        {
          id: 5,
          title: 'Issue26: Pages 8 - 9',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p5.gif',
          url: '/Publication/issue26p5',
        },
        {
          id: 6,
          title: 'Issue26: Pages 10 - 11',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p6.gif',
          url: '/Publication/issue26p6',
        },
        {
          id: 7,
          title: 'Issue26: Pages 12 - 13',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p7.gif',
          url: '/Publication/issue26p7',
        },
        {
          id: 8,
          title: 'Issue26: Pages 14 - 15',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p8.gif',
          url: '/Publication/issue26p8',
        },
        {
          id: 9,
          title: 'Issue26: Pages 16 - 17',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p9.gif',
          url: '/Publication/issue26p9',
        },
        {
          id: 10,
          title: 'Issue26: Pages 18 - 19',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p10.gif',
          url: '/Publication/issue26p10',
        },
        {
          id: 11,
          title: 'Issue26: Richard Heckert Intro',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p11.gif',
          url: '/Publication/issue26p11',
        },
        {
          id: 12,
          title: 'Issue26: Pages 22 - 23',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p12.gif',
          url: '/Publication/issue26p12',
        },
        {
          id: 13,
          title: 'Issue26: Pages 24 - 25',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p13.gif',
          url: '/Publication/issue26p13',
        },
        {
          id: 14,
          title: 'Issue26: Pages 26 - 27',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p14.gif',
          url: '/Publication/issue26p14',
        },
        {
          id: 15,
          title: 'Issue26: Pages 28 - 29',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p15.gif',
          url: '/Publication/issue26p15',
        },
        {
          id: 16,
          title: 'Issue26: Pages 30 - 31',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p16.gif',
          url: '/Publication/issue26p16',
        },
        {
          id: 17,
          title: 'Issue26: Pages 32 - 33',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p17.gif',
          url: '/Publication/issue26p17',
        },
        {
          id: 18,
          title: 'Issue26: Pages 34 - 35',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p18.gif',
          url: '/Publication/issue26p18',
        },
        {
          id: 19,
          title: 'Issue26: Rick Berry Intro',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p19.gif',
          url: '/Publication/issue26p19',
        },
        {
          id: 20,
          title: 'Issue26: Pages 38 - 39',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p20.gif',
          url: '/Publication/issue26p20',
        },
        {
          id: 21,
          title: 'Issue26: Pages 40 - 41',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p21.gif',
          url: '/Publication/issue26p21',
        },
        {
          id: 22,
          title: 'Issue26: Pages 42 - 43',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p22.gif',
          url: '/Publication/issue26p22',
        },
        {
          id: 23,
          title: 'Issue26: Pages 44 - 45',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p23.gif',
          url: '/Publication/issue26p23',
        },
        {
          id: 24,
          title: 'Issue26: Pages 46 - 47',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p24.gif',
          url: '/Publication/issue26p24',
        },
        {
          id: 25,
          title: 'Issue26: Pages 48 - 49',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p25.gif',
          url: '/Publication/issue26p25',
        },
        {
          id: 26,
          title: 'Issue26: Pages 50 - 51',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p26.gif',
          url: '/Publication/issue26p26',
        },
        {
          id: 27,
          title: 'Issue26: Pages 52 - 53',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p27.gif',
          url: '/Publication/issue26p27',
        },
        {
          id: 28,
          title: 'Issue26: Pages 54 - 55',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p28.gif',
          url: '/Publication/issue26p28',
        },
        {
          id: 29,
          title: 'Issue26: Taner Tumkaya Cover',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p29.gif',
          url: '/Publication/issue26p29',
        },
        {
          id: 30,
          title: 'Issue26: Pages 58 - 59',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p30.gif',
          url: '/Publication/issue26p30',
        },
        {
          id: 31,
          title: 'Issue26: Pages 60 - 61',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p31.gif',
          url: '/Publication/issue26p31',
        },
        {
          id: 32,
          title: 'Issue26: Pages 62 - 63',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p32.gif',
          url: '/Publication/issue26p32',
        },
        {
          id: 33,
          title: 'Issue26: Pages 64 - 65',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p33.gif',
          url: '/Publication/issue26p33',
        },
        {
          id: 34,
          title: 'Issue26: Pages 66 - 67',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p34.gif',
          url: '/Publication/issue26p34',
        },
        {
          id: 35,
          title: 'Issue26: Pages 68 - 69',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p35.gif',
          url: '/Publication/issue26p35',
        },
        {
          id: 36,
          title: 'Issue26: Pages 70 - 71',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p36.gif',
          url: '/Publication/issue26p36',
        },
        {
          id: 37,
          title: 'Issue26: Pages 72 - 73',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p37.gif',
          url: '/Publication/issue26p37',
        },
        {
          id: 38,
          title: 'Issue26: Pages 74 - 75',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p38.gif',
          url: '/Publication/issue26p38',
        },
        {
          id: 39,
          title: 'Issue26: Raul Gonzalez III Intro',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p39.gif',
          url: '/Publication/issue26p39',
        },
        {
          id: 40,
          title: 'Issue26: Pages 78 - 79',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p40.gif',
          url: '/Publication/issue26p40',
        },
        {
          id: 41,
          title: 'Issue26: Pages 80 - 81',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p41.gif',
          url: '/Publication/issue26p41',
        },
        {
          id: 42,
          title: 'Issue26: Pages 82 - 83',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p42.gif',
          url: '/Publication/issue26p42',
        },
        {
          id: 43,
          title: 'Issue26: Pages 84 - 85',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p43.gif',
          url: '/Publication/issue26p43',
        },
        {
          id: 44,
          title: 'Issue26: Back Cover',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/thumb_nails/issue26__tn-p44.gif',
          url: '/Publication/issue26p44',
        },
      ],
    };
  }

  render() {
    return (
      <div className="modal__thumbnails issue__26-thumbnails">
        {this.state.data.map(options => {
          return (
            <ModalShowContent
              key={options.id}
              title={options.title}
              thumbNail={options.thumbNail}
              url={options.url}
            />
          );
        })}
      </div>
    );
  }
}
