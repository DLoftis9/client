import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue27Modal from '../../containers/publication-issue/Issue27Modal';

const issue27Modal = <Issue27Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  cityscape: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p8',
  next: '/Publication/Issue27p10',
  cityscape:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/jacob_leidolf/cityscape.jpg',
  titleDescription1: 'Jacob Leidolf - City Scape',
  company: 'Abstraks',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p9 = props => (
  <div className="issue-27">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.cityscape}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>

          <div className="page_column-3">
            <p className="page_paragraph">
              printmaking, which I loved so much I ended up minoring in it.
            </p>

            <p className="page_paragraph">
              It was also kind of a weird fit for me and a bit of a culture shock, even though I
              stayed in my hometown. BU is a very white, very wealthy school and I went from being
              one of three white kids in my graduating high school class to being in an environment
              where there were very few students or teachers of color and far less awareness about
              the social and political issues I had immersed myself in during high school.
            </p>

            <p className="page_paragraph">
              I continued to use my art to talk about these issues whenever I could and there it was
              clear that I was definitely in a different world. But, for all the weird looks or
              raised eyebrows, there were a lot of students and teachers who were supportive and
              encouraged me to make work, no matter how challenging or uncomfortable some people
              found it.
            </p>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6 page_column--right">
            <p className="titleDescription titleDescription__right">
              {props.company} <strong>17</strong>
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

Issue27p9.propTypes = propTypes;
Issue27p9.defaultProps = defaultProps;

export default Issue27p9;
