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
  fuckThePoliceLoveTheDonut: PropTypes.string.isRequired,
  titleDescription1: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  issueNumber: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.func.isRequired,
};

const defaultProps = {
  prev: '/Publication/Issue27p5',
  next: '/Publication/Issue27p7',
  fuckThePoliceLoveTheDonut:
    'https://d173eg0xl75rn9.cloudfront.net/publication/issue27/jacob_leidolf/fuck-the-police-love-the-donut.jpg',
  titleDescription1: 'Jacob Leidolf - Fuck The Police Love The Donut',
  pageNumber: 10,
  company: 'Abstraks',
  issueNumber: 'issue-27',
  modalTitle: 'Issue 27 Contents',
  modalContent: function() {
    return issue27Modal;
  },
};

const Issue27p6 = props => (
  <div className={props.issueNumber}>
    <div className="header">
      <Header />
    </div>
    <div className="issue-page">
      <article className="issue-page__container container">
        <div className="issue-page__row row">
          <PublicationHome />
          <div className="page_column-3">
            <p className="page_paragraph">
              I process my experience of this life and everything in it.
            </p>

            <h3 className="page_paragraph__author">
              Your work is really political. How did that start?
            </h3>

            <p className="page_paragraph">
              Not sure if it ever “started.” Even some of my earlier work that I did when I first
              began to pursue my art seriously in middle and high school speaks to social or
              political issues that I’m concerned about. Some things directly connect to my life and
              experiences, the lives and experiences of friends, family, peers and people in my
              community. Others just really resonate with me and make me want to say something or
              ask a question.
            </p>

            <p className="page_paragraph">
              I feel like art has this amazing power to make people think about and engage with
              things they might otherwise ignore…in ways that other modes of communication can’t.
              Across language barriers and education and vantage points and perspectives, there’s an
              almost universal power of visual language that I find fascinating and try to use.
            </p>
          </div>

          <div className="page_column-3">
            <h3 className="page_paragraph__author">
              How do people react to works of yours that confront police brutality, like your “Stick
              It To Em” Series? Tell us about that project.
            </h3>

            <p className="page_paragraph">
              Overall, really well…there are some people who find my depictions challenging or
              downright disrespectful, especially my illustrations of pigs. But, for the most part,
              I get really positive responses to even my most controversial projects.
            </p>

            <p className="page_paragraph">
              The “Stick It To Em” series of events is a great example. I had been making stickers
              about local and…national incidents of police killing of civilians. In the aftermath of
              Ferguson, a catalyzing event in an unbroken string of killings by law enforcement, a
              lot of people wanted [political] stickers to use or put up in their area. To keep up
              with the demand for production, I invited folks to come make stickers with me. The
              process is pretty simple and anyone with a little practice can make a ton of nice
              stickers.
            </p>

            <p className="page_paragraph">
              The events themselves are delightful; people come together over art and invariably
              make their
            </p>
          </div>

          <div className="page_column-6">
            <div className="artist-work">
              <img
                src={props.fuckThePoliceLoveTheDonut}
                className="artist-work__image image"
                alt={props.titleDescription1}
              />
            </div>
          </div>
        </div>

        <div className="title-description__row row">
          <div className="page_column-6">
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

Issue27p6.propTypes = propTypes;
Issue27p6.defaultProps = defaultProps;

export default Issue27p6;
