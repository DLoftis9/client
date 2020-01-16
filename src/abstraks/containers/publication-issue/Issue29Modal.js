import React, { Component } from 'react';

import ModalShowContent from '../../components/ModalShowContent';

export default class Issue29Modal extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          id: 1,
          title: 'Issue29: Cover',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p1.jpg',
          url: '/Publication/issue29p1',
        },
        {
          id: 2,
          title: 'Issue29: Table of Contents',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p2.jpg',
          url: '/Publication/issue29p2',
        },
        {
          id: 3,
          title: 'Issue29: Letter From The Editor',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p3.jpg',
          url: '/Publication/issue29p3',
        },
        {
          id: 4,
          title: 'Issue29: Chanimation Brothers Intro',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p4.jpg',
          url: '/Publication/issue29p4',
        },
        {
          id: 5,
          title: 'Issue29: Pages 8 - 9',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p5.jpg',
          url: '/Publication/issue29p5',
        },
        {
          id: 6,
          title: 'Issue29: Pages 10 - 11',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p6.jpg',
          url: '/Publication/issue29p6',
        },
        {
          id: 7,
          title: 'Issue29: Pages 12 - 13',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p7.jpg',
          url: '/Publication/issue29p7',
        },
        {
          id: 8,
          title: 'Issue29: Pages 14 - 15',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p8.jpg',
          url: '/Publication/issue29p8',
        },
        {
          id: 9,
          title: 'Issue29: Pages 16 - 17',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p9.jpg',
          url: '/Publication/issue29p9',
        },
        {
          id: 10,
          title: 'Issue29: Pages 18 - 19',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p10.jpg',
          url: '/Publication/issue29p10',
        },
        {
          id: 11,
          title: 'Issue29: Pages 20 - 21',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p11.jpg',
          url: '/Publication/issue29p11',
        },
        {
          id: 12,
          title: 'Issue29: Merk Those Intro',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p12.jpg',
          url: '/Publication/issue29p12',
        },
        {
          id: 13,
          title: 'Issue29: Pages 24 - 25',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p13.jpg',
          url: '/Publication/issue29p13',
        },
        {
          id: 14,
          title: 'Issue29: Pages 26 - 27',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p14.jpg',
          url: '/Publication/issue29p14',
        },
        {
          id: 15,
          title: 'Issue29: Pages 28 - 29',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p15.jpg',
          url: '/Publication/issue29p15',
        },
        {
          id: 16,
          title: 'Issue29: Pages 30 - 31',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p16.jpg',
          url: '/Publication/issue29p16',
        },
        {
          id: 17,
          title: 'Issue29: Pages 32 - 33',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p17.jpg',
          url: '/Publication/issue29p17',
        },
        {
          id: 18,
          title: "Issue29: Camilla d'Errico",
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p18.jpg',
          url: '/Publication/issue29p18',
        },
        {
          id: 19,
          title: 'Issue29: Pages 36 - 37',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p19.jpg',
          url: '/Publication/issue29p19',
        },
        {
          id: 20,
          title: 'Issue29: Pages 38 - 39',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p20.jpg',
          url: '/Publication/issue29p20',
        },
        {
          id: 21,
          title: 'Issue29: Pages 40 - 41',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p21.jpg',
          url: '/Publication/issue29p21',
        },
        {
          id: 22,
          title: 'Issue29: Pages 42 - 43',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p22.jpg',
          url: '/Publication/issue29p22',
        },
        {
          id: 23,
          title: 'Issue29: Pages 44 - 45',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p23.jpg',
          url: '/Publication/issue29p23',
        },
        {
          id: 24,
          title: 'Issue29: Back Cover',
          thumbNail:
            'https://d173eg0xl75rn9.cloudfront.net/publication/issue29/thumb_nails/issue29__tn-p24.jpg',
          url: '/Publication/issue29p24',
        },
      ],
    };
  }

  render() {
    return (
      <div className="modal__thumbnails issue__29-thumbnails">
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
