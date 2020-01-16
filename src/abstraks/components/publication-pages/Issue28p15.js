import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import PageNav from '../PageNav';
import PublicationHome from '../PublicationHome';
import Issue28Modal from '../../containers/publication-issue/Issue28Modal';

const issue28Modal = <Issue28Modal />;

const propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  seansDad: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue28p14',
  next: '/Publication/Issue28p16',
  seansDad:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue28/merk_those/mT_Seans_Dad_Digital_2015.jpg',
  titleDescription1: "Sean's Dad, Digital, 2015",
  pageNumber: 28,
  company: 'Abstraks',
  modalTitle: 'Issue 28 Contents',
  modalContent: function() {
    return issue28Modal;
  },
};

const Issue28p15 = props => (
  <div className="issue-28">
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <p className="page_paragraph">
              to make ladies who were actually pretty, realizing I had that over other artists I
              stuck to it. Try and catch up. If you look at the average clothing label nowadays
              everything is satanic imagery and illuminati bullshit which is fucking stupid to me so
              I started a series of anti illuminati pieces Tupac style. I just enjoy making fun of
              pop culture attention whores so I turn them into lizard people and demons. It’s just
              entertaining to me since I’m forced to listen to their brainwash shit on the radio all
              day. I have a tin foil kangol.
            </p>

            <p className="page_paragraph">
              With the roots in graffiti coming from Boston, how did you get your start in graffiti
              and how did that inspire your passion for art or vice versa? How have you seen
              graffiti culture change over the years?
            </p>

            <p className="page_paragraph">
              Before anything I would notice ryze tags everywhere I went. Once I saw full pieces I
              was like, oh these guys draw like me, okay lets do this. It’s all ryze’s fault for me
              personally at least and a lot of other guys around here. As far as the scene, I was
              never really part of it so whatever. When I see something incredible I get excited
              which is like every five
            </p>
          </div>

          <div className="page_column-9">
            <div className="artist-work">
              <img
                src={props.seansDad}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
            <p className="titleDescription">{props.titleDescription1}</p>

            <p className="titleDescription">
              <strong>{props.pageNumber}</strong> {props.company}
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

Issue28p15.propTypes = propTypes;
Issue28p15.defaultProps = defaultProps;

export default Issue28p15;
