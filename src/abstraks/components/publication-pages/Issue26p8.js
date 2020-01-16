import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PublicationHome from '../PublicationHome';
import PageNav from '../PageNav';
import Issue26Modal from '../../containers/publication-issue/Issue26Modal';

const issue26Modal = <Issue26Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  abstraks: PropTypes.string.isRequired,
  cityOfNightLamp: PropTypes.string.isRequired,

  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue26p7',
  next: '/Publication/Issue26p9',
  titleDescription1: 'City of Night Lamp - Mixed Media Sculpture - 2013',
  pageNumber: 14,
  abstraks: 'Abstraks',
  cityOfNightLamp:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue26/owen_linders/ol_city_of_night_lamp_mixeed_media_sculpture_2013.jpg',

  modalTitle: 'Issue 26 Contents',
  modalContent: function() {
    return issue26Modal;
  },
};

const Issue26p8 = props => (
  <div className="issue-26">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <p className="page_paragraph">
              voice is barely able to bounce off the tabletop; it is so littered with artistic
              debris.
            </p>

            <p className="page_paragraph">
              “Throughout middle school and high school I had phenomenal art teachers, who in the
              dead of winter, during February break, would come in so I could go and do ceramics.
              Teachers who genuinely gave so much of their time and effort to make sure that I was
              given facility. In high school I had four of the best years of art instruction I have
              ever gotten and on a budget, which I can only describe as meager, which I understood
              it. They would keep a kiln on to warm the room too.” No doubt Owen’s teachers’
              passions helped inspire his own passions and his own ability to roll with the punches.
            </p>

            <p className="page_paragraph">
              “I went to Alfred University in central New York. I went in for ceramics and almost
              immediately took a print making class by mistake,” Owen recalls, a happy accident that
              we should all be stoked about. After a semester or two of college Linders was already
              considering leaving. “I kept going to school because of joining the swim team,” he
              says, “which is probably the first
            </p>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              time I realized that it was really okay to be more than one thing at a time. You know,
              it’s okay to be like a jocky, bro dude who can also go to his painting class,” he
              explains. This was no doubt an experience that helped shaped Owen’s young mind into
              the open and explorative capacity that it now has.
            </p>

            <p className="page_paragraph">
              Life after college for an artist can be tough. There’s not a lot of jobs going around,
              art buyers are far and few in between, and Joe Schmoe can get ‘art’ down at the Urban
              Outfitters for super low prices. “I moved back home like a lot of kids have to do
              nowadays when they graduate in a recession or a not great job market. My dad very
              kindly had set up a studio for me, just like this space. This table itself.” A table
              that could represent the strength of Owen’s support systems. Supportive parents.
              Passionate teachers. Inspirational peers. All things that help keep his weighty goals
              afloat. “I’ve always been a firm believer that a high tide lifts all boats, when it
              comes to art and comedy,” he says as he describes the first experiences that helped
              fill the sails, despite early rough seas. “One of the things that I think kept
            </p>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.cityOfNightLamp}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">{props.titleDescription1}</p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">
              <strong>{props.pageNumber}</strong> {props.abstraks}
            </p>
          </div>
        </div>
      </article>

      <PageNav
        prev={props.prev}
        next={props.next}
        modalTitle={props.modalTitle}
        modalContent={props.modalContent()}
      />
    </div>
  </div>
);

Issue26p8.propTypes = propTypes;
Issue26p8.defaultProps = defaultProps;

export default Issue26p8;
