import React, { Component } from 'react';

import ModalShowContent from '../../components/ModalShowContent';

// This contains all the data for the modal navigation for Issue 28
export default class Issue28Modal extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          id: 1,
          title: 'Issue28: Cover',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p1.jpg',
          url: '/Publication/issue28p1',
        },
        {
          id: 2,
          title: 'Issue28: Table of Contents',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p2.jpg',
          url: '/Publication/issue28p2',
        },
        {
          id: 3,
          title: 'Issue28: Letter From The Editor',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p3.jpg',
          url: '/Publication/issue28p3',
        },
        {
          id: 4,
          title: 'Issue28: Michelle Dugan Intro',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p4.jpg',
          url: '/Publication/issue28p4',
        },
        {
          id: 5,
          title: 'Issue28: Pages 8 - 9',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p5.jpg',
          url: '/Publication/issue28p5',
        },
        {
          id: 6,
          title: 'Issue28: Pages 10 - 11',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p6.jpg',
          url: '/Publication/issue28p6',
        },
        {
          id: 7,
          title: 'Issue28: Pages 12 - 13',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p7.jpg',
          url: '/Publication/issue28p7',
        },
        {
          id: 8,
          title: 'Issue28: Pages 14 - 15',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p8.jpg',
          url: '/Publication/issue28p8',
        },
        {
          id: 9,
          title: 'Issue28: Pages 16 - 17',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p9.jpg',
          url: '/Publication/issue28p9',
        },
        {
          id: 10,
          title: 'Issue28: Pages 18 - 19',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p10.jpg',
          url: '/Publication/issue28p10',
        },
        {
          id: 11,
          title: 'Issue28: Pages 20 - 21',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p11.jpg',
          url: '/Publication/issue28p11',
        },
        {
          id: 12,
          title: 'Issue28: Merk Those Intro',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p12.jpg',
          url: '/Publication/issue28p12',
        },
        {
          id: 13,
          title: 'Issue28: Pages 24 - 25',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p13.jpg',
          url: '/Publication/issue28p13',
        },
        {
          id: 14,
          title: 'Issue28: Pages 26 - 27',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p14.jpg',
          url: '/Publication/issue28p14',
        },
        {
          id: 15,
          title: 'Issue28: Pages 28 - 29',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p15.jpg',
          url: '/Publication/issue28p15',
        },
        {
          id: 16,
          title: 'Issue28: Pages 30 - 31',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p16.jpg',
          url: '/Publication/issue28p16',
        },
        {
          id: 17,
          title: 'Issue28: Pages 32 - 33',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p17.jpg',
          url: '/Publication/issue28p17',
        },
        {
          id: 18,
          title: "Issue28: Camilla d'Errico",
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p18.jpg',
          url: '/Publication/issue28p18',
        },
        {
          id: 19,
          title: 'Issue28: Pages 36 - 37',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p19.jpg',
          url: '/Publication/issue28p19',
        },
        {
          id: 20,
          title: 'Issue28: Pages 38 - 39',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p20.jpg',
          url: '/Publication/issue28p20',
        },
        {
          id: 21,
          title: 'Issue28: Pages 40 - 41',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p21.jpg',
          url: '/Publication/issue28p21',
        },
        {
          id: 22,
          title: 'Issue28: Pages 42 - 43',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p22.jpg',
          url: '/Publication/issue28p22',
        },
        {
          id: 23,
          title: 'Issue28: Pages 44 - 45',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p23.jpg',
          url: '/Publication/issue28p23',
        },
        {
          id: 24,
          title: 'Issue28: Pages 46 - 47',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p24.jpg',
          url: '/Publication/issue28p24',
        },
        {
          id: 25,
          title: 'Issue28: Pages 48 - 49',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p25.jpg',
          url: '/Publication/issue28p25',
        },
        {
          id: 26,
          title: 'Issue28: Pages 50 - 51',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p26.jpg',
          url: '/Publication/issue28p26',
        },
        {
          id: 27,
          title: 'Issue28: Pages 52 - 53',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p27.jpg',
          url: '/Publication/issue28p27',
        },
        {
          id: 28,
          title: 'Issue28: Allison Bamcat Intro',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p28.jpg',
          url: '/Publication/issue28p28',
        },
        {
          id: 29,
          title: 'Issue28: Pages 56 - 57',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p29.jpg',
          url: '/Publication/issue28p29',
        },
        {
          id: 30,
          title: 'Issue28: Pages 58 - 59',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p30.jpg',
          url: '/Publication/issue28p30',
        },
        {
          id: 31,
          title: 'Issue28: Pages 60 - 61',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p31.jpg',
          url: '/Publication/issue28p31',
        },
        {
          id: 32,
          title: 'Issue28: Pages 62 - 63',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p32.jpg',
          url: '/Publication/issue28p32',
        },
        {
          id: 33,
          title: 'Issue28: Pages 64 - 65',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p33.jpg',
          url: '/Publication/issue28p33',
        },
        {
          id: 34,
          title: 'Issue28: Pages 66 - 67',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p34.jpg',
          url: '/Publication/issue28p34',
        },
        {
          id: 35,
          title: 'Issue28: Pages 68 - 69',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p35.jpg',
          url: '/Publication/issue28p35',
        },
        {
          id: 36,
          title: 'Issue28: Artists To Watch',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p36.jpg',
          url: '/Publication/issue28p36',
        },
        {
          id: 37,
          title: 'Issue28: Back Cover',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/thumb_nails/issue28__tn-p37.jpg',
          url: '/Publication/issue28p37',
        },
      ],
    };
  }

  render() {
    return (
      <div className="modal__thumbnails issue__28-thumbnails">
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
